import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
const UserContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components, react/prop-types
const UserContextProvider = ({ children }) => {
    const [usuario, setUsuario] = useState({})
    useEffect(()=>{
        setUsuario({
            name: "Carlos Marcos",
            registered: "17 de mayo 2023"
        })
    },[])

   return(
    <UserContext.Provider value={usuario}>
        {children}
    </UserContext.Provider>
   ) 
}

export {UserContext, UserContextProvider}