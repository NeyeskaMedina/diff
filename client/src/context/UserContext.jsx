import { createContext } from 'react'
import { useState, useEffect } from 'react';


export const UserContext = createContext({});

export const ContextProvider = ( {children} ) => {
        const [ openModalProduct, setOpenModalProduct ] = useState(false);
            

        
        const sharedContext = {
            openModalProduct,
            setOpenModalProduct,
        }
    return (
        <UserContext.Provider value={sharedContext}>
            {children}
        </UserContext.Provider>
    )
}
