import { useState } from 'react'
import './App.css'
import Header from './Component/Header'
import Layout from './Component/Layout'
import Footer from './Component/Footer'
import Home from './Pages/Home'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Layout>
        <Home/>
      </Layout>
      <Footer />
        <ToastContainer position="top-right" autoClose={2000} />
    </div>
  )
}

export default App
