import * as readline from "readline";

abstract class Bloque {
    constructor(
        public readonly tipoBloque: string,
        public readonly dureza: number,
        public readonly recursoQueEntrega: string
    ) {}

    romper(): string {
        console.log(this.mensajeAlRomperse());
        return this.recursoQueEntrega;
    }

    abstract mensajeAlRomperse(): string;
}

class BloqueHierro extends Bloque {
    constructor() {
        super("Hierro", 3, "Mena de hierro");
    }
    mensajeAlRomperse(): string {
        return "El bloque de hierro se parte con un sonido metálico seco.";
    }
}

class BloqueOro extends Bloque {
    constructor() {
        super("Oro", 4, "Mena de oro");
    }
    mensajeAlRomperse(): string {
        return "El bloque de oro muestra un brillo leve antes de quebrarse.";
    }
}

class BloqueDiamante extends Bloque {
    constructor() {
        super("Diamante", 6, "Diamante");
    }
    mensajeAlRomperse(): string {
        return "El bloque de diamante se rompe en fragmentos nítidos.";
    }
}

class BloqueObsidiana extends Bloque {
    constructor() {
        super("Obsidiana", 8, "Fragmento de obsidiana");
    }
    mensajeAlRomperse(): string {
        return "La obsidiana se resquebraja lentamente con un sonido profundo.";
    }
}

class BloqueEsmeralda extends Bloque {
    constructor() {
        super("Esmeralda", 5, "Esmeralda");
    }
    mensajeAlRomperse(): string {
        return "La esmeralda deja un destello tenue al romperse.";
    }
}

class BloqueCarbon extends Bloque {
    constructor() {
        super("Carbón", 2, "Carbón");
    }
    mensajeAlRomperse(): string {
        return "El bloque de carbón se desmorona con facilidad.";
    }
}

class Pico {
    constructor(
        public readonly material: string,
        public readonly poderDeMineria: number
    ) {}

    intentarMinar(bloque: Bloque): { exito: boolean; recurso?: string; mensaje: string } {
        if (this.poderDeMineria < bloque.dureza) {
            return {
                exito: false,
                mensaje: `El pico de ${this.material} no tiene fuerza suficiente para extraer ${bloque.tipoBloque}.`
            };
        }
        return {
            exito: true,
            recurso: bloque.romper(),
            mensaje: `Extracción completada: lograste minar ${bloque.tipoBloque} con un pico de ${this.material}.`
        };
    }
}

class Jugador {
    public inventario: Map<string, number> = new Map<string, number>();

    constructor(public readonly nombre: string, public pico: Pico) {}

    cambiarPico(nuevoPico: Pico): void {
        this.pico = nuevoPico;
        console.log(`${this.nombre} ahora utiliza un pico de ${nuevoPico.material}.`);
    }

    minarBloque(bloque: Bloque): void {
        console.log(`\n${this.nombre} intenta extraer un bloque de ${bloque.tipoBloque}...`);
        const resultado = this.pico.intentarMinar(bloque);
        console.log(resultado.mensaje);

        if (resultado.exito && resultado.recurso) {
            this.agregarAlInventario(resultado.recurso);
            console.log(`Recurso obtenido: ${resultado.recurso}`);
        }
    }

    mostrarInventario(): void {
        console.log("\n:. Inventario obtenido .:");
        if (this.inventario.size === 0) {
            console.log("El inventario está vacío por ahora.");
            return;
        }
        // Ordenar para una salida clara
        const entradas = Array.from(this.inventario.entries()).sort(([a], [b]) => a.localeCompare(b));
        for (const [recurso, cantidad] of entradas) {
            console.log(`- ${recurso}: ${cantidad}`);
        }
    }

    private agregarAlInventario(recurso: string): void {
        const actual = this.inventario.get(recurso) ?? 0;
        this.inventario.set(recurso, actual + 1);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntar(texto: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(texto, (respuesta: string) => resolve(respuesta.trim()));
    });
}

async function seleccionarOpcion<T>(
    titulo: string,
    opciones: T[],
    label: (opcion: T) => string
): Promise<T> {
    while (true) {
        console.log(`\n${titulo}`);
        opciones.forEach((opcion, indice) => {
            console.log(`${indice + 1}. ${label(opcion)}`);
        });
        const entrada = await preguntar("Selecciona una opción: ");
        const indice = Number(entrada);
        if (Number.isInteger(indice) && indice >= 1 && indice <= opciones.length) {
            return opciones[indice - 1] as T;
        }
        console.log("No es una opción válida. Intenta nuevamente.");
    }
}

async function confirmar(pregunta: string): Promise<boolean> {
    while (true) {
        const resp = (await preguntar(`${pregunta} (s/n): `)).toLowerCase();
        if (["s", "si", "sí"].includes(resp)) return true;
        if (["n", "no"].includes(resp)) return false;
        console.log("Responde con 's' o 'n'.");
    }
}

async function ejecutar(): Promise<void> {
    console.log("=== Sistema de minería (POO) ===");

    const nombreIngresado = await preguntar("Ingresa tu nombre: ");
    const nombreJugador = nombreIngresado.length > 0 ? nombreIngresado : "Jugador";

    const picosDisponibles: Pico[] = [
        new Pico("madera", 1),
        new Pico("piedra", 3),
        new Pico("hierro", 5),
        new Pico("diamante", 8)
    ];

    const picoInicial = picosDisponibles[0] ?? new Pico("madera", 1);
    const jugador = new Jugador(nombreJugador, picoInicial);
    

    console.log(`\nBienvenido, ${jugador.nombre}. Comienzas con un pico de madera.`);

    const fabricasBloques: Array<() => Bloque> = [
        () => new BloqueHierro(),
        () => new BloqueOro(),
        () => new BloqueDiamante(),
        () => new BloqueObsidiana(),
        () => new BloqueEsmeralda(),
        () => new BloqueCarbon()
    ];

    for (let intento = 1; intento <= 3; intento++) {
        console.log(`\n--- Interacción de minería ${intento} de 3 ---`);

        const quiereCambiar = await confirmar("¿Quieres cambiar de pico?");
        if (quiereCambiar) {
            const picoElegido = await seleccionarOpcion(
                "Elige un pico:",
                picosDisponibles,
                (pico) => `${pico.material} (poder ${pico.poderDeMineria})`
            );
            jugador.cambiarPico(picoElegido);
        }

        const fabricaElegida = await seleccionarOpcion(
            "Elige un bloque para minar:",
            fabricasBloques,
            (fabrica) => {
                const b = fabrica();
                return `${b.tipoBloque} (dureza ${b.dureza}, recurso ${b.recursoQueEntrega})`;
            }
        );

        jugador.minarBloque(fabricaElegida());
    }

    jugador.mostrarInventario();
    rl.close();
}

ejecutar().catch((error) => {
    console.error("Ocurrió un error durante la ejecución:", error);
    rl.close();
});