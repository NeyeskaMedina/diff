import { useState } from 'react';
import { ContextProvider } from './context/UserContext';
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./assets/utils/Theme.jsx";
import Home from "./view/Home/Home.jsx"
import NavbarDiff from "./components/navbar/NavbarDiff.jsx";
import HeaderSection from "./components/section/headerSection/HeaderSection.jsx"
import DesktopMenu from "./components/section/desktopMenu/DesktopMenu.jsx";
import Footer from './components/footer/Footer.jsx';
import WhatsApp from './components/generals/buttons/whatsapp/WhatsApp.jsx';


function App() {

  return (
    <>
      <ContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
      <nav>
        <NavbarDiff/>
      </nav>
      <section 
          style={{ marginTop: '50px' }}>
              <HeaderSection />
              <DesktopMenu />
      </section>
      <main>
          <Routes>
              <Route
                  path ='/'
                  element ={<Home/>}
              />
          </Routes>
      </main>
      <WhatsApp />
      <footer>
        <Footer />
      </footer>
      </ThemeProvider>
      </ContextProvider>
    </>
  )
}

export default App
