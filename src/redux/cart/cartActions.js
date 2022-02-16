export const toggleCartModal = () => ({
    type: 'TOGGLE_CART_MODAL',
})

export const addItem = item => ({
    type: 'ADD_ITEM',
    payload: item
})