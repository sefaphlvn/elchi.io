const fs = require('fs');
const path = require('path');

const sourceFile = path.join(__dirname, '../robots.txt');
const destinationFile = path.join(__dirname, '../dist/robots.txt');

fs.copyFileSync(sourceFile, destinationFile);
console.log('robots.txt has been copied to dist folder');