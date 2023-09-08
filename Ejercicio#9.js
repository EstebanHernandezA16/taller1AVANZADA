
// 9. PROBLEMA: Yoda el maestro jedi, necesita asignar a sus
// aprendices Padawans 2 actividades dependiendo de la edad de
// ellos:
// • Manejo de la fuerza: Si el aprendiz es menor de 15 años
// • Manejo del sable de luz: Si el aprendiz es mayor de 15 años
// Inicialmente, se debe programar una función que asocie los datos de:
// {nombre, planeta, edad y estatura} de 1 Padawan a un objeto y una vez
// este objeto sea creado se debe llamar a una función secundaria que
// clasifique y muestre en consola la actividad asignada al Padawan 



const crearPadawan = (nombre,planeta,edad,estatura, clasificarPadawan) =>{

    setTimeout(()=>{
        let padawan = {
            nombre,
            planeta,
            edad,
            estatura,
        }
        clasificarPadawan(padawan)
    }, 2000)

}


crearPadawan('Murork','4546B',14,'1.23cm',(padawan) =>{
    padawan.edad<15? console.log(`${padawan.nombre} tienes ${padawan.edad} años y por eso vas a la clase manejo de la fuerza`) : console.log(`${padawan.nombre} tienes ${padawan.edad} años y por eso vas a la clase de manejo del sable obvio de luz`);
})