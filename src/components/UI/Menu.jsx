import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Menu = () => {

    const usuario = useContext(UserContext)

    return (
        <nav className="bg-gray-900 p-4 shadow-lg">
            <ul className="flex space-x-8 justify-center">
                <li>
                    <NavLink to="/" className="text-white hover:text-gray-300 transition-colors duration-300 ease-in-out">
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/criptomonedas" className="text-white hover:text-gray-300 transition-colors duration-300 ease-in-out">
                        Criptomonedas
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/perfil" className="text-white hover:text-gray-300 transition-colors duration-300 ease-in-out">
                        Perfil de {usuario.name}
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;

