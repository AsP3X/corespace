'use client';

import { motion } from 'framer-motion';

export default function NavigationBar() {
    return (
        <div className='fixed top-0 left-0 bg-white w-full h-16 flex items-center z-50'>
            <span className='text-black text-2xl font-bold ml-6'>CoreSpace</span>
            <div className='flex items-center justify-center flex-grow'>
                <button className='text-black text-lg font-bold mr-4'>Home</button>
                <button className='text-black text-lg font-bold mr-4'>About</button>
                <button className='text-black text-lg font-bold mr-4'>Contact</button>
            </div>
            <div className='mr-6'>
                <button className='text-black text-lg font-bold flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </button>
            </div>
            <div className='ml-auto mr-6'>
                <button className='text-black text-lg font-bold mr-4'>Login</button>
                <button className='text-white text-lg font-bold bg-black px-4 py-2 rounded-md'>Sign Up</button>
            </div>
        </div>
    );
}