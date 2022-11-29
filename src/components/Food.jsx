import React,{useState, useEffect} from 'react'
import {data} from '../data.js'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {BsFillCartFill} from 'react-icons/bs'

const Food = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    const [foods, setFoods] = useState(data)
    const filterType = (category) => { 
        setFoods(
            data.filter((item)=> { 
                return item.category === category
            })
        )
    }
    const filterPrice = (dollar) => {
        setFoods(
            data.filter((item)=> {
                return item.dollar === dollar
            })) 
    };
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 data-aos='fade-up' data-aos-offset='220' data-aos-duration='500' className='text-gray-900 font-bold text-4xl text-center'>Our Menu</h1>
        <div className='flex flex-col lg:flex-row justify-between'>
            <div className='md:text-center md:py-5' data-aos='fade-up' data-aos-offset='220'>
                <p className='font-bold text-gray-800'>Filter Type</p>
                <div className='flex flex-wrap md:justify-center'>
                    <button onClick={()=> setFoods(data)} className='border-orange-500 bg-orange-600 text-white font-semibold hover:scale-105 duration-300 m-3 hover:bg-gray-800 hover:text-white'>All</button>
                    <button onClick={()=> filterType('burger')} className='border-orange-500 bg-orange-600 text-white font-semibold hover:scale-105 duration-300 m-3 hover:bg-gray-800 hover:text-white'>Burger</button>
                    <button onClick={()=> filterType('pizza')} className='border-orange-500 bg-orange-600 text-white font-semibold hover:scale-105 duration-300 m-3 hover:bg-gray-800 hover:text-white'>Pizza</button>
                    <button onClick={()=> filterType('salad')} className='border-orange-500 bg-orange-600 text-white font-semibold hover:scale-105 duration-300 m-3 hover:bg-gray-800 hover:text-white'>Salad</button>
                    <button onClick={()=> filterType('chicken')} className='border-orange-500 bg-orange-600 text-white font-semibold hover:scale-105 duration-300 m-3 hover:bg-gray-800 hover:text-white'>Chicken</button>
                </div>
            </div>

            <div className='md:text-center md:py-5' data-aos='fade-up' data-aos-offset='220'>
                <p className='font-bold text-gray-800'>Filter Price</p>
                <div className='flex flex-wrap md:justify-center'>
                    <button onClick={()=> filterPrice('$')} className='bg-gray-800 text-white hover:scale-105 duration-300 m-3 hover:bg-orange-600 hover:text-white'>$</button>
                    <button onClick={()=> filterPrice('$$')} className='bg-gray-800 text-white hover:scale-105 duration-300 m-3 hover:bg-orange-600 hover:text-white'>$$</button>
                    <button onClick={()=> filterPrice('$$$')} className='bg-gray-800 text-white hover:scale-105 duration-300 m-3 hover:bg-orange-600 hover:text-white'>$$$</button>
                    <button onClick={()=> filterPrice('$$$$')} className='bg-gray-800 text-white hover:scale-105 duration-300 m-3 hover:bg-orange-600 hover:text-white'>$$$$</button>
                </div>
            </div>
        </div>
        {/* this is where to display the images */}
        <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-8 pt-5 m-auto'>
            {foods.map((item,index)=> (
                <div data-aos='flip-down' data-aos-duration='500' data-aos-offset='300'>
                <div key={index} className='rounded-xl bg-slate-100 hover:bg-gray-900 border-none shadow-lg group-hover hover:scale-[1.04] duration-300 hover:text-amber-500'>
                    
                    <img src={item.image} alt={item.name} className='w-full h-[270px] object-cover rounded-t-xl duration-300'></img>
                    <div className='flex justify-between items-center px-3 pb-2 pt-5'>
                        <p className='font-bold md:text-lg sm:text-md lg:text-xl'>{item.name}</p>
                        <p className='flex'>
                            <span className='bg-orange-600 text-white p-2 rounded-lg font-semibold md:text-sm lg:text-lg text-sm'>{item.price}</span>
                        </p>
                    </div>
                    
                    </div>
                    <div className='flex items-center justify-center'><span className='p-2 text-xs rounded-md bg-gray-700 text-white mb-2 mt-3 cursor-pointer hover:text-amber-500 hover:bg-black duration-200'>Add to Cart</span></div>
                </div>
            ))}
            
        </div>
                           
        <div>
        <p className='pt-20 text-center text-3xl'>Brunch <span className='font-bold'>Bunny</span></p>
        <p className='text-center font-light'>Designed by <span className='font-semibold'>Mark Teodoro</span></p>
        </div>
        
    </div>
  )
}

export default Food
