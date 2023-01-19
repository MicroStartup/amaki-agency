import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { images } from '../../constants';
import { workData } from '../../data';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';




const Home = () => {

  const carousel = [
    {
      url: images.healthcare,
    },
    {
      url: images.healthcare1,
    },
    {
      url: images.healthcare2,
    },

    {
      url: images.healthcare3,
    },
    {
      url: images.healthcare4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    const firstImage = currentIndex === 0;
    const newIndex = firstImage ? carousel.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const next = () => {
    const lastImage = currentIndex === carousel.length - 1;
    const newIndex = lastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
    <section className='py-20'>

    <div className='max-w-[1400px] h-[600px] m-auto relative group mb-6'>
      <div
        style={{ backgroundImage: `url(${carousel[currentIndex].url})` }}
        className='w-full h-[550px] bg-center bg-cover duration-500'
      ></div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prev} size={30} />
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={next} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {carousel.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>

      <div className='mt-10 lg:mx-10 gap-8  flex flex-col md:flex-row items-center'>
          <div className='md:flex-1 md:order-2'>
          
            <div className='flex drop-shadow-[10px_-10px_0_rgba(0,0,0,1)]
              border-black'>
              <img src={images.healthcare} width='950' height='732' alt="Eunice helthcare"/>

            </div>
          </div>


          <div className='mx-10 md:flex-1'>  
            <h1 className='text-2xl lg:text-2xl xl:text-7xl font-bold mb-4'>
              Amaki Agency<span className='text-blue-400'>.</span><br/>
              <span className='text-violet-900'></span>
            </h1>

            <p className='text-lg max-w-xl mb-6'>
            placement agreements and patient safety needs require strict 
            compliance with health screening, background checks, 
            sexual misconduct training and drug testing requirements.
            </p>


            <div className='flex items-baseline gap-4 text-[20px]'>
              <HashLink to='#work' className='px-6 py-4 rounded-full
              bg-sky-500 hover:bg-blue-700 ease-in-out duration-75 text-white'> 
              See our Work
              </HashLink>

              <Link to='/contact' className='
                px-6 py-4 rounderd-md text-black flex gap-2
              
              '>
                Connect with us
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
               </svg>

              </Link>
            </div>
          </div>

      </div>
    </section>
  </>
  )
}

export default Home