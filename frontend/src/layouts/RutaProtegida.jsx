import React from 'react';
import { Outlet, Navigate } from 'react-router-dom'; 
import useAuth from '../Hooks/useAuth';

const RutaProtegida = () => {
  const { auth, cargando } = useAuth();
  if(cargando) return "Cargando...";
  console.log(auth);

  return (
    <>
      { auth.id ? <Outlet /> : <Navigate to="/"></Navigate> }
    
    
    </>
  )
}

export default RutaProtegida