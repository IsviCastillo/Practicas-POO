// Ejercicios de tarea (entrega individual)

// 1. Modelar una jerarquía de CuentaBancaria. Clase base: titular y saldo. Clases hijas: CuentaAhorro y CuentaCorriente. Implementar métodos de depósito y retiro con validaciones (no permitir saldo negativo).

export class CuentaBancaria {
    titular: string
    private saldo: number;

    constructor(titular: string, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(monto: number): void {
        if (monto > 0) {
            this.saldo += monto;
        } else {
            console.log("Monto inválido");
        }
    }
    retirar(monto: number): void {
        if (monto > 0 && monto <= this.saldo) {
            this.saldo -= monto;
        } else {
            console.log("Monto inválido o fondos insuficientes");
        }
    }
    mostrarSaldo(): number {
        return this.saldo;
    }
}

// Ejercicio 2.
export class Persona {
    nombre: string;
    edad: number;
    constructor(nombre: string, edad: number) {

        this.nombre = nombre;
        this.edad = edad;
    }
    mostrarRol(): string {
        return "Soy una persona";
    }
    validarEdad(): void {
        if (this.edad <= 0) {
            console.log("La edad debe ser mayor a 0");
        }
    }
}
export class Estudiante extends Persona {
    constructor(nombre: string, edad: number) {
        super(nombre, edad);
    }
    mostrarRol(): string {
        return "Soy un estudiante";
    }
}
export class Docente extends Persona {
    constructor(nombre: string, edad: number) {
        super(nombre, edad);
    }
    mostrarRol(): string {
        return "Soy un docente";
    }
}

// Ejercicio 3.
export class Producto {
    nombre: string;
    precio: number;

    constructor(nombre: string, precio: number) {
        this.nombre = nombre;
        this.precio = precio;
    }

    calcularPrecioFinal(): number {
        return this.precio;
    }
    validarPrecio(): void {
        if (this.precio <= 0) {
            console.log("El precio debe ser mayor a 0");
        }
}
}
export class ProductoDigital extends Producto {
    constructor(nombre: string, precio: number) {
        super(nombre, precio);
    }
}
export class ProductoFisico extends Producto {
    constructor(nombre: string, precio: number) {
        super(nombre, precio);
    }
    calcularPrecioFinal(): number {
        return this.precio * 1.15;
    }
}


// 4. Modelar una jerarquía de figuras geométricas. Clase base: Figura (método calcularArea()). 
// Clases hijas: Rectangulo y Circulo. Implementar validaciones para dimensiones mayores que 0.

export class Figura {
    calcularArea(): number {
        alert("Método no implementado");
        return 0;
    }

}
export class Rectangulo extends Figura {
    base: number;
    altura: number;
    constructor(base: number, altura: number) {
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea(): number {
        if (this.base > 0 && this.altura > 0) {
            return this.base * this.altura;
        } else {
            console.log("Las dimensiones deben ser mayores a 0");
            return 0;
        }
    }
}
export class Circulo extends Figura {
    radio: number;
    constructor(radio: number) {
        super();
        this.radio = radio;
    }
    calcularArea(): number {
        if (this.radio > 0) {
            return Math.PI * Math.pow(this.radio, 2);
        } else {
            console.log("El radio debe ser mayor a 0");
            return 0;
        }
    }
}