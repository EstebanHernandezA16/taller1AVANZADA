const readlineSync = require('readline-sync')
// 1.PROBLEMA: Yoda el maestro jedi, necesita enseñar a sus aprendices
// Padawan a calcular la distancia a la que cualquiera de los planetas de la
// ruta N-14 pertenecientes a la ruta comercial de la federación
// intergaláctica, se encuentra del planeta NABOO.
// Para calcular dicha distancia se debe:
// • Recibir las coordenadas X,Y del planeta en UA
// • Establecer la distancia como:
// √(𝑥2 − 𝑥1)^2 + (𝑦2 − 𝑦1)^2


//suponiendo que las Coordenadas de Naboo es 32/52
const UA = readlineSync.question('Hola, dame las coordenadas (X/y) del planeta UA: ');

// console.log('x: '+Naboo.split('/')[0]);
// console.log('y: '+Naboo.split('/')[1]);
const UAX = UA.split('/')[0]
const UAY = UA.split('/')[1]

console.log(`La distancia entre Naboo y UA es de ${Math.sqrt((Math.pow(UAX-32)) + (Math.pow(UAY-52)))}`);





// console.log(`Hola ${nombre}`);
