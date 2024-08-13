import React from 'react'
import MyNavbar from './Navbar'
import { Outlet } from 'react-router-dom'
import './Layout.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Layout() {
  return (
    <div className='l'>
        <MyNavbar/>
        <Outlet/>
    </div>
  )
}

export default Layout