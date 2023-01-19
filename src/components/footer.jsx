import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaWhatsapp} from 'react-icons/fa';
import { images } from '../constants'

const Footer = () => {
  return (
    
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-y'>
     <div className='grid-cols-2 gap-5 flex flex-wrap text-black bg-[#f8f9fa] py-12'>
        <div className=' md:flex-1 
          md:order-2 container flex-col lg:flex-row px-5'>
          <img className='mx-auto' src={images.healthcare8} alt='Raddy'/>
                
       </div>
        <div className='px-5 md:flex-1 
          md:order-2 container flex-col lg:flex-row'>
                <p className='font-bold uppercase'>Subscribe to our newsletter</p>
                <p className='py-4'>Subscribe to our communications to receive our best offers!.</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter email..'/>
                    <button className='p-2 mb-4 bg-blue-700 text-white uppercase'>Subscribe</button>
                </form>
        </div>
    </div>

    <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
    <p className='py-4'>Copyright &copy; 2023 Amaki-Agency</p>
    <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
<Link to='/'>
                    <FaFacebook />
                 </Link>
                 <Link to='/'>
                   <FaWhatsapp/>
                 </Link>
                 <Link to='/'>
                   <FaTwitter/>
                 </Link>
    </div>
    </div>
</div>
  )
}

export default Footer