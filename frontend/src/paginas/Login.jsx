import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Alerta from '../components/Alerta';
import axios from 'axios';
import useAuth from '../Hooks/useAuth';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  const { setAuth, auth, cargando } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if([email, password].includes("")){
      setAlerta({ msg: "All the fields are required!", error: true })
      return;
    }
    try {
      const { data } = await axios.post("http://localhost:4000/api/users/login", { email, password})
      setAlerta("{}")
      await localStorage.setItem("data", data.token);
      setAuth(data);
      navigate(0)
    } catch (error) {
        console.log(error);
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
    }
  }

  const { msg } = alerta;

  return (
    <div>
      <img src='logo.png' className='w-1/5 block mx-auto'/>
      <h1 className='text-sky-500 mt-5 text-center font-black text-xl'>Log In to Online Banking</h1>
      { msg && <Alerta alerta={alerta} /> }
      <form className='my-10 bg-white shadow rounded-lg px-10 py-10' onSubmit={handleSubmit}>
        <div className='my-5'>
          <label className='text-gray-600 block text-xl' htmlFor='email'>Email</label>
          <input id='email' name='email' type='email' className='w-full mt-3 p-3 border rounded-xl bg-gray-50' value={email} onChange={ e => setEmail(e.target.value)}></input>
        </div>
        <div className='my-5'>
          <label className='text-gray-600 block text-xl' htmlFor='password'>Password</label>
          <input id="password" name='password' type='password' className='w-full mt-3 p-3 border rounded-xl bg-gray-50' value={password} onChange={ e => setPassword(e.target.value)}></input>
        </div>
        <input type='submit' value="Login" className='bg-gray-300 text-black w-2/3 block mx-auto font-bold text-xl rounded-xl py-3 mt-14 uppercase mb-5' />
      </form>
      <nav className='lg:flex lg:justify-between'>
        <Link className='block text-center my-5 text-slate-500 uppercase text-sm' to="signup" >Don't have an account? Sign up</Link>
      </nav>
    </div>
  )
}

export default Login