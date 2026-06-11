import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { IoMdArrowBack } from "react-icons/io";

const ProductInfo = () => {
    const { id } = useParams();
    const [info, setInfo] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("products"))
        const reqProduct = data.find(item => Number(item.id) === Number(id));
        setInfo(reqProduct)
    }, [])
    console.log("info ", info);

    return (
        <div>
            <div>
                <button className='bg-white p-2 rounded-full hover:translate-x-1 hover:ease-in hover:bg-gray-300 cursor-pointer' onClick={() => navigate(-1)}>
                    <IoMdArrowBack size={30} />
                </button>
            </div>


            {info && <div>
                <div>
                    <img src={info.image} alt="" />
                </div>
                <div>
                    <h1>{info.title}</h1>
                    <p>{info.description}</p>
                    
                </div>
            </div>}
        </div>
    )
}

export default ProductInfo
