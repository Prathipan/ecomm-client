const CartReducer = (state, action) => {
  switch (action.type) {
    case "GET_CART":
      return {
        products : action.payload.products,
        cartLength: action.payload.products.length,
        total: action.payload.bill,
      }
    case "CREATE_CART":
      return {
        products: action.payload.products,
        cartLength: action.payload.products.length,
        total: action.payload.bill,
      }; 
    case "DELETE_CART":
      return {
        products: action.payload.products,
        cartLength: action.payload.products.length,
        total: action.payload.bill,
      };
    default:
      return { ...state };
  }
};

export default CartReducer;
