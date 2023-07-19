import React from 'react'


const Login = () => {
  return (
    <div>
      <img src='logo.png' className='w-1/5 block mx-auto'/>
      <h1 className='text-sky-500 mt-5 text-center font-black text-xl'>Log In to Online Banking</h1>
      <form className='my-10 bg-white shadow rounded-lg px-10 py-10'>
        <div className='my-5'>
          <label className='text-gray-600 block text-xl' htmlFor='email'>Email</label>
          <input id='email' name='email' type='email' className='w-full mt-3 p-3 border rounded-xl bg-gray-50'></input>
        </div>
        <div className='my-5'>
          <label className='text-gray-600 block text-xl' htmlFor='password'>Password</label>
          <input id="password" name='password' type='password' className='w-full mt-3 p-3 border rounded-xl bg-gray-50'></input>
        </div>
        <input type='submit' value="Login" className='bg-gray-300 text-black w-2/3 block mx-auto font-bold text-xl rounded-xl py-3 mt-14 uppercase mb-5' />
      </form>
      <nav className='lg:flex lg:justify-between'>

      </nav>
    </div>
  )
}

export default Login