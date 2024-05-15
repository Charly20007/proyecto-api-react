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
    <div className="container mx-auto p-4">
      <p className="text-2xl font-bold text-center mb-4">Lista de Criptomonedas</p>
      {error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <ol className="list-decimal list-inside">
          {criptos.map((cripto) => (
            <li key={cripto.id} className="my-2 p-2 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <span className="font-medium">{cripto.name}</span>
                <span className="text-gray-500">${parseFloat(cripto.priceUsd).toFixed(2)}</span>
                <span  className="text-gray-500">{cripto.symbol}</span>
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}

export default App
