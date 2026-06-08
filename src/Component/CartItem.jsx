import React from 'react'

const CartItem = () => {
    return (
        <div className='bg-blue-950  flex rounded-md text-white shadow-lg'>
            <div className='w-[30%]'><img src="/images/img1.jpg" alt="" className='rounded-l-md object-cover' /></div>
            <div className='flex flex-col w-[70%] py-4 px-3'>
                <div className='flex justify-between text-xl font-bold '>
                    <span className=''>Title</span>
                    <span>$100</span>
                </div>
                <div className='flex justify-between items-center'>
                    <span>category</span>
                    <div className='flex items-center justify-center'>
                        <span>-</span>
                        <span>1</span>
                        <span>+</span>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default CartItem
