const fs = require('fs');
const data = fs.readFileSync('readme.md', 'utf8');    
const can_palabras = data.split(' ').length;  
console.log("Cantidad de palabras: " + can_palabras);   

const num_repeticiones = (data.match(/React/ig) || []).length;
console.log("Número de repeticiones de 'React': " + num_repeticiones);
