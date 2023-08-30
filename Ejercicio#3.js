const input = require("readline-sync");
// 3. PROBLEMA: La luna de Endor pierde temperatura día a día, para ello
// hay que hacer un monitoreo constante, Cree una función de flecha que
// permita calcular la temperatura media de la luna a partir de la
// temperatura máxima y mínima de cada día

//Voy a hacer un añadido, voy a guardar la informacion y el resultado de todos los dias de una semana

const historial = [];

const RegistrarTemperaturas = () => {
  for (let i = 1; i <= 7; i++) {
    let dia;
    switch (i) {
      case 1:
        dia = "Lunes";
        break;
      case 2:
        dia = "Martes";
        break;
      case 3:
        dia = "Miercoles";
        break;
      case 4:
        dia = "Jueves";
        break;
      case 5:
        dia = "Viernes";
        break;
      case 6:
        dia = "Sabado";
        break;
      case 7:
        dia = "Domingo";
        break;
      default:
        break;
    }

    let temperatura_maxima = input.question(
      `Ingrese la temperatura maxima registrada del dia ${dia}: `
    );
    let temperatura_minima = input.question(
      `Ahora ingrese la temperatura minima registrada del dia ${dia}: `
    );

    let temperatura_promedio =
      ((parseFloat(temperatura_maxima) + parseFloat(temperatura_minima)) / 2).toFixed(2);
    console.log(`La temperatura promedio del dia ${dia} fue de ${temperatura_promedio} °c`);
    let registroDiario = {
      dia: dia,
      tempMax: temperatura_maxima,
      tempMin: temperatura_minima,
      tempProm: temperatura_promedio,
    };
    historial.push(registroDiario);
  }
};

// RegistrarTemperaturas();

// console.log(historial);


// const RegistrarTemperaturas = () =>{
//     let respuesta=1
//     let dia
//     while (respuesta===1){
//    let respuestaT = input.question('¿Va a registrar mas temperaturas? S/N ');
//     respuestaT=='S'? respuesta=1 : respuesta=0
//     let respuestaDiaria = input.question('¿Desea registrar temperaturas el dia de hoy? S/N ')
//     if(respuestaDiaria!='S'){
//          dia = input.question('No va a registrar temperatura el dia de hoy, para mantener un registro de dias ingrese el dia de hoy: ')
//         let registroDiario ={
//             dia: dia,
//             no_registrado: true
//         }

//         historial.push(registroDiario)
//         respuestaDiaria=0
       
        
//     }else{
        
//         dia = input.question('Ingrese el dia de hoy que va a registrar las temperaturas: ')
//         respuestaDiaria=1
//     }
//     let ArrTemperaturas = []
//     while (respuestaDiaria===1) {
//     let temperatura = input.question('Ingrese la temperatura capturada: ')
    
//     ArrTemperaturas.push(parseFloat(temperatura))

//     let respuestaDiaria = input.question('¿Desea registrar otra temperatura el dia de hoy? S/N ')
//    if(respuestaDiaria=='S'){
//     respuestaDiaria=1
//    }else{
//     // pushear temperaturas guardadas al objeto
//     //error en sum temps arreglar ReferenceError: Cannot access 'SumTemps' before initialization
//     let NTemp = ArrTemperaturas.length;
//     let SumTemps = ArrTemperaturas.map((temp)=>{
//         SumTemps = SumTemps+temp
//     })
//     let tempMax =0
//     let tempMin=0
//     ArrTemperaturas.map((temp)=>{
//         if(temp>=tempMax){
//             tempMax=temp
//         }
//         if(tempMin==0){
//             tempMin=temp
//         }else{
//             if(temp<=tempMin){
//                 tempMin=temp
//             }
//         }
//     })

//     let temperatura_promedio = (SumTemps/NTemp).toFixed(2)

//     let registroDiario={
//         dia: dia,
//         temperaturas: ArrTemperaturas,
//         tempProm: temperatura_promedio,
//         tempMax: tempMax.toFixed(2),
//         tempMin: tempMin.toFixed(2),
//     }
//     historial.push(registroDiario)
//     respuestaDiaria=0
//    }
//     } 
    

    
//    } 


// }

RegistrarTemperaturas();

console.log(historial);