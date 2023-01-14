import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { images } from '../../constants';

const About = () => {
  return (
  <>
    <section className='py-24 lg:py-36 lg:px-10'>

      <div className='gap-8 flex flex-col lg:flex-row
        items-center
      '>
        <div className='lg:flex-1 lg:order-2'>
    
          <div className='flex rounded hover:rounded-lg'>
            <img src={images.healthcare6} width='950' height='732' alt="Eunice helthcare"/>

          </div>
        </div>


        <div className='lg:flex-1 mx-2'>  
          <h1 className='text-2xl lg:text-[60px] font-bold leading-snug'>
            About Our Company
          </h1>

          <p className='text-lg max-w-xl mb-6'>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue rhoncus purus eget feugiat.
             Curabitur rhoncus, ante volutpat ornare accumsan, felis erat vulputate sem, sed pretium ipsum augue 
             at nibh. Aenean eget ipsum faucibus, congue massa ac, pellentesque felis. Curabitur eget erat eleifend
             augue interdum dapibus. Vivamus ultricies felis ut pharetra volutpat. Nam eget mauris 
             turpis. Integer dapibus rhoncus turpis, eu maximus dui hendrerit at. Sed bibendum orci non porttitor interdum.
          </p>
        </div>
      </div>

    </section>

    <section className='flex items-center'>
      <div className='bg-[#f8f9fa] p-10 w-full flex lg:flex-1 
      md:order-2 px-4 flex-col md:flex-row items-center'
      >
        <div className='pr-24'>
          <h2  className='text-2xl lg:text-[60px] font-bold mb-4'>
            Our Career
          </h2>
          <p className='text-lg max-w-xl mb-6'>
            Smartea is a website for all fans of mathematics. It is a Single
            Page App (SPA) that allows users to: Make simple calculations, Read
            a random math-related quote. Built with React and Redux. The app
            allows users to perform basic arithmetic operations, including
            addition, subtraction, division, and multiplication, and chaining
            and nesting of operations (as well as the +/- button which changes a
            negative number positive and vice-versa). Now let&apos;s go do some
            MATHS!😎
          </p>
        </div>
        <div className='flex'>
            <img src={images.healthcare7} alt="Eunice helthcare"/>

          </div>
      </div>
    </section>

    <section className='flex flex-col pt-16'>
      <div className='lg:flex-1'>
        <h2 className='text-2xl lg:text-[60px] font-bold m-6'>What We Believe
        </h2>
      </div>

      <div className='text-lg grid md:grid-cols-3 gap-8 m-10'>
        
        <div className='text-center bg-white border-black border-2 p-4'>
          <h3 className='font-bold text-xl text-center p-4'>Kindness and Compassion</h3>
          <p className='text-lg text-center p-4'>Maecenas blandit risus urna, et imperdiet erat consectetur ac. Vivamus eget augue 
            dictum nisl facilisis sodales in et nisl. Orci varius natoque penatibus et magnis dis parturient montes,</p>
        </div>

        <div className='text-center bg-white border-black border-2 p-4'
        >
          <h3 className='font-bold text-xl text-center p-4'>Respect</h3>
          <p className='text-lg text-center p-4'>Maecenas blandit risus urna, et imperdiet erat consectetur ac. Vivamus eget augue 
            dictum nisl facilisis sodales in et nisl. Orci varius natoque penatibus et magnis dis parturient montes,</p>
        </div>

        <div className='text-center bg-white border-black border-2 p-4'
        >
          <h3 className='font-bold text-xl text-center p-4'>Highest Quality of Care</h3>
          <p className='text-lg text-center p-4'>Maecenas blandit risus urna, et imperdiet erat consectetur ac. Vivamus eget augue 
            dictum nisl facilisis sodales in et nisl. Orci varius natoque penatibus et magnis dis parturient montes,</p>
        </div>


      </div>
    </section>

    <section  className='flex flex-col'>
      <div className='grid-cols-3 gap-5 flex flex-wrap text-black bg-[#f8f9fa] py-12'>
        <div className='lg:flex-1 md:flex-1 container md:border-r-4 lg:border-r-4'>      

            <img className='mx-auto' src={images.healthcare8} alt='Raddy' width='' height=''/>

        </div>
        <div className=' lg:flex-1 md:flex-1 md:order-2 lg:order-2 container flex-col lg:flex-row px-5'>
            <h3 className='font-bold text-xl text-center'>A Trusted And Accredited Consultante</h3>
            <p className='text-lg text-center'>Quisque metus magna, interdum quis purus eget, 
            finibus ornare tellus. Pellentesque vulputate mauris eget porttitor et nulla.
             Nam fermentum aliquam ligula auctor faucibus</p>
        </div>
        <div className='px-5 lg:flex-1 md:flex-1 md:order-2 lg:order-2 container flex-col lg:flex-row'>
            <p className='text-lg text-center'>
            Lorem ipsum dolor sit amet, consectetur
             adipiscing elit. Vivamus ut est et enim posuere facilisis commodo nec massa
            </p>
        </div>
      </div>
    </section>

  </>
  )
}

export default About