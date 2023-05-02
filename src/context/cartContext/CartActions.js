
export const getCartAction = (cartItems) => ({
    type : "GET_CART",
    payload : cartItems
})

export const createCartAction = (cart) => ({
    type : "CREATE_CART",
    payload : cart
})

export const deleteCartAction = (carts) => ({
    type : "DELETE_CART",
    payload : carts
})


