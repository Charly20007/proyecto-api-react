import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CriptoPage = () => {
    const API_ULR = import.meta.env.VITE_API_URL

    const params = useParams(); // es un objeto 
    const [moneda, setMonedas] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [history, setHistory] = useState([])

    useEffect(() => {
        axios.get(`${API_ULR}assets/${params.id}`)
            .then((response) => {
                setMonedas(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                setError("Salio un error en la petición", error);
                setLoading(false);
            });

        axios.get(`${API_ULR}assets/${params.id}/history?interval=d1`)
            .then((response) => {
                setHistory(response.data.data);
            })
            .catch(() => {
                console.log("error")
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.id]);

    // useEffect(() => {
    //     axios.get(`https://api.coincap.io/v2/assets/${params.id}/history?interval=d1`)
    //         .then((response) => {
    //             setHistory(response.data.data);
    //         })
    //         .catch(() => {
    //             console.log("error")
    //         });
    // }, [params.id]);


    if (loading) {
        return <div className="flex justify-center items-center h-screen">Cargando...</div>;
    }

    if (error) {
        return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Criptomoneda {moneda.name}</h2>
                    <p className="text-lg text-gray-600 mb-2">Mi número en el ranking es: {moneda.rank}</p>
                    <p className="text-lg text-gray-600">Mi precio actual es: ${parseFloat(moneda.priceUsd).toFixed(2)} USD</p>
                    <Link to="/criptomonedas" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                        Volver
                    </Link>
                </div>
                {
                    !history ? <p>Cargando</p> : <div className="overflow-x-auto">
                    <table className="w-full bg-white shadow-md rounded mb-4">
                        <thead>
                            <tr className="bg-gray-200 text-left">
                                <th className="py-2 px-4">Fecha</th>
                                <th className="py-2 px-4">Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {history.map(({ date, priceUsd, time }) => (
                                <tr key={time} className="border-t">
                                    <td className="py-2 px-4">{new Date(date).toLocaleDateString()}</td>
                                    <td className="py-2 px-4">${parseFloat(priceUsd).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                }
            </div>
        </div>
    );
}

export default CriptoPage;
