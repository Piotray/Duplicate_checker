# Duplicate File Checker

This is a Node.js application that scans a specified directory and identifies duplicate files based on their content. It uses SHA-256 hashing to calculate the unique hash of each file and compares these hashes to determine if any files are duplicates.

## Features

- Recursively scans directories and subdirectories to find all files.
- Uses SHA-256 hashing to detect duplicate files based on their content.
- Outputs a list of duplicate files along with their original counterparts.

## Why SHA-256?

SHA-256 (Secure Hash Algorithm) is a cryptographic hash function that produces a 256-bit (32-byte) hash value, commonly used for ensuring data integrity. In this application, SHA-256 is used to generate a unique hash for each file. If two files have the same hash, they are considered duplicates, meaning their contents are identical.


### **Efficiency of Hashing for File Comparison**

The use of hashing significantly speeds up the process of comparing files. Rather than comparing file contents byte by byte (which can be slow for large files), the application computes a SHA-256 hash for each file. These hashes act as a "fingerprint" of the file, allowing for a quick comparison of file contents.


## Installation and Usage

### 1. Install Node.js

If you don't have Node.js installed, follow these steps:

- Go to the [official Node.js website](https://nodejs.org/en/).
- Download and install the recommended version for your operating system.
- 
### 2. Clone the Repository 

Clone this repository to your local machine: 
```sh
 git clone https://github.com/Piotray/Duplicate_checker.git
```

### 3. Navigate to project 
```sh
cd Duplicate_checker
```

## 4. Running the Program

After installation, you can run the program by providing the directory path you want to scan for duplicates. 

1. Open the `index.js` file and replace `'***'` with the path to the directory you want to check.  
   For example:

   ```javascript
   const directoryToSearch = 'C:/Users/YourUser/Documents/FolderX';
   ```
Then run the script using Node.js: 
```sh
 node index.js
```
### Example Output
 If duplicates are found, the output will look like this:
 ```sh
 Duplicate files found: 
Original: C:/Users/YourUser/Documents/FolderX/file1.txt 
Duplicate: C:/Users/YourUser/Documents/FolderX/duplicate1.txt 
--- 
Original: C:/Users/YourUser/Documents/FolderX/file2.txt
Duplicate: C:/Users/YourUser/Documents/FolderX/duplicate2.txt 
---
```

## Acknowledgements

Thanks to **Node.js** for providing a fast, event-driven environment that enables efficient file processing and scalability in this project.
