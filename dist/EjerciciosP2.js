// Ejercicios de tarea (entrega individual)
// 1. Modelar una jerarquía de CuentaBancaria. Clase base: titular y saldo. Clases hijas: CuentaAhorro y CuentaCorriente. Implementar métodos de depósito y retiro con validaciones (no permitir saldo negativo).
export class CuentaBancaria {
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
// Ejercicio 2.
export class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    mostrarRol() {
        return "Soy una persona";
    }
    validarEdad() {
        if (this.edad <= 0) {
            console.log("La edad debe ser mayor a 0");
        }
    }
}
export class Estudiante extends Persona {
    constructor(nombre, edad) {
        super(nombre, edad);
    }
    mostrarRol() {
        return "Soy un estudiante";
    }
}
export class Docente extends Persona {
    constructor(nombre, edad) {
        super(nombre, edad);
    }
    mostrarRol() {
        return "Soy un docente";
    }
}
// Ejercicio 3.
export class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    calcularPrecioFinal() {
        return this.precio;
    }
    validarPrecio() {
        if (this.precio <= 0) {
            console.log("El precio debe ser mayor a 0");
        }
    }
}
export class ProductoDigital extends Producto {
    constructor(nombre, precio) {
        super(nombre, precio);
    }
}
export class ProductoFisico extends Producto {
    constructor(nombre, precio) {
        super(nombre, precio);
    }
    calcularPrecioFinal() {
        return this.precio * 1.15;
    }
}
// 4. Modelar una jerarquía de figuras geométricas. Clase base: Figura (método calcularArea()). 
// Clases hijas: Rectangulo y Circulo. Implementar validaciones para dimensiones mayores que 0.
export class Figura {
    calcularArea() {
        alert("Método no implementado");
        return 0;
    }
}
export class Rectangulo extends Figura {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        if (this.base > 0 && this.altura > 0) {
            return this.base * this.altura;
        }
        else {
            console.log("Las dimensiones deben ser mayores a 0");
            return 0;
        }
    }
}
export class Circulo extends Figura {
    constructor(radio) {
        super();
        this.radio = radio;
    }
    calcularArea() {
        if (this.radio > 0) {
            return Math.PI * Math.pow(this.radio, 2);
        }
        else {
            console.log("El radio debe ser mayor a 0");
            return 0;
        }
    }
}
//# sourceMappingURL=EjerciciosP2.js.map