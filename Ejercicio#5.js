const input = require('readline-sync')
// 5. PROBLEMA: Watto paga a su personal de ventas un salario de
// 3500000 mensuales, más una comisión de 1500000 por cada
// licencia de software vendida menos el 5% de deducciones por
// impuestos sobre el total devengadp. Codifica un programa que
// calcule e imprima el salario mensual de un vendedor dado;


const salario_base = 3500000

const calcularSalario = () =>{
    const cantidadVentas = input.questionInt('Ingrese la cantidad de ventas que ha logrado este mes: ')
    const comision = cantidadVentas*1500000
    return  (comision*salario_base)*0.05
}


console.log(`Su salario va a ser de ${calcularSalario()} este mes`);
