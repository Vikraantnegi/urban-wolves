import { addItemtoCart, removeItemfromCart } from "../../utils/common";

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
                cartItems: addItemtoCart(state.cartItems, action.payload)
            }
        case 'REMOVE_ITEM':
            return {
                ...state,
                cartItems: removeItemfromCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer