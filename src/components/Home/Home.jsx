import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Hola, bienvenido a la Lista del Ranking de Criptomonedas</h1>
            <p className="text-lg text-gray-600 mb-6">Conoce las 100 criptos más usadas</p>
            <Link to="/criptomonedas" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                Ver Criptomonedas
            </Link>
        </div>
    );
}

export default Home;
