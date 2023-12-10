#!/bin/bash

# Directory containing the files
dir="./src/chapters"

# Array of files to ignore
ignore_files=("index.tsx" "main.tsx") # Add more files as needed

# Function to check if a file is in the ignore list
is_ignored_file() {
    local file=$1
    for ignored in "${ignore_files[@]}"; do
        if [[ $file == $ignored ]]; then
            return 0 # File is in the ignore list
        fi
    done
    return 1 # File is not in the ignore list
}

# Get a sorted list of files
files=($(ls $dir | sort))

# Loop through the files array
for (( i=0; i<${#files[@]}-1; i++ )); do
    # Check if the current or next file is in the ignore list
    if is_ignored_file "${files[$i]}" || is_ignored_file "${files[$i+1]}"; then
        continue # Skip this pair
    fi

    # Run the diff command for the current and next file
    code --diff "$dir/${files[$i]}" "$dir/${files[$i+1]}"
done
