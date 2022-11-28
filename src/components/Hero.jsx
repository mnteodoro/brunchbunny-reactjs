import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='w-full'>
        <div className='max-h-[800px] relative'>
            <div className='absolute w-full h-full text-gray-200 max-h-[520px] bg-black/70 flex flex-col justify-center pl-8 z-[15]'>
                <h1 data-aos='fade-right' data-aos-duration='500' className='z-6 px-4 pt-48 text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-400'>Satisfy Your Cravings</span>
                </h1>
                <h1 data-aos='fade-left' data-aos-duration='500' className='px-4 text-3xl sm:text-3xl md:text-3xl lg:text-3xl font-semibold'>The best treats delivered for free</h1>
            </div>
            <div data-aos='fade-left' data-aos-duration='500' className='z-10'><img className='w-full max-h-[470px] object-cover' src='https://images.pexels.com/photos/1833336/pexels-photo-1833336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt=''></img></div>
        </div>
    </div>
  )
}

export default Hero