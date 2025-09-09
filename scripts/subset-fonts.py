#!/usr/bin/env python3
"""
Font Subsetting Script for Glyptodon
Automatically creates optimized Latin subsets for web fonts.
"""

import subprocess
import os
import sys
from pathlib import Path

# Configuration
FONTS_DIR = Path("public/fonts")
UNICODE_RANGES = [
    # Basic Latin
    "U+0020-007F",
    # Latin-1 Supplement (includes French accented characters)
    "U+00A0-00FF", 
    # Latin Extended-A (additional European characters)
    "U+0100-017F",
    # Common punctuation
    "U+2013",  # En dash
    "U+2014",  # Em dash
    "U+2018",  # Left single quotation mark
    "U+2019",  # Right single quotation mark
    "U+201C",  # Left double quotation mark
    "U+201D",  # Right double quotation mark
]

FONTS_TO_SUBSET = [
    {
        "input": "OleoScript-Regular.ttf",
        "output": "OleoScript-Regular-latin.woff2"
    },
    {
        "input": "RadioCanada-Italic-VariableFont_wdth,wght.ttf", 
        "output": "RadioCanada-latin.woff2"
    }
]

def run_pyftsubset(input_font, output_font):
    """Run pyftsubset command to create font subset."""
    cmd = [
        "pyftsubset",
        str(FONTS_DIR / input_font),
        f"--unicodes={','.join(UNICODE_RANGES)}",
        f"--output-file={FONTS_DIR / output_font}",
        "--flavor=woff2",
        "--layout-features=*",
        "--desubroutinize"
    ]
    
    print(f"Creating subset: {input_font} -> {output_font}")
    try:
        result = subprocess.run(cmd, check=True, capture_output=True, text=True)
        print(f"✓ Success: {output_font}")
        return True
    except subprocess.CalledProcessError as e:
        print(f"✗ Error creating {output_font}: {e}")
        print(f"STDERR: {e.stderr}")
        return False

def get_file_size(filepath):
    """Get file size in bytes."""
    try:
        return os.path.getsize(filepath)
    except OSError:
        return 0

def format_size(bytes_size):
    """Format bytes as human readable size."""
    for unit in ['B', 'KB', 'MB']:
        if bytes_size < 1024.0:
            return f"{bytes_size:.1f}{unit}"
        bytes_size /= 1024.0
    return f"{bytes_size:.1f}GB"

def main():
    """Main function to subset fonts."""
    print("🔤 Font Subsetting Script")
    print("=" * 40)
    
    # Check if pyftsubset is available
    try:
        subprocess.run(["pyftsubset", "--help"], capture_output=True, check=True)
    except (subprocess.CalledProcessError, FileNotFoundError):
        print("❌ pyftsubset not found. Please install fonttools:")
        print("   pip3 install fonttools brotli zopfli")
        sys.exit(1)
    
    # Check fonts directory exists
    if not FONTS_DIR.exists():
        print(f"❌ Fonts directory not found: {FONTS_DIR}")
        sys.exit(1)
    
    success_count = 0
    total_original_size = 0
    total_subset_size = 0
    
    # Process each font
    for font_config in FONTS_TO_SUBSET:
        input_file = FONTS_DIR / font_config["input"]
        output_file = FONTS_DIR / font_config["output"]
        
        if not input_file.exists():
            print(f"⚠️  Input font not found: {input_file}")
            continue
            
        original_size = get_file_size(input_file)
        
        if run_pyftsubset(font_config["input"], font_config["output"]):
            success_count += 1
            subset_size = get_file_size(output_file)
            savings = ((original_size - subset_size) / original_size) * 100
            
            print(f"   Original: {format_size(original_size)}")
            print(f"   Subset:   {format_size(subset_size)}")
            print(f"   Savings:  {savings:.1f}%")
            
            total_original_size += original_size
            total_subset_size += subset_size
        print()
    
    # Summary
    print("=" * 40)
    print(f"📊 Results: {success_count}/{len(FONTS_TO_SUBSET)} fonts processed successfully")
    
    if total_original_size > 0:
        total_savings = ((total_original_size - total_subset_size) / total_original_size) * 100
        print(f"💾 Total original size: {format_size(total_original_size)}")
        print(f"💾 Total subset size:   {format_size(total_subset_size)}")
        print(f"💾 Total savings:       {total_savings:.1f}%")
        
    print("\n🚀 Next steps:")
    print("1. Update CSS to use the new subset fonts")
    print("2. Update preload tags to use the smaller files")
    print("3. Test the fonts render correctly")

if __name__ == "__main__":
    main()
