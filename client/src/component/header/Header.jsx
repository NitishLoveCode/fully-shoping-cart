import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from "react-redux"

export default function Header() {
  const [items, setitems]=useState()

  const all_items=useSelector((state)=>{
    return state.cartItems
  })


  return (
    <div className='bg-black h-11 justify-between flex items-center text-white pl-8 pr-8'>
        <div className='text-3xl'><Link to={'/'}><span>eMarket</span></Link></div>
        <div className='relative'>
            <div className='text-xl'><Link to={"/cart"}><span>Cart</span></Link></div>
            {
              all_items.length > 0 ? <div className='bg-yellow-500 rounded-full absolute top-0 -right-4 text-sm w-4 h-4 flex items-center justify-center'>{all_items?.length}</div>:""
            }
            
        </div>
    </div>
  )
}
