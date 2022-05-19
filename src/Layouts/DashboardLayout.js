import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

const DashboardLayout = ({children}) => {
  return (
   <>
   <Nav children={children}>
    <Outlet/>
   </Nav>
   </>
  )
}

export default DashboardLayout