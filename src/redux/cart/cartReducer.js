const initialState = {
    cartModal: false,
    cartItems: []
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case 'TOGGLE_CART_MODAL':
            return {
                ...state,
                cartModal: !state.cartModal
            }
        case 'ADD_ITEM':
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        default:
            return state;
    }
}

export default cartReducer