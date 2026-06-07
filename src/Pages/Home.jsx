import React, { useEffect, useState } from 'react'
import ProductCard from '../Component/ProductCard';
import { toast } from 'react-toastify';


const Home = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Wireless Headphones",
      price: 10,
      image: "/images/img1.jpg",
      description: "High quality wireless headphones with noise cancellation",
      category: "electronics",
    },
    {
      id: 2,
      title: "Running Shoes",
      price: 2999,
      image: "/images/img1.jpg",
      description: "Comfortable running shoes for daily workouts",
      category: "fashion",
    },
    {
      id: 3,
      title: "Smart Watch",
      price: 4999,
      image: "/images/img1.jpg",
      description: "Track your fitness and notifications",
      category: "electronics",
    },
    {
      id: 4,
      title: "Backpack",
      price: 999,
      image: "/images/img1.jpg",
      description: "Durable backpack for travel and office",
      category: "accessories",
    },
    {
      id: 5,
      title: "Backpack",
      price: 999,
      image: "/images/img1.jpg",
      description: "Durable backpack for travel and office",
      category: "accessories",
    }
  ]);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isPresent, setIsPresent] = useState(false)

  useEffect(() => {

    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prev => {
      const existingProduct = prev.find(item => item.id === product.id);

      if (existingProduct) {
        return prev.map(item => {
          return item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item;
        })
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1
        }
      ]
    })

    toast.success(`${product.title} added to cart 🛒`);
  }

  const isInCart = (productId) => {
    return cart.some(item => item.id === productId);
  };

  const getQuantity = (productId)=>{
    const reqProduct = cart.find(item=>item.id === productId);
    console.log("req ",productId);
    
    return reqProduct.quantity;
  }

  const handleQuantity = ()=>{
    
  }

  return (
    <div className='grid grid-cols-4  gap-5 '>
      {products.map(product => {
        return (
          <ProductCard key={product.id} id={product.id} title={product.title} amount={product.price} image={product.image} category={product.category} addToCart={() => addToCart(product)} isInCart={isInCart(product.id)}  quantity = {isInCart(product.id) ? getQuantity(product.id):0} />
        )
      })}
    </div>
  )
}

export default Home
