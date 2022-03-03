export const addItemtoCart = (cart, item) => {
    const existingItem = cart.find(cartItem => cartItem.id ===item.id)

    if(existingItem) {
        return cart.map(cartItem => (
            cartItem.id === item.id ? {...cartItem, qty: cartItem.qty + 1} : cartItem
        ))
    }

    return [...cart, {...item, qty: 1}]
}

export const removeItemfromCart = (cart, id) => {
    return cart.filter(item => item.id !== id)
}

export const decreaseItem = (cart, id) => {
    const existingItem = cart.find(cartItem => cartItem.id === id)
    
    if(existingItem.qty > 1){
        return cart.map(cartItem => (
            cartItem.id === id ? {...cartItem, qty: cartItem.qty - 1} : cartItem
        ))
    }
    return removeItemfromCart(cart, id)
}

export const calculateTotal = (cartItems) => {
    if(cartItems.length) {
        return cartItems.reduce((total, item) => total + item.qty * item.price, 0)
    }
    return 0
}

export const calculateQty = (cartItems) => {
    if(cartItems.length) {
        return cartItems.reduce((total, item) => total + item.qty, 0)
    }
    return 0
}