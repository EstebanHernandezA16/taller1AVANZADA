const input = require('readline-sync')

// 7. PROBLEMA: se necesita clasificar 10 números enteros positivos
// o negativos que contienen códigos de naves de guerra. Diseño
// un algoritmo que permita recibir dichos 50 números e indicar
// ¿Cuál fue el más cercano a cero? (Si el número es negativo se
// debe mostrar el resultado del valor absoluto)


const clasificarNumero = () =>{
    let numeroMasCercano
    for(let i=0; i<10; i++){
        let numero = input.questionInt('Ingrese un numero: ')
        if(i==0){
            numeroMasCercano = numero
        }
        if(Math.abs(numero)<Math.abs(numeroMasCercano)){
            numeroMasCercano= numero
        }
    }

    return numeroMasCercano

}

console.log(`El numero mas cercano a 0 es ${clasificarNumero()<0? Math.abs(clasificarNumero()): clasificarNumero()}`);

