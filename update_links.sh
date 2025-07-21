#!/bin/bash

# Script to update href attributes from old format to new format
# Old format: href="/path"
# New format: href="{{store direct_url="path"}}"

echo "Starting link format update..."

# Find all HTML files and update href attributes
find . -name "*.html" -type f | while read -r file; do
    echo "Processing: $file"

    # Create a backup of the original file
    cp "$file" "$file.backup"

    # Update href attributes using sed
    # This regex matches href="/something" and replaces it with href="{{store direct_url="something"}}"
    sed -i 's/href="\//href="{{store direct_url="/g' "$file"
    sed -i 's/{{store direct_url="\/\//{{store direct_url="/g' "$file"

    echo "Updated: $file"
done

echo "Link format update completed!"
echo "Backup files have been created with .backup extension"
echo "Please review the changes and remove backup files if satisfied"
