import { Button } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const GeneralButtons = ( {children, onClick, to, size} ) => {
  return (
    <NavLink 
        to={to}
        style={{
            display: 'flex',
            justifyContent: 'center',
            textDecoration: 'none',
            listStyle: 'none'

        }}
    >
        <Button onClick={onClick}
            style={{
                backgroundColor: '#FFC700',
                color: '#191035', 
                '&:hover': {
                  backgroundColor: '#e6b800', 
                },
                borderRadius: '10px',
                padding: '6px 12px',
                fontWeight: 'bold',
                fontSize: size ? `${size}` : '',
              }}
        >
            {children}
        </Button>
    </NavLink>
  )
}
export default GeneralButtons;