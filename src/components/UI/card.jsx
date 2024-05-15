import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
const Card = ({id, name, priceUsd, symbol, changePercent24Hr, explorer }) => {
    return(
        <div key={id} className="bg-white shadow-md rounded-lg p-4">
            <div className="flex flex-col items-center">
                <span className="font-bold text-lg">{name}</span>
                <span className="text-gray-500"><span className="font-bold text-black">Precio:</span> ${parseFloat(priceUsd).toFixed(4)}</span>
                <span className="text-gray-500"><span className="font-bold text-black">Código:</span> {symbol}</span>
                <span className="font-bold">
                  <span className="font-bold text-black">Variación de 24h: </span>
                   <span className={changePercent24Hr > 0 ? "text-green-600" : "text-red-500"}>{parseFloat(changePercent24Hr).toFixed(2)}%</span>
                </span>
                <a className="font-medium text-blue-500" target="_blank" href={explorer}>Información</a>
                <Link to={`/criptomonedas/${id}`}>Ver detalles</Link>
            </div>
        </div>
    )
}

export default Card
