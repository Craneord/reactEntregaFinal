import React, {useState, useEffect} from "react";

import "./itemContador.css";

export const ItemContador= ({inicial, stock, onAdd})=>{
    
    const [count, setCount] = useState(parseInt(inicial))
    
    const decrease = ()=>{
         setCount(count - 1)
    }
        
    const increase = ()=>{
        setCount(count + 1)
    }
    return (
        <div className="contador">
            <button disabled={count <= 1} onClick={decrease}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={increase}>+</button>
            <div>

                <button disabled={stock <=0} onClick={()=>onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    );

}
 export default ItemContador;