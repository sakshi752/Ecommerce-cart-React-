import { useState } from 'react'
import './App.css'
import Header from './Component/Header'
import Layout from './Component/Layout'
import Footer from './Component/Footer'
import Home from './Pages/Home'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Cart from './Pages/Cart'
import Product from './Pages/Product'
import Contact from './Pages/Contact'

function App() {

  return (
    // <BrowserRouter>
    //     <Layout>
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/about" element={<About />} />
    //         <Route path="/product" element={<Product />} />
    //         <Route path="/contact" element={<Contact />} />
    //         <Route path="/cart" element={<Cart />} />
    //       </Routes>
    //     </Layout>
    //     {/* <Footer /> */}
    //     <ToastContainer position="top-right" autoClose={2000} />
    // </BrowserRouter>
    <>
    
    </>
  )
}

export default App
