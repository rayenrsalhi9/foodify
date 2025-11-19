/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import { type CartItem } from "@/data/cart";

const CartContext = createContext<{
    cart: CartItem[]
    addToCart: (item: CartItem) => void
    removeFromCart: (itemId: number) => void
    clearCart: () => void
}>({
    cart: [],
    addToCart: () => {},
    removeFromCart: () => {},
    clearCart: () => {},
})

const CartContextProvider = ({children}: {children: React.ReactNode}) => {

    const [cart, setCart] = useState<CartItem[]>([])

    const addToCart = (item: CartItem) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id)
        if (existingItem) {
            setCart(prevItems => prevItems.map(prevItem => 
                prevItem.id === item.id 
                    ? {...prevItem, quantity: prevItem.quantity + item.quantity} 
                    : prevItem
            ))
        } else {
            setCart(prevItems => [...prevItems, item])
        }
    }

    const removeFromCart = (itemId: number) => {
        setCart(prevItems => prevItems.filter(item => item.id !== itemId))
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

const useCartContext = () => useContext(CartContext)

export {CartContextProvider, useCartContext}