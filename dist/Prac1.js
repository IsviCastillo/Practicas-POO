// Enunciado:
// Crear una clase Estudiante que contenga los siguientes atributos:
// nombre (string)
// carnet (string)
// notaFinal (number)
// La clase debe incluir:
// Un constructor para inicializar los atributos.
// Un método mostrarInformacion() que imprima los datos del estudiante.
// Posteriormente, instanciar al menos dos objetos y ejecutar el método en cada uno para observar cómo funcionan de manera independiente.
// class Estudiante {
//     private nombre: string;
//     private carnet: string;
//     public notaFinal: number;
//     constructor(nombre: string, carnet: string, notaFinal: number) {
//         this.nombre = nombre;
//         this.carnet = carnet;
//         this.notaFinal = notaFinal;
//         }
//     mostrarInformacion(): string {
//         return `Nombre: ${this.nombre}, Carnet: ${this.carnet}, Nota Final: ${this.notaFinal}`;
//     }
//     actualizarNota(nuevaNota: number): void {
//         if (nuevaNota <  0 && nuevaNota > 10) {
//             this.notaFinal = nuevaNota;
//         } else {
//             console.log("La nota no puede ser menor a 0 ni mayor a 10");
//         }
//     }
//     actualizarCarnet(nuevoCarnet: string): void {
//         this.carnet = nuevoCarnet;
//     }
// }
// const alumno1 = new Estudiante("Requeno", "U202000000", 7);
// const alumno2 = new Estudiante("Juan", "U202000001", 8);
// const alumno3 = new Estudiante("Isvi", "U202000002", 9);
// console.log(alumno1.mostrarInformacion());
// alumno1.actualizarCarnet("U202000003");
// alumno1.actualizarNota(9);
// console.log(alumno1.mostrarInformacion());
// alumno1.actualizarNota(-10);
// console.log(alumno1.mostrarInformacion());
class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    calcularTotal() {
        console.log("Total: " + (this.precio * this.cantidad));
        return this.precio * this.cantidad;
    }
    mostrarDetalles() {
        console.log("Producto: " + this.nombre + ", Precio: " + this.precio + ", Cantidad: " + this.cantidad);
        return `Producto: ${this.nombre}, Precio: ${this.precio}, Cantidad: ${this.cantidad}`;
    }
}
const producto1 = new Producto("Redmi Note 12 Pro", 350, 2);
const producto2 = new Producto("TV Samsung", 1200, 1);
producto1.mostrarDetalles();
producto1.calcularTotal();
producto2.mostrarDetalles();
producto2.calcularTotal();
export {};
//# sourceMappingURL=Prac1.js.map