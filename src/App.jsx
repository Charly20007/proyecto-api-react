import { useState } from "react"
import { useEffect } from "react"

const App = () => {
  const [criptos, setCriptos] = useState()
  const [error, setError] = useState(null);

  useEffect(()=>{
    fetch("https://api.coincap.io/v2/assets") //es una promesa devuelve dos cosas exitosa y fallar
    .then((resp)=> resp.json()) //si exitoso, la respuesta se convierte en tipo json, corre otra promesa
    .then((data) => {
      setCriptos(data.data) //setear con informacion
    })
    .catch((err)=>{
      console.error("La petición fallo", err)
      setError("Hubo un problema al obtener los datos.");
    })//si falla mi peticion
  },[])

  if(!criptos) return <p>Cargando...</p>
  
  return (
    <>
      <p className="font-bold">Lista de Criptomonedas</p>
      {error ? (
        <p>{error}</p>
      ) : (
        <ol>
          {criptos.length > 0 ? (
            criptos.map((cripto) => (
              <li key={cripto.id}>Nombre: {cripto.name} Precio: {cripto.priceUsd}</li>
            ))
          ) : (
            <p>Cargando...</p>
          )}
        </ol>
      )}
    </>
  )
}

export default App
