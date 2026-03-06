export declare class CuentaBancaria {
    titular: string;
    private saldo;
    constructor(titular: string, saldo: number);
    depositar(monto: number): void;
    retirar(monto: number): void;
    mostrarSaldo(): number;
}
export declare class Persona {
    nombre: string;
    edad: number;
    constructor(nombre: string, edad: number);
    mostrarRol(): string;
    validarEdad(): void;
}
export declare class Estudiante extends Persona {
    constructor(nombre: string, edad: number);
    mostrarRol(): string;
}
export declare class Docente extends Persona {
    constructor(nombre: string, edad: number);
    mostrarRol(): string;
}
export declare class Producto {
    nombre: string;
    precio: number;
    constructor(nombre: string, precio: number);
    calcularPrecioFinal(): number;
    validarPrecio(): void;
}
export declare class ProductoDigital extends Producto {
    constructor(nombre: string, precio: number);
}
export declare class ProductoFisico extends Producto {
    constructor(nombre: string, precio: number);
    calcularPrecioFinal(): number;
}
export declare class Figura {
    calcularArea(): number;
}
export declare class Rectangulo extends Figura {
    base: number;
    altura: number;
    constructor(base: number, altura: number);
    calcularArea(): number;
}
export declare class Circulo extends Figura {
    radio: number;
    constructor(radio: number);
    calcularArea(): number;
}
//# sourceMappingURL=EjerciciosP2.d.ts.map