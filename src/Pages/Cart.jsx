import React, { useEffect, useState } from 'react'
import CartItem from '../Component/CartItem';
import { toast } from 'react-toastify';

const Cart = () => {
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  })

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleRemove = (productId, title) => {
    setCartItems(prev => {
      return prev.filter(item => item.id != productId)
    })
    toast.success(`${title} is removed from cart 🛒`);

  }

  return (
    <>
      {cartItems.length === 0 ? <div className='flex items-center justify-center'>
        <p className='text-2xl font-bold'>Your cart is empty!</p>
      </div> : <div className='w-[30%] flex flex-col gap-7'>
        <div><p className='text-2xl font-bold text-white'>Your Cart</p></div>
        <div className='flex flex-col gap-10'>
          {cartItems.map(item => {
            return (
              <CartItem key={item.id} id={item.id} title={item.title} quantity={item.quantity} price={item.price} image={item.image} category={item.category} handleRemove={() => handleRemove(item.id, item.title)} />
            )
          })}
        </div>
      </div>}
    </>


  )
}

export default Cart
