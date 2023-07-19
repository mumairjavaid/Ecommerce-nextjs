import '../styles/globals.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useState,useEffect } from 'react'


function MyApp({ Component, pageProps }) {
  
  const [cart, setCart] = useState({})
  const [subtotal, setSubtotal] = useState()
 
  
  const addToCart=(productId,price,qty,color)=>{

    const newCart = {...cart};
    if(productId in cart) {
      newCart[productId].qty = cart[productId].qty + 1
    }
    else{
      newCart[productId] = {price,qty:1,color}
    }
    setCart(newCart);
    saveCart(newCart);

  }
  const deleteThisItemFromCart=(productId,price,qty,color)=>{
    const newCart = {...cart}
    if(productId in cart){
      newCart[productId]['qty']= cart[productId]['qty'] - 1 
    }
    if (cart[productId]['qty']<=0){
      delete newCart[productId]
    }
    setCart(newCart);
    saveCart(newCart)
        
  }
  useEffect(() => {
    if (localStorage.getItem('cart')){
      setCart(JSON.parse(localStorage.getItem('cart')))
      saveCart(JSON.parse(localStorage.getItem('cart')))
    }
    
  }, [])
  
  const saveCart=(newCart)=>{
    localStorage.setItem('cart',JSON.stringify(newCart))
    let pricetotal=0;
    let keys = Object.keys(newCart)
    for (let i=0;i<keys.length;i++) {
      pricetotal += (newCart[keys[i]].price)*(newCart[keys[i]].qty); 
    }
    setSubtotal(pricetotal); 
    }
  
  return( 
  <>

  <Navbar addToCart={addToCart} cart={cart} subtotal={subtotal} deleteThisItemFromCart={deleteThisItemFromCart}/>
  <Component addToCart={addToCart} deleteThisItemFromCart={deleteThisItemFromCart} subtotal={subtotal} cart={cart} {...pageProps} />
  <Footer/>

  </>)
}

export default MyApp
