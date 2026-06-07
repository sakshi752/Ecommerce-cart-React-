import React from 'react'

const Layout = ({children}) => {
  return (
    <main  className="flex-1 bg-gray-600 p-10">
        {children}
    </main>
  )
}

export default Layout
