import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';


function Navbar() {

    const [nav,setNav] = useState(false)
    const handleClick = ()=>{
        setNav(!nav)
    }

    // const transition = ' hover:text-3xl  transition duration-300 delay-150 hover:delay-200'
  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
       <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>BRAND.</h1>
                <ul className='hidden md:flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='hidden md:flex pr-4'>
                <button className='border-none bg-transparent text-black mr-4 ' >Sign In</button>
                <button className=' px-8 py-3 '>Sign Up</button>
            </div>
            <div className=' md:hidden '>
                {!nav ?
        <AiOutlineMenu className='w-5' onClick={handleClick}  />
                : <ImCross className='w-5' onClick={handleClick} />
                }
           
            </div>
       </div>
       <ul
  className={`${
    !nav ? 'hidden' : 'animate-fade-in absolute bg-zinc-200 w-full px-8'
  }`}
>
  <li className="border-b-2 border-zinc-300 w-full">Home</li>
  <li className="border-b-2 border-zinc-300 w-full">About</li>
  <li className="border-b-2 border-zinc-300 w-full">Pricing</li>
  <li className="border-b-2 border-zinc-300 w-full">Contact</li>
  <div className="flex flex-col my-4">
    <button className="border-none bg-transparent text-indigo-600 px-8 py-3 mb-4">
      Sign In
    </button>
    <button className="px-8 py-3">Sign Up</button>
  </div>
</ul>


    </div>
  )
}

export default Navbar

{/* <div className={` flex gap-3 items-center justify-between  bg-purple-500 bg-opacity-40 h-16 `} >
    //     <Link  to='/'>
    //     <h1 className={`text-2xl font-bold ml-3  items-center   inline-flex ${transition}  `} > <FaBeer className='hover:text-yellow-500'   /> Booking  </h1>
       
    //     </Link>
    //     <div className='flex gap-3 mr-3 '>
    //     <h3 className='opacity-40 hover:opacity-100 hover:text-lg  transition duration-300 delay-150 hover:delay-200' >About</h3>
    //         <Link to = '/contacts'>

    //     <h3 className='opacity-40 hover:opacity-100 hover:text-lg  transition duration-300 delay-150 hover:delay-200 ' >Contact</h3>
    //         </Link>
    //     </div>
    // </div> */}