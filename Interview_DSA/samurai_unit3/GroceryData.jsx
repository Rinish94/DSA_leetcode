import React, {useState} from 'react'
import Styles from "./styles/GroceryData.module.css"

const GroceryData = ({product_name, image_url, description, is_available, price}) => {
    // console.log(product_name)
    const [quantity, setQuantity] = useState(1)
    const increment =() => {
        let quan = quantity + 1
        setQuantity(quan)
    }
    const decrement =() => {
        if(quantity > 0){
            let quan = quantity - 1
            setQuantity(quan)
        }else {
            setQuantity(0)
        }
    }
    return (
        <div className={Styles.card}>
            <div style={{display:"flex", alignItems: "center" }}>
                <div>
                    <img src={image_url} alt={product_name} width="150px"/>
                </div>
                <div className={Styles.text}>
                    <h3>{product_name}</h3>
                    <p>{description}</p>
                    <h4>Rs {price}</h4>
                </div>

            </div>
            <div className={Styles.btns}>
                <div className={Styles.quantity}>
                    {quantity>0 ?<button onClick={decrement}>-</button> : <div className={Styles.disabled}>-</div> }
                    
                    <p>{quantity}</p>
                    <button onClick={increment}>+</button>
                </div>
                {is_available?<button className={Styles.stock} style={{backgroundColor:"green"}}>High Stock</button>:<button className={Styles.stock} style={{backgroundColor:"red"}}>Low Stock</button>}
                
            </div>
        </div>
    )
}

export default GroceryData
