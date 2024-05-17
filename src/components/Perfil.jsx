import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Perfil = () => {

    const usuario = useContext(UserContext)

    return(
        <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Perfil de {usuario.name}</h1>
            <div className="text-lg text-gray-600">
                Usuario desde: <span className="font-semibold">{usuario.registered}</span>
            </div>
        </div>
    )
}

export default Perfil;

