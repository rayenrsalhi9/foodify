/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";
import {useUserContext} from "./userContext";
import { type CartItem } from "@/types/types";
import { toast } from "sonner";

const CartContext = createContext<{
    cart: CartItem[]
    addToCart: (item: CartItem) => void
    removeFromCart: (itemId: number) => void
    clearCart: () => void
    totalItems: number
    totalPrice: number
}>({
    cart: [],
    addToCart: () => {},
    removeFromCart: () => {},
    clearCart: () => {},
    totalItems: 0,
    totalPrice: 0,
})

const CartContextProvider = ({children}: {children: React.ReactNode}) => {

    const {isSignedIn} = useUserContext()
    const [cart, setCart] = useState<CartItem[]>([])
    console.log(cart)

    useEffect(() => {

        const fetchCart = async () => {
            try {
                const response = await fetch('/api/cart')
                const {data, error, notSignedIn} = await response.json()
                
                if (error) return
                if (notSignedIn) {
                    setCart([])
                    return
                }
                setCart(data)
            } catch (error) {
                console.error('Error fetching cart:', error)
            }
        }

        if (!isSignedIn && cart.length === 0) return
        if (!isSignedIn && cart.length > 0) {
            setCart([])
            return
        }

        fetchCart()

    }, [isSignedIn, cart])

    const addToCart = async (item: CartItem) => {

        try {

            const response = await fetch('/api/cart', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({productId: item.id})
            })
            const {success} = await response.json()
            if (!success) return

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
            toast.success(`Item added to cart`, {
                style: {
                    background: '#f0fdf4',
                    border: '1px solid #bbf7d0',
                    color: 'green'
                },
                duration: 3000
            })

        } catch (error) {
            console.error('Error adding item to cart:', error)
        }
    }

    const removeFromCart = (itemId: number) => {
        setCart(prevItems => prevItems.filter(item => item.id !== itemId))
    }

    const clearCart = () => {
        setCart([])
    }

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0)
    const totalPrice = cart.reduce((total, item) => total + (item.price * (1 - item.discount)) * item.quantity, 0)

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, totalItems, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

const useCartContext = () => useContext(CartContext)

export {CartContextProvider, useCartContext}