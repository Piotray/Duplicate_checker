const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

function calculateHash(filePath) {
    return new Promise((resolve, reject) => {
        const hash = crypto.createHash('sha256');
        const stream = fs.createReadStream(filePath);

        stream.on('data', (chunk) => hash.update(chunk));
        stream.on('end', () => resolve(hash.digest('hex')));
        stream.on('error', (err) => reject(err));
    });
}

async function getAllFiles(dir, fileList = []) {
    const files = await fs.promises.readdir(dir, { withFileTypes: true });

    for (const file of files) {
        const filePath = path.join(dir, file.name);

        if (file.isDirectory()) {
            await getAllFiles(filePath, fileList); 
        } else {
            fileList.push(filePath);
        }
    }

    return fileList;
}

async function findDuplicates(dir) {
    const allFiles = await getAllFiles(dir);
    const hashMap = {};
    const duplicates = [];

    for (const file of allFiles) {
        const hash = await calculateHash(file);

        if (hashMap[hash]) {
            duplicates.push({ original: hashMap[hash], duplicate: file });
        } else {
            hashMap[hash] = file;
        }
    }

    return duplicates;
}
// Run the program
(async () => {
const directoryToSearch = '***'; // Put your directory path here (example: C:/Users/Admin/Documents/FolderX)

    try {
        const duplicates = await findDuplicates(directoryToSearch);

        if (duplicates.length > 0) {
            console.log('Duplicate files found:');
            duplicates.forEach(({ original, duplicate }) => {
                console.log(`Original: ${original}`);
                console.log(`Duplicate: ${duplicate}`);
                console.log('---');
            });
        } else {
            console.log('No duplicate files found.');
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
})();
