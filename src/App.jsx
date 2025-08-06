import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from "./components/Footer.jsx";
import { CartProvider } from './components/Cart/CartContext.jsx';

function App() {

  return (
    <CartProvider>
        <Navbar />
        <Footer />
    </CartProvider>
  )
}

export default App
