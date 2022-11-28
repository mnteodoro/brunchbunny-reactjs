import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag} from 'react-icons/ai'
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'

const Navbar = () => {
const [nav, setNav] = useState(false)
const [cart, setCart] = useState(false)
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        <div className='flex items-center'>
        <div onClick={()=>setNav(!nav)} className="cursor-pointer ease-in duration-500">
            <AiOutlineMenu size={30}/>
        </div>
        <h1 className='text-2xl sm:text-2xl lg:text-3xl px-3'>Brunch <span className='font-extrabold'>Bunny</span><span className='text-xs uppercase pl-1'>by Mark</span></h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full text-[14px]'>
            <p className='bg-black text-amber-400 rounded-full px-3 py-2'>Free Delivery</p>
        </div>
        </div>
        {/* search input */ }
        <div className='bg-gray-200 rounded-full flex justify-center items-center px-2 w-[200px] sm:w-[400px] lg:w-[300px] right-36 absolute'>
            <AiOutlineSearch size={25} />
            <input className='bg-transparent p-2 focus:outline-none w-[200px] sm:w-[400px] lg:w-[500px]' type="text" placeholder="Search food" />
        </div>
        {/* cart button */}
        <button onClick={()=>setCart(!cart)} className='bg-black text-white hidden md:flex items-center py-2 hover:scale-105 duration-500'>
            <BsFillCartFill size={20} className='mr-2'/>
        </button>

    {/* mobile menu */}
    {nav ? <div className='bg-black/80 fixed w-full h-screen z-[80] top-0 left-0 duration-700 ease-in-out'>
    </div> : ''}
    {cart ? <div className='fixed w-full h-screen z-[80] top-0 left-0'>
    </div> : ''}

    <div className={cart ? 'fixed rounded-sm top-7 right-7 w-[300px] h-[screen] z-[100] bg-black duration-500' : 'fixed top-0 left-[-100%] w-[300px] h-screen z-10 duration-700'}>
        <AiOutlineClose onClick={()=>setCart(!cart)} size={30} className='absolute right-4 top-4 cursor-pointer ease-out duration-500 text-amber-400' />
        <h2 className='text-xl p-4 text-amber-400'>Your orders</h2>
        <p className='text-white p-4'><span className='text-amber-400'>Total:</span></p>
        <div className='text-center'>
            <button className='rounded-xl bg-white m-4 hover:bg-amber-400 hover:text-black duration-150 hover:scale-105'>
                Check out
            </button>
        </div>
    </div>

    {/* side drawer */}
    <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen z-[100] bg-black duration-700' : 'fixed top-0 left-[-100%] w-[300px] h-screen z-10 bg-white duration-700'}>
        <AiOutlineClose onClick={()=>setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer text-amber-400' />
        <h2 className='text-2xl p-4 text-amber-400'>Brunch <span className='font-bold'>Bunny</span></h2>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                <li className='text-lg py-4 flex'><TbTruckDelivery size={25} className='mr-4 text-amber-400' /><span className='text-white font-light hover:font-bold cursor-pointer duration-200'>Orders</span></li>
                <li className='text-lg py-4 flex'><MdFavorite size={25} className='mr-4 text-amber-400' /><span className='text-white font-light hover:font-bold cursor-pointer duration-200'>Favorites</span></li>
                <li className='text-lg py-4 flex'><FaWallet size={25} className='mr-4 text-amber-400' /><span className='text-white font-light hover:font-bold cursor-pointer duration-200'>Wallet</span></li>
                <li className='text-lg py-4 flex'><MdHelp size={25} className='mr-4 text-amber-400' /><span className='text-white font-light hover:font-bold cursor-pointer duration-200'>Help</span></li>
                <li className='text-lg py-4 flex'><AiFillTag size={25} className='mr-4 text-amber-400' /><span className='text-white font-light hover:font-bold cursor-pointer duration-200'>Promotions</span></li>
                <li className='text-lg py-4 flex'><BsFillSaveFill size={25} className='mr-4 text-amber-400' /><span className='text-white font-light hover:font-bold cursor-pointer duration-200'>Best Ones</span></li>
                <li className='text-lg py-4 flex'><FaUserFriends size={25} className='mr-4 text-amber-400' /><span className='text-white font-light hover:font-bold cursor-pointer duration-200'>Invite Friends</span></li>

            </ul>
        </nav>
    </div>
    </div>
  )
}

export default Navbar