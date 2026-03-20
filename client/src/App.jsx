import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
// import { ContextProvider } from './context/appContext/allContext/UserContext.jsx';
// import { CartProvider } from './context/appContext/allContext/CartContext.jsx';
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { ToastContainer } from 'react-toastify';
import theme from "./assets/utils/Theme.jsx";
import Home from "./view/Home/Home.jsx"
import Tienda from "./view/Tienda/Tienda.jsx";
import NavbarDiff from "./components/navbar/NavbarDiff.jsx";
import HeaderSection from "./components/section/headerSection/HeaderSection.jsx"
import DesktopMenu from "./components/section/desktopMenu/DesktopMenu.jsx";
import Footer from './components/footer/Footer.jsx';
import WhatsApp from './components/generals/buttons/whatsapp/WhatsApp.jsx';
import Ingreso from './view/Cuenta/Login/Ingreso.jsx';
import RecuperarClave from './view/Cuenta/Recuperacion/RecuperarClave.jsx';
import MiCuenta from './view/Cuenta/MiCuenta/MiCuenta.jsx';
import Admin from './view/Cuenta/Admin/Admin.jsx';
import ProtectedRoute from './context/appContext/allContext/ProtectedRoute.jsx';
import ScrollToTop from './components/generals/scroll/ScrollToTop.jsx';
import FavoriteProducts from './view/Cuenta/MiCuenta/FavoriteProducts.jsx';
import ProductDetail from './view/Tienda/Products/ProductDetail.jsx';
import CartDetail from './view/Tienda/CartDetails/CartDetail.jsx';
import PedidoDetalle from './components/main/account/PedidoDetalle.jsx';
import { AppProvider } from './context/appContext/AppContext.jsx';

function App() {

  return (
    <>
      <AppProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <nav>
            <NavbarDiff />
          </nav>
          <section style={{ marginTop: '50px' }}>
            <HeaderSection />
            <DesktopMenu />
          </section>
          <main>
              <ScrollToTop />
                <Routes>
                    <Route
                        path ='/'
                        element ={<Home/>}
                    />
                    <Route
                        path ='/producto/:id'
                        element ={<ProductDetail/>}
                    />
                    <Route
                        path ='/detalle-carrito'
                        element ={<CartDetail/>}
                    />
                    <Route
                        path="/pedidos/:id"
                        element={
                           <ProtectedRoute>
                             <PedidoDetalle />
                           </ProtectedRoute>
                        }
                    />
                    <Route
                        path ='/tienda'
                        element ={<Tienda/>}
                    />
                    <Route path="/tienda/:categoria" element={<Tienda />} />
                    <Route
                        path ='/ingresar'
                        element ={<Ingreso/>}
                    />
                    <Route
                        path ='/mi-cuenta'
                        element ={
                        <ProtectedRoute>
                          <MiCuenta/>
                        </ProtectedRoute>
                        }
                    />
                    <Route
                        path ='/favoritos'
                        element ={
                        <ProtectedRoute>
                          <FavoriteProducts/>
                        </ProtectedRoute>
                        }
                    />
                    <Route
                        path ='/admin'
                        element ={
                        <ProtectedRoute>
                          <Admin/>
                        </ProtectedRoute>
                        }
                    />
                    <Route
                        path ='/recuperar-cuenta'
                        element ={<RecuperarClave/>}
                    />
                </Routes>
            </main>
            <WhatsApp />
            <footer>
              <Footer />
            </footer>
            </ThemeProvider>
          <ToastContainer />
      </AppProvider>
    </>
  )
}

export default App
