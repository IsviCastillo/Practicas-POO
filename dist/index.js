// import {Empleado, EmpleadoTiempoCompleto, EmpleadoPorHoras} from "./Pract2";
// const empleadoTiempoCompleto = new EmpleadoTiempoCompleto("Carlos", "M", 40, 67890, 20000000);
// const empleadoPorHoras = new EmpleadoPorHoras("Ana", "F", 22, 98765, 50000, 40, 25000);
// console.log(empleadoTiempoCompleto.trabajar());
// console.log(empleadoPorHoras.trabajar());
// console.log("Salario: " + empleadoPorHoras.calculaerSalario());
// import {Vehiculo,Automovil,Motocicleta } from "./Pract2.js";
// const carro1 = new Automovil("Toyota", "Corolla", 2020, 4);
// const moto1 = new Motocicleta("Honda", "CBR500R", 2021, 500);
// console.log(carro1.mostrarInformacion());
// console.log(moto1.mostrarInformacion());
///Ejercicios individuales de tarea
//Ejercicio 1.
// import {CuentaBancaria} from "./EjerciciosP2.js";
// const cuenta1 = new CuentaBancaria("Juan", 1000);
// cuenta1.depositar(500);
// cuenta1.retirar(200);
//Ejercicio 2.
// import {Persona, Estudiante, Docente} from "./EjerciciosP2.js";
// const persona1 = new Persona("Carlos", 30);
// const estudiante1 = new Estudiante("Lian", 17);
// const docente1 = new Docente("Yudis", 32);
// console.log(persona1.mostrarRol());
// console.log(estudiante1.mostrarRol());
// console.log(docente1.mostrarRol());
//Ejercicio 3.
// import { ProductoFisico, ProductoDigital } from "./EjerciciosP2.js";
// const productoFisico1 = new ProductoFisico("Laptop", 1500);
// const productoDigital1 = new ProductoDigital("Software", 200);
// console.log(`Producto fisico: ${productoFisico1.nombre} - Precio final: ${productoFisico1.calcularPrecioFinal().toFixed(2)}`);
// console.log(`Producto digital: ${productoDigital1.nombre} - Precio final: ${productoDigital1.calcularPrecioFinal().toFixed(2)}`);
//Ejercicio 4.
import { Figura, Circulo, Rectangulo } from "./EjerciciosP2.js";
const circulo1 = new Circulo(5);
const rectangulo1 = new Rectangulo(4, 6);
console.log(`Área del círculo: ${circulo1.calcularArea().toFixed(2)}`);
console.log(`Área del rectángulo: ${rectangulo1.calcularArea().toFixed(2)}`);
//# sourceMappingURL=index.js.map