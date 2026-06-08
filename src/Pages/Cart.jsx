import React, { useEffect, useState } from 'react'
import CartItem from '../Component/CartItem';

const Cart = () => {
  const [cartItems,setCartItems] = useState(()=>{
    return JSON.parse(localStorage.getItem("cart")) || [];
  })
  
  return (
    <div>
      <div className='w-[30%]'>
        
      </div>
    </div>
  )
}

export default Cart
