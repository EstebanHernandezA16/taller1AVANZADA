// 10. Grogu ha iniciado su entrenamiento Jedi y debe activar un
// software que permita clasificar su dieta:
// alimento = {
// nombre,
// tipo (Puede ser vegetal, animal, insecto),
// nivel de energía aportado (números entre 1 00-500)
// }
// Cree un programa que permita recibir 300 alimentos y mediante una
// función primaria después de 5 segundos se pueda obtener solo los
// alimentos de tipo vegetal que entreguen más de 200 unidades de
// energía. Finalmente, una función callback debe permitir entregar la
// sumatoria de niveles de energía entregados por los alimentos vegetales
// consumidos en la dieta de Grogu.

const alimentos =[]

// const alimento ={
//     nombre:'aleatorio',
//     tipo: array[2],
//     nivelEnergia: Math.floor(Math.random() * 501)
// }

const obtenerNombre = () =>{
    const caracteresValidosPlanetas = 'abcedfghijklmnopqrstuvwxyz-123456/Hinokami'
    let nombreAlimento=''
    for(let i=0;i<6;i++){
        const nuevoCaracter = Math.floor(Math.random() * caracteresValidosPlanetas.length)
        nombreAlimento = nombreAlimento + caracteresValidosPlanetas.charAt(nuevoCaracter)
    }
    return nombreAlimento
}

const obtenerTipo = () =>{
    const tipos =['vegetal', 'animal', 'insecto']

    const i = Math.floor(Math.random() * 3)

    return tipos[i]
}

const mostrarAlimentosNutritivos = (alimentos) =>{
    const alimentosFiltrados =[]
    alimentos.map((alimento)=>{
        alimento.nivelEnergia>200 && alimento.tipo=='vegetal'? alimentosFiltrados.push(alimento) : null
    })
    return alimentosFiltrados

}



const obtenerAlimentos =() =>{
    for(let i=0; i<300; i++){
        const alimento ={
            nombre: obtenerNombre(),
            tipo: obtenerTipo(),
            nivelEnergia: Math.floor(Math.random() * (501 - 100))+100
        }
        alimentos.push(alimento)
    }

    setTimeout(()=>{
       let nivelEnergiaTotal=0
        mostrarAlimentosNutritivos(alimentos).map((AlimentoFiltrado)=>{
            nivelEnergiaTotal=nivelEnergiaTotal+AlimentoFiltrado.nivelEnergia
        })
       console.log(`El nivel de energia total que recibio Grogu fue de ${nivelEnergiaTotal}`);
    },5000)
}

obtenerAlimentos();