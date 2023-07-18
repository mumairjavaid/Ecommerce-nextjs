import '../styles/globals.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useState } from 'react'


function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const addToCart=(productId,price,qty,color)=>{
    const newCart = {...cart};
    if(productId in cart){
      newCart[productId].qty = cart[productId].qty + 1
    }
    else{
      newCart[productId] = {price,qty:1,color}
    }
    console.log(newCart, 'Called...');
    setCart(newCart);
  }

  return( 
  <>
  <Navbar addToCart={addToCart} cart={cart}/>
  
  <Component addToCart={addToCart} cart={cart} {...pageProps} />
  <Footer/>
  </>)
}

export default MyApp
