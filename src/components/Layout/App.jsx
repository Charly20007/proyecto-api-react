import { Outlet } from "react-router-dom"
import Menu from "../UI/Menu"

const App = () => {
    return(
        <>
            <Menu/>
            <Outlet/>
        </>
    )
}

export default App