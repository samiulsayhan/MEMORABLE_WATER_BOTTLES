const getStoredCart = ()=>{
    const storedCardString = localStorage.getItem('cart');
    if(storedCardString){
        return JSON.parse(storedCardString)
    }
    return [];
}


//here we store cart data in string formate in localStorage
const saveCartTools = cart=>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
}

const addToLS =id =>{
    const cart = getStoredCart();
    cart.push(id);

    saveCartTools(cart);
}
const removeFromLS = id=>{
    const cart = getStoredCart();
    //removing every id
    const remaining = cart.filter( idx => idx!== id);
    saveCartTools(remaining);

}
export {addToLS,getStoredCart,removeFromLS};
