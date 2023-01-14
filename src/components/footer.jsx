import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaWhatsapp} from 'react-icons/fa';

const Footer = () => {
  return (
         <footer className='grid grid-cols md:grid-cols-3
              border-black border-t bg-white'>
               <div  className='mx-20 my-5 md:col-start-3 flex gap-3 items-center justify-center text-lg'>
               
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
           <div className='col-span-2 md:row-start-1 md:col-start-2
          md:col-end-3 border-t-2 border-black md:border-t-0 flex items-center
          justify-center p-4 text-center'>Copyright &copy; 2022 Amaki-Agency
          </div>
       </footer>
  )
}

export default Footer