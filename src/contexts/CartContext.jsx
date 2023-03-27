import { createContext, useState } from "react"

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState(JSON.parse(localStorage.getItem('cartList')) || [])

    const addToCart = (item, qty) => {
        setCartList((prevState) => {
            let nextState = [
                ...prevState, 
                {
                    id: item.id, 
                    image: item.image[0],
                    title: item.name,
                    price: item.cost,
                    qty
                }
            ]
            localStorage.setItem('cartList', JSON.stringify(nextState))
            return nextState
        })
    }

    const deleteItem = id => {
        setCartList(() => {
            let newCartList = cartList.filter(item => item.id !== id)
            localStorage.setItem('cartList', JSON.stringify(newCartList))
            return newCartList
        })
    }

    const clearCart = () => {
        setCartList(() => {
            // localStorage.setItem('cartList', JSON.stringify([]))
            localStorage.removeItem('cartList')
            return []
        })
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, deleteItem, clearCart}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider