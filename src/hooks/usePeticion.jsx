import axios from "axios";
import { useEffect, useState } from "react";

const usePetition = (endpoint) => {

    const API_ULR = import.meta.env.VITE_API_URL

    const [data, setData] = useState()

    useEffect(() => {
        axios.get(`${API_ULR}${endpoint}`)
            .then((response) => {
                setData(response.data.data);
            })
            .catch(() => {
                console.log("error")
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    
    return data
}

export default usePetition