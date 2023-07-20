import Link from 'next/link'
import { BiPlusCircle,BiMinusCircle } from 'react-icons/bi';

const Checkout = ({cart,addToCart,deleteThisItemFromCart,subtotal}) => {
  return (
    <>
    <section className="text-gray-600 body-font ">
    <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-3 text-gray-900">Checkout</h1>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Place Order</button>
        </div>
        <h1 className=' mt-3 mb-4 text-xl font-bold text-center w-full'>Review Cart Items</h1>
        <div className="sidebar w-full flex justify-center p-8 bg-indigo-300 rounded ">
        <ol className="list-decimal"> 
        {(Object.keys(cart).length==0)?<h1>No product in the cart</h1>:(Object.keys(cart).map((curr)=>{
         return(
         <li className='flex mt-2 space-x-4' key={curr}> 
         <div className=' bg-slate-400'>{cart[curr].price} </div>
         <div className="  bg-slate-300 flex items-center justify-center   "><BiPlusCircle onClick={()=>{addToCart(345,344,1,'red')}} className='mr-2 font-xl'/>{cart[curr].qty}<BiMinusCircle onClick={()=>{deleteThisItemFromCart(345,344,1,'red')}} className='ml-2 text-xxl color-black-400'/></div>
         </li>
         )
        }))}
        </ol>
        </div>
        <h1 className='text-xl font-semibold'>Subtotal: Rs.{subtotal}</h1>

      </div>
        <Link href='/checkout'><button className=" my-5 text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded">Checkout</button></Link>
    </div>
  </div>
  
</section>
    </>
  )
}

export default Checkout