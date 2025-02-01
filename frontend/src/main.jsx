
 import ReactDOM from 'react-dom/client'
 import { BrowserRouter,Routes,Route } from 'react-router-dom'
import React from 'react'
import App from './App.jsx'
import './index.css'
import StoreContextProvider from './context/StoreContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter> 

        <StoreContextProvider>
            <App/>
        </StoreContextProvider>

  
    </BrowserRouter>
  
  
)
