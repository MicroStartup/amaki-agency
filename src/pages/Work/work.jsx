import React from 'react';
import { images } from '../../constants';
import { FaMapMarkedAlt, FaUserAlt, FaWallet} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Work = () => {
  return (
    <>
    <section className='text-black py-28 bg-center bg-cover' 
    style={{ backgroundImage: `url(${images.healthcare3})` }}>
    <div className='container mx-auto px-4'>
      <h2 className='text-lg font-bold uppercase'>Application form</h2>
      <h1 className='text-4xl lg:text-5xl xl:text-7xl font-bold mb-6'>Amaki Agency</h1>
    </div>
    </section>


    <section className='mdborder-black border-t-2 py-16'>
      <div className='container mx-auto px-4'>
        <h1 className='text-3xl font-bold mb-4'>Healthcare Assistant</h1>
        <p className='text-lg max-w-[630px] mb-16'>
        At Amaki Agency we believe in investing in our team and ensuring 
        that they are supported during their time working with us. We are 
        always looking for experienced, highly skilled, professional nurses 
        and carers to join our team and enhance the service we already provide. 
        We also have great opportunities to join our team working behind the scenes 
        ensuring that the delivery of care is seamless and always to the highest standards..
        </p>

        <ul className='text-lg flex max-w-[630px] gap-8'>
          <li className='flex flex-col text-center bg-white border-black border p-4'>
            <span className='font-bold text-2xl'><FaMapMarkedAlt/></span>
            <span>London, United Kingdom</span>
          </li>
          <li className='flex flex-col text-center bg-white border-black border p-4'>
            <span className='font-bold text-2xl'><FaWallet/></span>
            <span>£18,650.00 - £21, 680.00</span>
          </li>
          <li className='flex flex-col text-center bg-white border-black border p-4'>
            <span className='font-bold text-2xl'><FaUserAlt/></span>
            <span>Permanent, Full time</span>
          </li>
        </ul>

       <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3IUeKZDpVGiVHwyQFp6bSCQNAPunOiD0n9GhoK2IonvN6yg/viewform?usp=sf_link"><button className="bg-blue-700 uppercase text-xs lg:text-base lg:my-10 p-2 text-white lg:w-6/12">Apply</button></a> 

      </div>
    </section>

    </>
  )
}

export default Work