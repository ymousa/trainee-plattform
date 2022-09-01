import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <main className='App'>
        {/* hier kommen header, Navbar etc. */}
        <Navbar/>
        <Outlet/>
    </main>
  )
}

export default Layout