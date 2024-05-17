import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const CardCripto = ({name, rank, priceUsd}) => {
    return(
        <div className="flex flex-col items-center md:items-start">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Criptomoneda {name}</h2>
            <p className="text-lg text-gray-600 mb-2">Mi número en el ranking es: {rank}</p>
            <p className="text-lg text-gray-600">Mi precio actual es: ${parseFloat(priceUsd).toFixed(2)} USD</p>
            <Link to="/criptomonedas" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                Volver
            </Link>
        </div>
    )
}

export default CardCripto