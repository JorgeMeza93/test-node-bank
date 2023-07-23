import React from 'react';
import useAuth from "../Hooks/useAuth";

const Sidebar = () => {
    const { auth } = useAuth();
    return (
        <aside className='md:w-80 lg:w-96 px-5 py-10'>
            <p className='text-xl font-bold'>Hello { auth.firstname }</p>
        </aside>
    )
}

export default Sidebar