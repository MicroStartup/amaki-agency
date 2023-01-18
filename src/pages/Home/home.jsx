import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { images } from '../../constants';
import { workData } from '../../data';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Home = () => {

  const slider = [
    {
      link_to_image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
    },
    {
      link_to_image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
      link_to_image: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
    },

    {
      link_to_image: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
    },
    {
      link_to_image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    },
  ];

  return (
    <>
    <section className='py-20 lg:py-36 xl:py-48'>

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

    <section id="work" className='md:grid md:place-items-center px-4 pb-12 border-black border-t-2 bg-sky-500' >
        <div className='text-center py-12'>
            <h1 className='text-2xl lg:text-3xl font-bold mb-4'>
            Meet Your Needs
            </h1>
            <p className='max-w-xl mx-auto text-lg'>
            AHRQ advances excellence in healthcare by producing evidence to make healthcare safer, higher quality, more accessible, equitable, and affordable.
            </p>
        </div>

        <div className=' md:grid lg:grid md:grid-cols-2 lg:grid-cols-2 lg:w-[85%]  item mb-28 '>
          {workData.map((item, index) => (
            <Link to={item.link} key={index} className='ease-in-out duration-75
              hover:translate-y-[-8px] m-2 hover:drop-shadow-[4px_2px_0_rgba(0,0,0,1)]
            '>

            <div className='border border-black overflow-hidden bg-black'>
              <img src={item.thumbnail} alt={item.alt} loading='lazy' width='650' height='400' />
            </div>

            <div className='bg-white border-x-2 border-black border-b-2 p-4 text-lg flex justify-between gap-4 items-center
            '>

              <div>
                <span className='font-bold'>{item.title} </span>
                <span className='text-zinc-400'>&#9679; {item.category}</span>
              </div>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            </Link>
          ))}
        </div>


        <Link to={'/services'} className="flex text-xl gap-4 font-bold justify-center mb-8">View all work
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </Link>

    </section>

    <section  className='flex flex-col'>
      <div className='grid-cols-3 gap-5 flex flex-wrap text-black bg-[#f8f9fa] py-12'>
        <div className='md:flex-1 container md:border-r-4'>      

            <img className='mx-auto' src={images.healthcare8} alt='Raddy' width='' height=''/>

        </div>
        <div className=' md:flex-1 
          md:order-2 container flex-col lg:flex-row px-5'>
            <h3 className='font-bold text-xl text-center'>A Trusted And Accredited Consultante</h3>
            <p className='text-lg text-center'>Our staffs are passionate and able to give your clients the very
             best service Specialists in their field, be that hospital care, residential care or other fields</p>
        </div>
        <div className='px-5 md:flex-1 
          md:order-2 container flex-col lg:flex-row'>
            <p className='text-lg text-center'>
            Deliver the best talent and insights to help healthcare 
            organisations optimise their workforce
            </p>
        </div>
      </div>
    </section>
  </>
  )
}

export default Home