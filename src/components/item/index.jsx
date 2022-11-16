import "./item.css"
import React from "react"
import { Link } from "react-router-dom"


const Item= ({info})=>{


    return(
        <Link to={`/detalle/${info.id}`} className="skin">
            <p className="title">{info.title}</p>
            <p className="Precio">${info.price}</p>
            <img src={info.image} alt=""></img>

        </Link>
    )
}
 export default Item;