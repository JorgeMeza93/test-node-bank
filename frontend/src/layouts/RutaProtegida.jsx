import React from 'react';
import { Outlet, Navigate } from 'react-router-dom'; 
import useAuth from '../Hooks/useAuth';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const RutaProtegida = () => {
  const { auth, cargando } = useAuth();
  if(cargando) return "Cargando...";
  console.log(auth);

  return (
    <>
      { auth.id ? (<div className='bg-gray-100'>
                    <Header/>
                    <div className='md:flex md:min-h-screen'>
                      <Sidebar/>
                      <main>
                        <Outlet/>
                      </main>
                    </div>
                  </div>) : <Navigate to="/"></Navigate> }
    
    
    </>
  )
}

export default RutaProtegida