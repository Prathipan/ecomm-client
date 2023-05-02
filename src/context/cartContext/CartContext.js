import { useContext, useReducer } from "react";
import { createContext } from "react"
import CartReducer from "./CartReducer";

const INITIAL_STATE = {
    products : [],
    cartLength : 0,
    total : 0
}

export const CartContext = createContext(INITIAL_STATE);

export const CartContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(CartReducer,INITIAL_STATE);

    return(
        <CartContext.Provider value={{
            products : state.products,
            cartLength : state.cartLength,
            total : state.total,
            dispatch
        }}>
            {children}
        </CartContext.Provider>
    )
}