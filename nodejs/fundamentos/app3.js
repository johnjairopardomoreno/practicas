const fs        = require('fs');
const contenido = fs.readFileSync  ('readme.md', 'utf8');
const numPalabras = contenido.split(' ').length;
const repeticiones = (contenido.match(/react/gi) || []).length;
console.log(`La palabra "React" se repite ${repeticiones} veces.`);
console.log(`El archivo tiene ${numPalabras} palabras.`);