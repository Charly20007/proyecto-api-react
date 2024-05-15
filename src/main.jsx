import ReactDOM from 'react-dom/client'
import './tailwind.css';  // Añade esta línea
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pagina404 from './404.jsx';
import App from './components/Layout/App.jsx';
import Home from './components/Home/Home.jsx';
import Cuadricula from './components/Criptomonedas/Cuadricula.jsx';
import CriptoPage from './components/Criptomonedas/CriptoPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>} > {/* ruta padre */}
                    <Route index element={<Home/>} /> 
                </Route>
                <Route path='/criptomonedas' element={<App/>}>
                    <Route index element={<Cuadricula/>}/>
                    <Route path=':id' element={<CriptoPage/>} />  {/* ruta dinamica */}
                </Route>
                <Route path='*' element={<Pagina404/>} />
            </Routes>
        </BrowserRouter>
    </>
    
)
