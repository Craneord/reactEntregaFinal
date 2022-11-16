import CartWidget from "../cartWidget/cartWidget";
import Title from "../title";
import { NavLink } from "react-router-dom";
import "./navBar.css";
const NavBar = () => {
    return(
        <nav className="NavDecorations">
            <ul className="NavListado">
                <li><NavLink className="NavDecorations" to="/">Inicio</NavLink></li>
                <li><NavLink className="NavDecorations" to="/categorias/armas">Armas</NavLink></li>
                <li><NavLink className="NavDecorations" to="/categorias/amuleto">Amuletos</NavLink></li>
                <li><NavLink className="NavDecorations" to="/cart"><CartWidget /></NavLink></li>
            </ul>
        </nav>
        );
}
export default NavBar;