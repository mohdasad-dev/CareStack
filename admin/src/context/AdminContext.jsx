import { useState } from "react";
import { createContext } from "react";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {

    // we make a state variable so we can store a token in that statte variable 
    const [aToken, setAToken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') : '');

    const backendURL = import.meta.env.VITE_BACKEND_URL

    const value = {
        aToken, setAToken,
        backendURL,
    }
    return(
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider;