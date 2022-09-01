import React from 'react'
import { useLocation, Navigate, Outlet } from "react-router-dom"
import { useAuth } from '../Contexts/AuthContext'

 const PrivateRoutes= () =>{
    const {currentUser}= useAuth()
    const location= useLocation()
    
  return (
      //you can with useLocation go to your desired Route before login   
     currentUser? <Outlet/>: <Navigate to="/login" state={{from: location}} replace/>
   
  )
}
export default PrivateRoutes
