// https://github.com/facebook/react
const fs = require('fs');
const data = fs.readFileSync('readme.md', 'utf8');       
console.log(data);  