import './Bottle.css';
export default function Bottle({bottle , handleAddCart}){
    const {name,price,img}=bottle;
    
    return(
        <div className="bottle">
            <h2>Bottle :{name}</h2>
            <img src={img} alt="" />
            <p>Price : ${price}</p>
            <button onClick={()=> handleAddCart(bottle)}>Purchase</button>
        </div>
    )
}
