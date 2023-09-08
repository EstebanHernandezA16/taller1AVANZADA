// 8. PROBLEMA: Para descubrir la ubicación de un listado con los
// últimos guerreros jedi de la galaxia se debe recibir un listado de
// 15 mapas los cuales tienen la siguiente información
// {nombrePlaneta, latitud, longitud, nivel de oxígeno en el
// planeta, volumen total del agua del planeta}. Diseñe una
// solución para:

// • Sumar la cantidad total de agua de los 15 planetas
// • Sumar y multiplicar por 100 el total de oxigeno de los 15 planetas
// • Encontrar si alguno de los 15 planetas tiene un nivel de oxigeno
// negativo y de ser así mostrar la información general de este
// • Encontrar si alguno de los 15 planetas no tiene agua y mostrar la
// información general de este

const planetas =[]
const generarPlanetas = () =>{
    
    const caracteresValidosPlanetas = 'abcedfghijklmnopqrstuvwxyz-123456'
    
    for(let p = 0; p<15; p++){
        let nombrePlaneta=''
        for(let i=0;i<6;i++){
            const nuevoCaracter = Math.floor(Math.random() * caracteresValidosPlanetas.length)
            nombrePlaneta = nombrePlaneta + caracteresValidosPlanetas.charAt(nuevoCaracter)
        }
        const longitud = Math.floor(Math.random()* 361)+'°'
        const latitud = Math.floor(Math.random()* 361)+'°'
        const nivelOxigeno = Math.floor(Math.random() * 101 - 30)
        const volumenAgua = Math.floor(Math.random() * 100 - 20)
        const planeta = {
            nombre:nombrePlaneta,
            latitud,
            longitud,
            nivelOxigeno,
            volumenAgua
        }
        planetas.push(planeta)
    }
analizarPlanetas(planetas)
}




const analizarPlanetas = (planetas) =>{
   let totalAgua=0
   let totalOxi =0
    planetas.map((planeta) =>{
        totalAgua=totalAgua+planeta.volumenAgua
        totalOxi = totalOxi +planeta.nivelOxigeno
        planeta.nivelOxigeno<0? console.log(`El planeta ${planeta.nombre} tiene un nivel de oxigeno negativo, ${planeta.nivelOxigeno} \n ${JSON.stringify(planeta, null, 2)}`) : null
         planeta.volumenAgua<0? console.log(`El planeta ${planeta.nombre} tiene un volumen de agua negativo, ${planeta.volumenAgua} \n ${JSON.stringify(planeta, null, 2)}`) : null
    })
    totalOxi=totalOxi*100
    console.log(`El total de oxigeno de todos los planetas fue de ${totalOxi}, y el total de volumen de agua de los mismos fue de ${totalAgua}`);
}

generarPlanetas();
