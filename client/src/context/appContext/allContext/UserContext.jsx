import { createContext } from 'react'
import { useState, useEffect } from 'react';


export const UserContext = createContext({});

export const ContextProvider = ( {children} ) => {
        const [ userLogin, setUserLogin ] = useState([]);

        const sharedContext = {
            userLogin,
            setUserLogin,
        }
    return (
        <UserContext.Provider value={sharedContext}>
            {children}
        </UserContext.Provider>
    )
}
