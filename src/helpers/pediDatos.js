import productos from "../data/MOCK_Data"

export const pediDatos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 1000)
    })
}

export const getProductosById= (productoId) => {
    return new Promise((resolve) => {
        setTimeout(() => {

            resolve(productos.find(prod => prod.id === productoId))

        }, 1000)
    })

 

}