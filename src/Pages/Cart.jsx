import React, { useEffect, useState } from 'react'
import CartItem from '../Component/CartItem';
import { toast } from 'react-toastify';

const Cart = () => {
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  })
  // const [price,setPrice]= useState(0)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  //    const totalPrice = cartItems.reduce((acc, item) => {
  //   return acc + item.price * item.quantity;
  // }, 0);

  // setPrice(totalPrice);
  }, [cartItems]);

  const totalPrice = cartItems.reduce(
  (acc, item) => acc + item.price * item.quantity,
  0
);

  const handleRemove = (productId, title) => {
    setCartItems(prev => {
      return prev.filter(item => item.id != productId)
    })
    toast.success(`${title} is removed from cart 🛒`);

  }

  const handleQuantity = (productId, isInc, title) => {
    const existingProduct = cartItems.find(item => item.id === productId);

    if (isInc) {
      toast.success(`${title} quantity is increased 🛒`);
      setCartItems(prev => prev.map(item => item.id === productId ? { ...item, quantity: item.quantity + 1 } : item))
      return;
    }

    if (existingProduct.quantity === 1) {
      toast.success(`${title} is removed from cart 🛒`);
      setCartItems(prev =>
        prev.filter(item => item.id !== productId)
      );
      return;
    }

    toast.success(`${title} quantity is decreased 🛒`);

    setCartItems(prev => prev.map(item => item.id === productId ? {
      ...item,
      quantity: item.quantity - 1
    } : item))
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
              <CartItem key={item.id} id={item.id} title={item.title} quantity={item.quantity} price={item.price} image={item.image} category={item.category} handleRemove={() => handleRemove(item.id, item.title)} handleQuantity={handleQuantity}/>
            )
          })}
        </div>
        <div className='flex justify-between items-center bg-white text-black p-3 rounded-md text-xl font-bold tracking-wide'>
          <span>Total:</span>
          <span>${totalPrice}</span>
        </div>
      </div>}
    </>
  )
}

export default Cart
