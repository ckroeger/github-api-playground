// Creates a markdown list of all js-files in dir 👉 Usage: node js-files-list.js
const fs = require('fs');
const path = require('path');

// Get all files in the current directory
const files = fs.readdirSync('.');

// Filter the list to keep only JavaScript files
const jsFiles = files.filter(file => path.extname(file) === '.js');

let markdownOutput = '';

// For each JavaScript file
jsFiles.forEach(file => {
    // Read the file
    const content = fs.readFileSync(file, 'utf8');

    // Extract the first comment line
    const firstCommentLine = content.split('\n').find(line => line.startsWith('//'));

    // Generate the Markdown output
    const markdownLine = `* [${file}](./${file}) ${firstCommentLine ? firstCommentLine.replace('//', '') : ''}\n`;
    markdownOutput += markdownLine;
});

//console.log(markdownOutput);

let readme = fs.readFileSync('README.md', 'utf8');
readme = readme.replace(/<!-- scripts_start -->([\s\S]*?)<!-- scripts_end -->/, `<!-- scripts_start -->\n${markdownOutput}\n<!-- scripts_end -->`);
fs.writeFileSync('README.md', readme);