"use client"

import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import Image from 'next/image';

function PoductData() {

    
    const [product, setProduct] = useState([]);
    const [Loading, setLoading] = useState(false);

    console.log("Data from State",product)

    useEffect(() => {
        setLoading(true);
        const fetchProduct = async () => {
           try {
                const response = await fetch("https://dummyjson.com/products");
                const productData = await response.json();
                
                setProduct(productData.products)
           } catch(error) {
                console.log(error) 
           }
           setLoading(false);
        }
        fetchProduct();
    }, [])


  return (
    <div className='container text-center mx-auto'>
        {Loading ? (
            <p>Loading...</p>
        ) : (
            <div className='grid grid-cols-5'>
                {product.map((val, index) => (
                   <Link key={val.title} href={`/productinfo/[id]`}
                   as={`/productinfo/${index + 1}`}
                   >
                    <div key={index} 
                    className='flex justify-center items-center shadow-md transition cursor-pointer hover:shadow-lg m-3 rounded-md w-[300px] h-[300px]'>
                        <div>
                            <h3>{val.title}</h3>
                            <Image src={val.images[0]} width={150} height={150} alt={val.title}/>
                        </div>
                    </div>
                   
                   </Link> 
                ))}
            </div>


            
        )}
    </div>
  )
}

export default PoductData