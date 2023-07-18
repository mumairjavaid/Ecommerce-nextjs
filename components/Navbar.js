import Image from 'next/image'
import Link from 'next/link'
// import { XCircle } from "@phosphor-icons/react";
import { useRef } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BiPlusCircle,BiMinusCircle } from 'react-icons/bi';


const Navbar = ({addToCart,cart}) => {
  console.log(cart)
    const ref = useRef()
    const toggle=()=>{
        if(ref.current.classList.contains("translate-x-full")){
            ref.current.classList.remove("translate-x-full")
            ref.current.classList.add("translate-x-0")
        }
        else if(ref.current.classList.contains("translate-x-0")){
            ref.current.classList.remove("translate-x-0")
            ref.current.classList.add("translate-x-full")
        }

    }
    return (
    <>
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
      <Image src='/logos.png' width={100} height={40} alt='Logo'/>
      <span className="ml-3 text-xl">Umair Films</span>
    </a>
    

    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link className="mr-5 hover:text-gray-900" href='/hello'>Home </Link>
      <Link className="mr-5 hover:text-gray-900" href='/'>Products</Link>
      <Link className="mr-5 hover:text-gray-900" href='/'>Shirts</Link>
      <Link className="mr-5 hover:text-gray-900" href='/'>Contact Us</Link>
    </nav>
    <button  onClick={toggle} className="inline-flex justify-end items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded mt-4 md:mt-0 font-bold text-lg p-8 ml-20 ">Cart
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    </div>
</header>
<div ref={ref} className="sidebar w-60 absolute right-0 w=72 top-2 transform transform-translate translate-x-full p-8 bg-slate-400 ">
    <AiFillCloseCircle onClick={toggle} className="absolute top-3 right-3 cursor-pointer"/>
    <ol className="list-decimal"> 
         
        {Object.keys(cart).map((curr)=>{
         return(
         <li className='flex' key={curr}> 
         <div className='w-2/3 bg-slate-400'>{cart[curr].price} </div>
         
         <div onClick={()=>{addToCart(345,344,1,'red')}} className=" w-1/3 bg-slate-300 flex items-center justify-center "><BiPlusCircle className='mr-2'/>{cart[curr].qty}<BiMinusCircle className='ml-2'/></div>
         
         </li>
         )
        })}
    </ol>
</div>
    </>
  )
}

export default Navbar