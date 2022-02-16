const initialState = {
    cartModal: false
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case 'TOGGLE_CART_MODAL':
            return {
                ...state,
                cartModal: !state.cartModal
            }
        default:
            return state;
    }
}

export default cartReducer