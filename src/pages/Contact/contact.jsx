import React from 'react';
import { socials } from '../../data';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
 
    <section className='py-40 xl:py-15 border-x-2 border-black'>

    <div className='container mx-auto px-4 grid gap-8 lg:grid-cols-2'>

      <div>
        <h1 className='text-4xl lg:text-5xl xl:text-6xl font-bold mb-4'>Stay in touch with us</h1>
        <p className='mb-6 text-lg'>
        Ever want to contact me? If you're looking for help with your creative business, have a burning question to ask me, or simply want to interact, the quickest way to get my attention is to hit me up on email.
        </p>
        <p className='mb-2 text-[20px]'>
          <FaEnvelope/> hello@email.com
        </p>
        <p className='mb-8 text-[20px]'>
           <FaPhoneAlt/> 01634926177
        </p>

        <div className='md:text-3xl md:font-bold'>You can find us on</div>

        <div className='mb-8'>

          <ul className='flex gap-6'>
            {socials.map((item, index) => (
              <li key={index}>
                <a target='_blank' href={item.link} rel='noopener noreferrer'
                className='py-2 flex flex-col md:flex-row gap-2 items-center justify-center'>
                <img src={item.icon} alt={item.alt} width='45' height='45' />
                {item.name}
                </a>
              </li>
            ))}
    
          </ul>
        </div>
      </div>

      <div>
      <form action="#" method="post">

        <div className='w-full mb-4'>
          <input name="Name" id="name" type="text" placeholder='Full name' required className='block w-full px-3 py-2 border-black border-2 rounded' />
        </div>

        <div className='w-full mb-4'>
          <input name="Email" id="email" placeholder='Email' type="email" required className='block w-full px-3 py-2 border-black border-2 rounded' />
        </div>

        <div className='w-full mb-4'>
          <label for="message" className='form-label inline-block mb-2 text-gray-700'>Your message</label>
          <textarea name="email" id="email" cols="30" rows="10" className='block w-full px-3 py-2 border-black border-2' />
        </div>
        <div>
        
        <button type="button" class="mb-2 w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Submit</button>
       </div>

      </form>
      </div>

    </div>

    </section>
  )
}

export default Contact