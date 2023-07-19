import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
            <div>
            <img src='logo.png' className='w-1/5 block mx-auto'/>
            <h1 className='text-sky-500 mt-5 text-center font-black text-xl'>Create an account in Online Banking</h1>
            <form className='my-10 bg-white shadow rounded-lg px-10 py-10' onSubmit={handleSubmit}>
                <div className='my-5'>
                    <label className='text-gray-600 block text-lg' htmlFor='firstname'>First name</label>
                    <input id='firstname' name='firstname' type='text' className='w-full mt-2 p-2 border rounded-xl bg-gray-50' value={firstname} onChange={e => setFirstname(e.target.value)}></input>
                </div>
                <div className='my-5'>
                    <label className='text-gray-600 block text-lg' htmlFor='lastname'>Last name</label>
                    <input id='lastname' name='lastname' type='text' className='w-full mt-2 p-2 border rounded-xl bg-gray-50' value={lastname} onChange={e => setLastname(e.target.value)}></input>
                </div>
                <div className='my-5'>
                    <label className='text-gray-600 block text-lg' htmlFor='accountNumber'>Account number</label>
                    <input id="accountNumber" name='accountNumber' type='text' className='w-full mt-2 p-2 border rounded-xl bg-gray-50' value={accountNumber} onChange={e => setAccountNumber(e.target.value)}></input>
                </div>
                <div className='my-5'>
                    <label className='text-gray-600 block text-lg' htmlFor='age'>Age</label>
                    <input id="age" name='age' type='number' className='w-full mt-2 p-2 border rounded-xl bg-gray-50' value={age} onChange={e => setAge(e.target.value)}></input>
                </div>
                <div className='my-5'>
                    <label className='text-gray-600 block text-lg' htmlFor='country'>Country</label>
                    <input id="country" name='country' type='text' className='w-full mt-2 p-2 border rounded-xl bg-gray-50' value={country} onChange={e => setCountry(e.target.value)}></input>
                </div>
                <div className='my-5'>
                    <label className='text-gray-600 block text-lg' htmlFor='email'>Email</label>
                    <input id='email' name='email' type='email' className='w-full mt-2 p-3 border rounded-xl bg-gray-50' value={email} onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div className='my-5'>
                    <label className='text-gray-600 block text-lg' htmlFor='password'>Password</label>
                    <input id="password" name='password' type='password' className='w-full mt-2 p-2 border rounded-xl bg-gray-50' value={password} onChange={e => setPassword(e.target.value)}></input>
                </div>
                <input type='submit' value="Sign Up" className='bg-gray-300 text-black w-2/3 block mx-auto font-bold text-xl rounded-xl py-3 mt-14 uppercase mb-5' />
            </form>
            <nav className='lg:flex lg:justify-between'>
                <Link className='block text-center my-5 text-slate-500 uppercase text-sm' to="/" >Already have an account? Log in</Link>
            </nav>
        </div>
    )
}

export default SignUp