import { createContext } from 'react'
import { useState, useEffect } from 'react';


export const UserContext = createContext({});

export const ContextProvider = ( {children} ) => {
        const [ openModalProduct, setOpenModalProduct ] = useState(false);
        const [cartItems, setCartItems] = useState([]);

        const sharedContext = {
            openModalProduct,
            setOpenModalProduct,
            cartItems,
            setCartItems,
        }
    return (
        <UserContext.Provider value={sharedContext}>
            {children}
        </UserContext.Provider>
    )
}
