import React, {useState} from "react";
import "./itemDetail.css"
import ItemContador from "../itemContador";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";



export const ItemDetail = ({ data }) =>{
    const [goToCart, setGoToCart] = useState(false)
    const {addProduct} = useCartContext()

    const onAdd = (quantity) => {
        setGoToCart(true)
        addProduct(data, quantity)
    }

    return(
        <div className="container">
            <div className="detail">
                <img className="detailImage" src={data.image} alt=""/>
                <div className="content">
                    <h1>{data.title}</h1>
                    {
                        goToCart
                        ? <Link to="/cart">Ir al carrito</Link>
                        :<ItemContador inicial ={1} stock= {10} onAdd={onAdd}/>
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;