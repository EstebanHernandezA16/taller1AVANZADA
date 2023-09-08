const input = require('readline-sync')

// 6. PROBLEMA: Para habilitar la guerra de los clones es necesario
// clasificar la edad de estos, elabore un programa que permita
// recibir 20 edades y 20 códigos diferentes generadas
// aleatoriamente y determine cual de esas edades es la mayor. Si
// se repite la misma edad se debe contar el número de
// repeticiones

const generarCodigoAleatorio = () =>{
    const caracteresValidos = 'abcedfghijklmnopqrstuvwxyz-123456'
    let codigo
    for(let i = 0; i<5 ; i++){
        const nuevoCaracter = Math.floor(Math.random() * caracteresValidos.length)
        codigo = codigo + nuevoCaracter
    }

    return codigo
}

const obtenerClones = () =>{
    const clones =[]
    let cantidadClones

    do{
        cantidadClones = input.questionInt('¿Cuantos clones quiere categorizar?')

        if(cantidadClones <0){
            console.log('Ha digitado un numero negativo, el cual no es valido');
        }else if(cantidadClones>50){
            console.log('Ha digitado un numero mayor a 50, el cual no es valido');
        }else if (cantidadClones===0){
            console.log('No puedes ingresar 0 clones');
        }
    }while(cantidadClones<= 0 || cantidadClones >50);

    for(let i = 0; i< cantidadClones; i++){
        const clon ={
            identificacion: generarCodigoAleatorio(),
            edad: Math.floor(Math.random()* 80),
        }
        clones.push(clon)
    }

    return (categorizarClones(clones))
} 


const categorizarClones = (clones) =>{
let mayorEdad;
let repeticiones;
clones.map((clon, indice)=>{
    if(indice ===0){
        mayorEdad = clon.edad
    }else{
        if(mayorEdad< clon.edad){
            mayorEdad = clon.edad;
            repeticiones=0
        }else if(mayorEdad === clon.edad){
            repeticiones++;
        }
    }
});

return [mayorEdad, repeticiones]
}

const respuesta = obtenerClones();
console.log(`
    El clon de mayor edad fue de ${respuesta[0]} y ${
    respuesta[1]>1 
    ? `${respuesta[1]} clones mas obtuvieron su edad`
    : respuesta[1]<1 
    ? 'ningun clon tiene su edad' 
    : `${respuesta[1]} clon mas obtuvo su edad`}`);