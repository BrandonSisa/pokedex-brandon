import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'//verificado 58
import Header from './layout/Header'

const ProtectedRoutes = () => {

  const nameTrainer = useSelector(store => store.nameTrainer) //verificado 56

 
  
  if (nameTrainer) { 
    return (
      <>
        <Header/>
        <Outlet />
      </>
    )
    
  } else {
    return<Navigate to="/"/>
  }

}

export default ProtectedRoutes