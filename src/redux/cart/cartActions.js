export const toggleCartModal = () => ({
    type: 'TOGGLE_CART_MODAL',
})

export const addItem = item => ({
    type: 'ADD_ITEM',
    payload: item
})

export const decreaseItem = id => ({
    type: 'DECREASE_ITEM',
    payload: id
})

export const removeItem = id => ({
    type: 'REMOVE_ITEM',
    payload: id
})

export const emptyCart = () => ({
    type: 'EMPTY_CART',
})