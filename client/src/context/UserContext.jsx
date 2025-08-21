import { createContext } from 'react'
import { useState, useEffect } from 'react';


export const UserContext = createContext({});

export const ContextProvider = ( {children} ) => {
        const [ open, setOpen ] = useState(false);
            

        
        const sharedContext = {
        
        }
    return (
        <UserContext.Provider value={sharedContext}>
            {children}
        </UserContext.Provider>
    )
}
