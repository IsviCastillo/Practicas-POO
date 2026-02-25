"use strict";
// Enunciado:
Object.defineProperty(exports, "__esModule", { value: true });
// Crear una clase Estudiante que contenga los siguientes atributos:
// nombre (string)
// carnet (string)
// notaFinal (number)
// La clase debe incluir:
// Un constructor para inicializar los atributos.
// Un método mostrarInformacion() que imprima los datos del estudiante.
// Posteriormente, instanciar al menos dos objetos y ejecutar el método en cada uno para observar cómo funcionan de manera independiente.
class Estudiante {
    constructor(nombre, carnet, notaFinal) {
        this.nombre = nombre;
        this.carnet = carnet;
        this.notaFinal = notaFinal;
    }
    mostrarInformacion() {
        console.log("Estudiante:" + this.nombre);
        console.log("Carnet:" + this.carnet);
        console.log("Nota Final:" + this.notaFinal);
    }
}
const alumno1 = new Estudiante("Requeno", "U202000000", 7);
alumno1.mostrarInformacion();
//# sourceMappingURL=index.js.map