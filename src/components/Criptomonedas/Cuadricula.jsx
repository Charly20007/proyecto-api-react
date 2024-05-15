import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import Card from "../UI/card"

const Cuadricula = () => {
  const API_ULR = import.meta.env.VITE_API_URL

  const [criptos, setCriptos] = useState()
  const [error, setError] = useState(null)

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  if(!criptos) return <p>Cargando...</p>
  
  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <p className="text-2xl font-bold text-center mb-4">Lista de Criptomonedas</p>
      {error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {criptos.map(({id, name, priceUsd, symbol, changePercent24Hr, explorer }) => (
            <Card key={id} id={id} name={name} priceUsd={priceUsd} symbol={symbol} changePercent24Hr={changePercent24Hr} explorer={explorer} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Cuadricula