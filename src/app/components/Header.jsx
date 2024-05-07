"use client"


import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';



function Header() {

    const router = useRouter();
    const [productName, setProductName] = useState("");
    //console.log(productName)

    const handleInput = (e) => {
      setProductName(e.target.value);
    }

    const hendleForm = (e) => {
      e.preventDefault();
      router.push(`/productsearch/${productName}`);

    }


  return (
    <header className='bg-gradient-to-r from-blue-500 via-indigo-600 to-pink-400 h-[300px] flex justify-center items-center'>
        <div className='text-center'>
            <h1 className='text-white text-5xl'>ส่งผลงาน Project NextJS Ep.2</h1>
            <p className='text-white text-2xl'>Products Dummy</p>
            <form onSubmit={hendleForm} className='flex mt-5'>
                <input 
                    type="text"
                    className='w-full rounded-md border-gray-30 px-3 py-2 text-gray-700 shadow-md'
                    placeholder='Product Items...'
                    onChange={handleInput}
                />
                <button className='inline-flex items-center mx-2 px-4 py-2 rounded-md bg-green-500 text-white shadow-md' 
                type='submit'>ค้นหา</button>
            </form> 

        </div>
    </header>
  )
}

export default Header