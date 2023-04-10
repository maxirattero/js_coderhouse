const carrito = [];

const componentes = [{codigo: 1, tipo: 'Procesador', precio: 40000},
                     {codigo: 2, tipo: 'Motherboard', precio: 65000},
                     {codigo: 3, tipo: 'Memoria Ram', precio: 18000},
                     {codigo: 4, tipo: 'Disco Duro', precio: 10000},
                     {codigo: 5, tipo: 'Disco Solido', precio: 15000},
                     {codigo: 6, tipo: 'Placa de Video AMD', precio: 150000},
                     {codigo: 7, tipo: 'Placa de Video Nvidia', precio: 320000},
                     {codigo: 8, tipo: 'Fuente Alimentación', precio: 13000},
                     {codigo: 9, tipo: 'Gabinete MiniATX', precio: 10000},
                     {codigo: 10, tipo: 'Gabinete FullATX', precio: 22000}];

const mensajeInicial = "Selecciona los componentes de hardware según su código:"

class Compra {
    constructor(carritoDeCompras) {
        this.carrito = carritoDeCompras
    }
    obtenerSubtotal() {
        if (this.carrito.length > 0) {
            return this.carrito.reduce((acc, componente)=> acc + componente.precio, 0)
        }
    }
}

function buscarComponente(codigo) {
    let resultado = componentes.find((componente)=> componente.codigo === parseInt(codigo))
        return resultado
}

function finalizarCompra() {
    if (carrito.length === 0) {
        console.warn("El carito está vacío.")
        return
    }
    const shopping = new Compra(carrito)
    alert("El costo total es $ " + shopping.obtenerSubtotal())
    let respuesta = confirm("Deseas finalizar la compra?");
        if (respuesta === true) {
            alert("Compra finalizada")
        }
}

function verCarrito() {
    console.table(carrito)
}

function comprar() {
    let codigo = prompt(mensajeInicial)
        if (!parseInt(codigo)) {
            alert("Error en el código ingresado")
            let respuesta = confirm("Deseas intentar nuevamente?")
                if (respuesta === true) {
                    comprar()
                }
                return
        }
    let componenteElegido = buscarComponente(parseInt(codigo))
        if (componenteElegido === undefined) {
            alert("Error en el código ingresado")
            return
        }
        alert(componenteElegido.tipo + " ha sido agregado al carrito.");
        carrito.push(componenteElegido);

        let respuesta = confirm("Deseas seguir comprando?");
        if (respuesta === true) {
            comprar()
        } else {
            finalizarCompra()
        }
}

comprar()