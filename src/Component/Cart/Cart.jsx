import './Cart.css';
const Cart = ({cart,handleRemoveFromCart}) => {
    return (
        <div>
            <h3>Cart: {cart.length}</h3>
            <div className="cart-container">
                {cart.map(bottle =><div>
                    <img src={bottle.img}></img>
                    <button onClick={()=>handleRemoveFromCart(bottle.id)}>Remove</button>
                </div> )}
            </div>
        </div>
    )
}
export default Cart;