// type genero = "M" | "F";

// export class Empleado {
//     nombre:string;
//     genero:genero;
//     edad:number;
//     numeroEmpleado:number;
//     salario:number;

//     constructor(nombre:string, genero:genero, edad:number, numeroEmpleado:number, salario:number) {
//         this.nombre = nombre;
//         this.genero = genero;
//         this.edad = edad;
//         this.numeroEmpleado = numeroEmpleado;
//         this.salario = salario;
//     }

//     trabajar(){
//         return"Trabaja 8 horas al dia";
//     }
    
//     private ValidarDatos(nombre:string, genero:genero, edad:number, numeroEmpleado:number, salario:number){
//         if(nombre.trim().length < 3){
//             throw new Error("El nombre debe tener al menos 3 caracteres");
//         }
//         if(genero !== "M" && genero !== "F"){
//             throw new Error("El genero debe ser M o F");
//         }
//         if(edad < 18 || edad > 65){
//             throw new Error("La edad debe estar entre 18 y 65");
//         }
//         if(numeroEmpleado <= 0){
//             throw new Error("El numero de empleado debe ser mayor a 0");
//         }
//         if(salario <= 10000000){
//             throw new Error("El salario debe ser mayor a 10000000");
//         }
//     }
// }

// const empleado1 = new Empleado("Juan", "M", 30, 12345, 15000000);
// const empleado2 = new Empleado("Maria", "F", 25, 54321, 12000000);

// console.log(empleado1);
// console.log(empleado2);

// //Empleado tiempo completo

// export class EmpleadoTiempoCompleto extends Empleado {
//     constructor(nombre:string, genero:genero, edad:number, numeroEmpleado:number, salario:number) {
//         super(nombre, genero, edad, numeroEmpleado, salario);
//         this.salario = salario;
//     }
//     trabajar(): string {
//         return "Trabaja 8 horas al dia";
//     }
// }


// export class EmpleadoPorHoras extends Empleado {
//     horasTrabajadas:number;
//     tarifaHora:number;

//     constructor(nombre:string, genero:genero, edad:number, numeroEmpleado:number, salario:number, horasTrabajadas:number, tarifaHora:number) {
//         super(nombre, genero, edad, numeroEmpleado, salario);
//         this.horasTrabajadas = horasTrabajadas;
//         this.tarifaHora = tarifaHora;
//     }
//     calculaerSalario(): number {
//         return this.horasTrabajadas * this.tarifaHora;
//     }
//     trabajar(): string {
//         return "Trabaja por horas";
//     }
// }


///Ejercicio practico en clase

export class Vehiculo {
    marca:string;
    modelo:string;
    año:number;

    constructor(marca:string, modelo:string, año:number) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
//     El año no puede ser mayor al año actual.
// Marca y modelo no pueden estar vacíos.
    AñoValido(año:number): boolean {
        const añoActual = new Date().getFullYear();
        return año <= añoActual;
    }

    MarcaModeloValido(marca:string, modelo:string): boolean {
        return marca.trim().length > 0 && modelo.trim().length > 0;
    }
}

export class Automovil extends Vehiculo {
    numeroPuertas:number;
    constructor(marca:string, modelo:string, año:number, numeroPuertas:number) {
        super(marca, modelo, año);
        this.numeroPuertas = numeroPuertas;
    }
    mostrarInformacion(): string {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}, Numero de puertas: ${this.numeroPuertas}`;
    }
}

export class Motocicleta extends Vehiculo {
    cilindrada:number;
    constructor(marca:string, modelo:string, año:number, cilindrada:number) {
        super(marca, modelo, año);
        this.cilindrada = cilindrada;
    }
    mostrarInformacion(): string {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}, Cilindrada: ${this.cilindrada}`;
    }
}
