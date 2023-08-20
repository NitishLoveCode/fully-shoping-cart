import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './component/header/Header'
import Home from './component/home/Home'
import Cart from './component/cart/Cart'


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
