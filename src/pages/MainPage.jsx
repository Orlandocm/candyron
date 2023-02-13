import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

const MainPages = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default MainPages