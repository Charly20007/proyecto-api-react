import { Link } from "react-router-dom";

const Pagina404 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">Página no encontrada</h1>
            <span className="text-lg text-gray-600">La página solicitada no existe</span>
            <Link to="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                Volver al inicio
            </Link>
        </div>
    );
}

export default Pagina404;
