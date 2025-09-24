console.log("Paso 1");// sincronico 
setTimeout(() => {   // libUV   3 segundos   (primero en la cola)
    console.log("Paso 2");     
}, 3000);
setTimeout(() => { // libUV   0 segundos (Segundo en la cola porque el primero tiene 3 segundos)
    console.log("Paso 3");     
}, 0);
setTimeout(() => { // libUV   0 segundos (Tercero en la cola)
    console.log("Paso 4");     
}, 0);

console.log("Paso 5");      