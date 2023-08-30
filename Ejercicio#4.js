const input = require('readline-sync')
// 4. PROBLEMA: QUI-GON JINN está encargado de revisar n sables
// de luz y contabilizar la cantidad de energía de sables que tienen
// negativa en Joules.

const sables = []

const  recopilarEnergiaSables = () =>{
    let respuesta
    do{
     const sable = parseFloat(input.question('Ingresa la cantidad de energia que tiene el sable: '))
        sables.push(sable)
        do{
            respuesta = input.question('¿Desea ingresar otro sable laser? S/N: ').toUpperCase();
            if(respuesta[0]!== 'S' && respuesta[0] !== 'N'){
                console.log('Para continuar solamente puedo aceptar que escribas S para si ó N para no');
            }   
        }while(respuesta[0] !=='S' && respuesta[0] !=='N' );
      
    }while(respuesta[0]=='S');

    //callback
return recopilarEnergiaNegativaSables();
}


const recopilarEnergiaNegativaSables = () =>{
    let sableNeg= 0
    sables.map((sable) =>{
        sable<0? sableNeg = sableNeg+1 : null
    })
    
return sableNeg
}


const sablesNegativos =recopilarEnergiaSables();
console.log(`De todos los sables de luz registrados he encontrado ${sablesNegativos===1? `${sablesNegativos} sable negativo`:`${sablesNegativos} sables negativos`} `);
