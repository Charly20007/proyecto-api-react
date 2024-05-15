import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

const App = () => {
  const API_ULR = import.meta.env.VITE_API_URL

  const [criptos, setCriptos] = useState()
  const [error, setError] = useState(null);

  // useEffect(()=>{
  //   fetch(`${API_ULR}assets`) //es una promesa devuelve dos cosas exitosa y fallar , FETCH se sobre entiendo que es un get
  //   .then((resp)=> resp.json()) //si exitoso, la respuesta se convierte en tipo json, corre otra promesa
  //   .then((data) => {
  //     setCriptos(data.data) //setear con informacion
  //   })
  //   .catch((err)=>{
  //     console.error("La petición fallo", err)
  //     setError("Hubo un problema al obtener los datos.");
  //   })//si falla mi peticion
  // },[])

  useEffect(()=>{
    axios.get(`${API_ULR}assets`) //es una promesa devuelve dos cosas exitosa y fallar , con axios ya lo convierte en json
    .then((data) => {
      setCriptos(data.data.data) //setear con informacion, crea un objeto el axios para verlo hacer console.log
    })
    .catch((err)=>{
      console.error("La petición fallo", err)
      setError("Hubo un problema al obtener los datos.");
    })//si falla mi peticion
  },[])


  if(!criptos) return <p>Cargando...</p>
  
  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <p className="text-2xl font-bold text-center mb-4">Lista de Criptomonedas</p>
      {error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {criptos.map((cripto) => (
            <div key={cripto.id} className="bg-white shadow-md rounded-lg p-4">
              <div className="flex flex-col items-center">
                <span className="font-medium text-lg">{cripto.name}</span>
                <span className="text-gray-500"><span className="font-bold text-black">Precio:</span> ${parseFloat(cripto.priceUsd).toFixed(4)}</span>
                <span className="text-gray-500"><span className="font-bold text-black">Código:</span> {cripto.symbol}</span>
                <span className="font-bold">
                  <span className="font-bold text-black">Variación de 24h: </span>
                   <span className={cripto.changePercent24Hr > 0 ? "text-green-600" : "text-red-500"}>{parseFloat(cripto.changePercent24Hr).toFixed(2)}%</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App