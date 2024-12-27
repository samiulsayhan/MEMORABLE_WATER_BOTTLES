import { useEffect } from "react"
import { useState } from "react"
import Bottle from "../Bottle/Bottle"
import './Bottles.css'
// here we import the LocalStorage.js 
import { addToLS, getStoredCart, removeFromLS } from "../../utilities/LocalStorage"
import Cart from "../Cart/Cart"

export default function Bottles() {

    const [bottles, setbottles] = useState([])
    const [cart, setCart] = useState([])


    useEffect(() => {
        fetch('WaterBottle.json')
            .then(res => res.json())
            .then(data => setbottles(data))
    }, [])

    useEffect(() => {
        console.log('called the useEffect', bottles.length);
        if (bottles.length > 0) {
            const storeCart = getStoredCart();
            console.log(storeCart, bottles);
            const savedCart = [];

            for(const id of storeCart){
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id);
                if(bottle){
                    savedCart.push(bottle);
                }
            }
            console.log('saved cart', savedCart);
            setCart(savedCart);
        } 
    }, [bottles])

    const handleAddCart = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        // here i give a value to the prompt of LocalStorage.js files function named with addToLS
        addToLS(bottle.id);
    }

    const handleRemoveFromCart= id =>{
        //visual card remove
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        //remove from LS store
        removeFromLS(id);
    }


    return (
        <div>
            <h2>Bottles: {bottles.length}</h2>
            <Cart
                cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}
            ></Cart>
            <div className="bottle-container">
                {
                    bottles.map(bottle =>
                        <Bottle
                            key={bottle.id}
                            bottle={bottle}
                            handleAddCart={handleAddCart}
                        ></Bottle>)
                }
            </div>
        </div>
    )
}