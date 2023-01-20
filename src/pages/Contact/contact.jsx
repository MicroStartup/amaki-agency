import React from 'react';
import { socials } from '../../data';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { images } from '../../constants';

const Contact = () => {
  return (

    <section className='py-40 xl:py-15 border-x-2 border-black'>
      <div className='flex rounded hover:rounded-lg px-4 pb-8 pt-2'>
        <img src={images.healthcare9} width='100%' height='532' alt="Amaki-Agency" />
      </div>

      <div className='container mx-auto px-4 grid gap-8 lg:grid-cols-2'>
        <div>
          <h1 className='text-4xl lg:text-5xl xl:text-6xl font-md-bold mb-4'>Stay in touch with us</h1>
          <p className='mb-6 text-z'>
            Call us on +44 7503412033 to arrange to receive our Care
            Service in your own home, giving you support and help that
            can help you remain in your own home for longer rather than entering
            a residential or care home before it is actually needed.
          </p>
          <div className='flex flex-row'>
            <nav className='pt-2'><FaEnvelope /></nav>
            <p className='pl-4 pb-4 mb-4 text-[20px]'>
              hello@email.com
            </p>
          </div>
          <div className='flex flex-row'>
            <nav className='pt-2'><FaPhoneAlt /></nav>
            <p className='pl-4 pb-4 mb-8 text-[20px]'>
              +44 7503412033
            </p>
          </div>
          <div className='md:text-3xl md:font-bold mb-8'>You can find us on</div>

          <div className='mb-8'>

            <ul className='flex gap-6'>
              {socials.map((item, index) => (
                <li key={index}>
                  <a target='_blank' href={item.link} rel='noopener noreferrer'
                    className='py-2 flex flex-col md:flex-row gap-2 items-center justify-center'>
                    <img src={item.icon} alt={item.alt} width='35' height='35' />
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