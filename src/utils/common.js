export const addItemtoCart = (cart, item) => {
    const existingItem = cart.find(cartItem => cartItem.id ===item.id)

    if(existingItem) {
        return cart.map(cartItem => (
            cartItem.id === item.id ? {...cartItem, qty: cartItem.qty + 1} : cartItem
        ))
    }

    return [...cart, {...item, qty: 1}]
}