import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function HeadlineCards() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Card */}
        <div className='rounded-xl relative cursor-pointer hover:scale-[1.03] duration-300'>
            {/* Overlay */}
            <div data-aos='fade-up' data-aos-duration='700'>
            <div className='absolute w-full h-full bg-black/40 hover:bg-black/20 duration-500 rounded-xl text-white hover:text-orange-400'>
                <p className='font-bold text-3xl px-5 pt-4'>Sun's Out, Burgers Out!</p>
                <p className='px-5 text-sm'>The best flame-grilled burgers in town</p>
                <button className='border-white bg-white text-black mx-5 absolute bottom-4 hover:bg-gray-900 hover:text-white duration-300 font-semibold'>Learn More</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] lg:max-h-[240px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/3504876/pexels-photo-3504876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='/'></img>
        </div>
        </div>
        <div className='rounded-xl relative cursor-pointer hover:scale-[1.03] duration-300'>
            {/* Overlay */}
            <div data-aos='fade-up' data-aos-duration='700'>
            <div className='absolute w-full h-full bg-black/40 rounded-xl duration-500 hover:bg-black/20 text-white hover:text-amber-500'>
                <p className='font-bold text-3xl px-5 pt-4'>Feast Favorites</p>
                <p className='px-5 text-sm'>Check our weekly promos!</p>
                <button className='border-white bg-white text-black mx-5 absolute bottom-4 hover:bg-gray-900 hover:text-white duration-300 font-semibold'>See promos</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] lg:max-h-[240px] w-full object-cover rounded-xl' src='https://images.unsplash.com/photo-1590759877509-e16daf34fa85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80' alt='/'></img>
            </div>
        </div>

        <div className='rounded-xl relative cursor-pointer hover:scale-[1.03] duration-300'>
            {/* Overlay */}
            <div data-aos='fade-up' data-aos-duration='700'>
                <div className='absolute w-full h-full bg-black/40 rounded-xl duration-500 hover:bg-black/20 text-white hover:text-amber-400'>
                <p className='font-bold text-3xl px-5 pt-4'>We Deliver Desserts</p>
                <p className='px-5 text-sm'>Ice cream cake, brownies, and more! </p>
                <button className='border-white bg-white text-black mx-5 absolute bottom-4 hover:bg-gray-900 hover:text-white duration-300 font-semibold'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] lg:max-h-[240px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/2819088/pexels-photo-2819088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='/'></img>
        </div>
            </div>
    </div>
  )
}

export default HeadlineCards