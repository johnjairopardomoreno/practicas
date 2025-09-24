const fs = require('fs');
const data = fs.readFileSync('readme.md', 'utf8');      
const new_data = data.replace(/React/ig, 'Angular');     
fs.writeFileSync('readme2.md', new_data);
console.log(data);  