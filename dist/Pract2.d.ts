export declare class Vehiculo {
    marca: string;
    modelo: string;
    año: number;
    constructor(marca: string, modelo: string, año: number);
    AñoValido(año: number): boolean;
    MarcaModeloValido(marca: string, modelo: string): boolean;
}
export declare class Automovil extends Vehiculo {
    numeroPuertas: number;
    constructor(marca: string, modelo: string, año: number, numeroPuertas: number);
    mostrarInformacion(): string;
}
export declare class Motocicleta extends Vehiculo {
    cilindrada: number;
    constructor(marca: string, modelo: string, año: number, cilindrada: number);
    mostrarInformacion(): string;
}
//# sourceMappingURL=Pract2.d.ts.map