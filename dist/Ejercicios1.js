"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Ejercicio 1.
class Empleado {
    constructor(nombre, salarioBase, horasTrabajadas) {
        this.nombre = nombre;
        this.salarioBase = salarioBase;
        this.horasTrabajadas = horasTrabajadas;
    }
    calcularSalarioTotal(tarifaHora) {
        return this.salarioBase + (this.horasTrabajadas * tarifaHora);
    }
}
const empleado1 = new Empleado("Sebastian", 950, 40);
const tarifaHora = 15;
console.log("El salario total es de: " + empleado1.calcularSalarioTotal(tarifaHora));
//Ejercicio 2.
class CuentaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(monto) {
        if (monto > 0) {
            this.saldo += monto;
        }
        else {
            console.log("Monto inválido");
        }
    }
    retirar(monto) {
        if (monto > 0 && monto <= this.saldo) {
            this.saldo -= monto;
        }
        else {
            console.log("Monto inválido o fondos insuficientes");
        }
    }
    mostrarSaldo() {
        return this.saldo;
    }
}
const cuenta1 = new CuentaBancaria("Messi", 17000);
cuenta1.depositar(5000);
cuenta1.retirar(1000);
console.log("El saldo actual es de: " + cuenta1.mostrarSaldo());
//Ejercicio 3.
class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    mostrarInformacion() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
    }
}
const vehiculo1 = new Vehiculo("Lexus", "LFA", 2011);
console.log(vehiculo1.mostrarInformacion());
//Ejercicio 4.
class Libro {
    constructor(titulo, autor, numeroPaginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.numeroPaginas = numeroPaginas;
    }
    mostrarInformacion() {
        return `Titulo: ${this.titulo}, Autor: ${this.autor}, Numero de Paginas: ${this.numeroPaginas}`;
    }
}
const libro1 = new Libro("El Poder del Aqui y Ahora", "Dalai Lama", 200);
const libro2 = new Libro("Luna de Plutón", "Dross", 300);
console.log(libro1.mostrarInformacion());
console.log(libro2.mostrarInformacion());
//# sourceMappingURL=Ejercicios1.js.map