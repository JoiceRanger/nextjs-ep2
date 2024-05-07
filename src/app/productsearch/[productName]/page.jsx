"use client"

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

function ProductResult() {

    const params = useParams();

    console.log(params)

    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(false);

    console.log("Data from State: ",productData);

    const fetchProductData = async () => {
        try {
            setLoading(true);
            const response = await fetch("https://dummyjson.com/products/${params.productName}");
            const data = await response.json();
            setProductData(data);
            setLoading(false);
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProductData(); 
    }, [])

  return (
    <div className='p-24'>
        <Link href="/" className='bg-blue-500 text-white p-3 rounded-md'>หน้าแรก</Link>
        <div className='flex justify-center items-center mt-10 text-center'>
            <div className='shadow-md p-10 rounded-md w-[300px] p-10'>
                {loading ? (
                    <p>กำลังดาวน์โหลด...</p>
                ) : (
                    <>
                        <h3 className='text-2xl'>{productData ?.title}</h3>
                        <Image src={productData.thumbnail} width={200} height={200} alt={productData.title} />
                        <div className='mt-5'>
                            <p className='text-2xl my-3'>ยี่ห้อ: {productData.brand}</p>
                            <p className='bg-gray-200 text-slate-500 rounded-md my-3'>รายละเอียดสินค้า: {productData.description}</p>
                            <p className='my-3'>หมวดหมู่สินค้า: {productData.category}</p>
                            <p className='text-3xl my-5 mt-20'>${productData.price}</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    </div>
    
  )
}

export default ProductResult