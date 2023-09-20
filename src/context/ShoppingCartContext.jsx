import { createContext, useReducer } from "react";
import { useAppContext } from "../hooks/useAppContext";

export const ShoppingCartContext = createContext()

export const ShoppingCartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM": {
            const exist = state.items.find(item => item.productId === action.payload.productId)

            if (exist) {
                const newItem = state.items.map(item => item.productId === exist.productId
                    ? ({ ...item, quantity: item.quantity + action.payload.quantity })
                    : item
                )
                return { ...state, items: newItem }
            } else {
                return { ...state, items: [...state.items, action.payload] }
            }

        }
        case "INCREASE_QUANTITY": { }
        case "DECREASE_QUANTITY": { }
        case "REMOVE_ITEM": { }
        case "CLEAR_CART": { }
        default: {
            throw new Error()
        }
    }
}

const initialState = {
    items: [],
}

const ShoppingCartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ShoppingCartReducer, initialState)

    const { findProductById } = useAppContext()

    const handleAdd = ({ productId, quantity = 1 }) => {
        dispatch({ type: "ADD_ITEM", payload: { productId, quantity } })
    }

    const totalItems = state.items.length

    const items = state.items.map((item) => ({
        product: findProductById(item.productId),
        quantity: item.quantity
    }))

    return (
        <ShoppingCartContext.Provider value={
            { ...state, items, totalItems, onAddItem: handleAdd }}>

            {children}

        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider