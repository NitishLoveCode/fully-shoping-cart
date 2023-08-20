import { current } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import {useSelector} from "react-redux"
import { useDispatch } from 'react-redux'
import { remove_from_cart } from '../../sote/slices/cartSlice'
import { filter_Products } from '../../sote/slices/cartSlice'
import { addToCart } from '../../sote/slices/cartSlice'
import { remove_single } from '../../sote/slices/cartSlice'

export default function Cart() {
    const dispatch=useDispatch()
    const[totlePrice,settotlePrice] =useState()
    
    const cart_Items = useSelector((state)=>{
        return state.cartItems
    })


    // ----remove item form cart----------
    const removeForm_cart=(e)=>{
        dispatch(remove_from_cart(e))
    }

    const find_total_price=()=>{
        const all_price=cart_Items?.map((curEle)=>curEle.price*curEle.quantity)?.reduce((accumulate,id)=>accumulate+=id)
        settotlePrice(all_price)

    }

   useEffect(()=>{
    if(cart_Items.length>0){
        find_total_price()
    }
   },[cart_Items]);


  return (
    <div className='flex items-center justify-center mt-20 gap-16'>
                    <div className='flex flex-col gap-3 items-center justify-center'>
        {
            cart_Items?.map((element,id)=>{
                return(
                    <>
                        <div className='flex items-center gap-10'>
                            <img className='h-16' src={element?.thumbnail} alt={element?.title} />
                            <h2>{element?.title}</h2>
                            <div className='flex items-center text-center border-2 border-gray-500 border-solid'>
                                <button onClick={()=>dispatch(remove_single(element))} className='ml-3 mr-3 cursor-pointer font-bold'>-</button>
                                <p className="bg-gray-700 text-white pl-3 pr-3">{element?.quantity}</p>
                                <button onClick={()=>dispatch(addToCart(element))} className='ml-3 mr-3 cursor-pointer font-bold'>+</button>
                            </div>
                            <div onClick={()=>removeForm_cart(id)} className='bg-red-500 text-white pl-3 pr-3 cursor-pointer'>
                                <span>X</span>
                            </div>
                            <p>₹ {element?.price}</p>
                        </div>
                    </>
                )
            })
        }
        </div>

        {
            cart_Items.length >0 ? <>
            <div className='border-2 border-gray-500 border-solid w-60 h-20'>
            <div className='flex items-center justify-center bg-yellow-500 text-white font-bold'>
                <h2>Total price</h2>
            </div>
            <div className='pl-3'>
                <p>Total Queantity {cart_Items?.length}</p>
                <p>Total Price ₹ {totlePrice}</p>
            </div>
        </div>
            </>:<h1>Cart is Empety.</h1>
        }

    </div>
  )
}
