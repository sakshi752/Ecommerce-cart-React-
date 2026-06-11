import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { ToastContainer } from 'react-toastify'

const Layout = ({ children }) => {
  return (
    <>
        <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-1 bg-gray-600 p-10">
       
      <Outlet />
      </main>
      <Footer/>
    </div>
    <ToastContainer
    position="top-right" autoClose={2000} />
    </>

  )
}

export default Layout
