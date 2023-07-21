import React from 'react';
import { Outlet, Navigate } from 'react-router-dom'; 
import useAuth from '../Hooks/useAuth';

const RutaProtegida = () => {
  const { auth } = useAuth();
  console.log(auth);

  return (
    <>
      { auth._id ? 'Autenticado' : <Navigate to="/"></Navigate> }
    
    
    </>
  )
}

export default RutaProtegida