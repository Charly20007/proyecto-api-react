import {  useParams } from "react-router-dom";
import usePetition from "../../hooks/usePeticion";
import CardCripto from "../UI/CardCriptoPage";
//pagina dinamica
const CriptoPage = () => {
    const params = useParams(); // es un objeto permite obtener el url de la pagina dinamica
    
    const moneda = usePetition(`assets/${params.id}`)
    const history = usePetition(`assets/${params.id}/history?interval=d1`)


    if ( !history || !moneda) {
        return <div className="flex justify-center items-center h-screen">Cargando...</div>;
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
                <CardCripto name={moneda.name} priceUsd={moneda.priceUsd} rank={moneda.rank}/>
                <div className="overflow-x-auto">
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
            </div>
        </div>
    );
}

export default CriptoPage;
