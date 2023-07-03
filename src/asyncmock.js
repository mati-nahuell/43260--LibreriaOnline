const misProdutos = [
    { id: "1", nombre: "lapicera", precio: 250, img: "../img/lapicera.jpg", idCat: "1" },
    { id: "2", nombre: "resma", precio: 3000, img: "../img/resma.jpg", idCat: "3" },
    { id: "3", nombre: "resaltador", precio: 400, img: "../img/resaltador.jpg", idCat: "1" },
    { id: "4", nombre: "abrochadora", precio: 6000, img: "../img/abrochadora.jpg", idCat: "2" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProdutos);
        }, 200)
    })
}


export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const producto = misProdutos.find(prod=> prod.id === id);
            resolve(producto);
        }, 200)
    })
}



export const getProdsPorCategoria = (idCategoria) => {
    return new Promise ( resolve => {
        setTimeout( () => {
            const productosCategoria = misProdutos.filter(prod=> prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 2500)
    })
}