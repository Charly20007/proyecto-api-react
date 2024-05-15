import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CriptoPage = () => {
    const params = useParams(); // es un objeto 
    const [moneda, setMonedas] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://api.coincap.io/v2/assets/${params.id}`)
            .then((response) => {
                setMonedas(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                setError("Salio un error en la petición", error);
                setLoading(false);
            });
    }, [params.id]);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Cargando...</div>;
    }

    if (error) {
        return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Soy una criptomoneda {moneda.name}</h2>
            <p className="text-lg text-gray-600 mb-2">El número de ranking que me encuentro es el {moneda.rank}</p>
            <p className="text-lg text-gray-600">El precio actual es {moneda.priceUsd} USD</p>
        </div>
    );
}

export default CriptoPage;
