import { useState, createContext } from "react";

export const CartContext = createContext({

    cart: []
})

export const CartProvider = ({ children }) => {

    const [cart, SetCart] = useState([])

    console.log(cart)

    const addItem = (item, quantity) => {

        if (!isInCart(item.id)) {
            SetCart(prev => [...prev, {...item, quantity}])
        } else {
            console.error('El producto ya esta agregado')
        }
    }

    const totalCompra = () => {
        return cart.reduce((acc, prod) => acc + prod.precio * prod.quantity, 0)
    }


    const totalCantidad = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0)
    }
 
    const removeItem = (itemId) => {
        const cartUpdated = cart.filter (prod => prod.id !==itemId)
        SetCart (cartUpdated)
    }      

    const clearCart = () => {
        SetCart ([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)

    }

    return (
        <CartContext.Provider value ={{cart, addItem, totalCompra, removeItem, totalCantidad, clearCart}}>
            {children}
        </CartContext.Provider>
    )

}