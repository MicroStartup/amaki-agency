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
          Amaki Agency Healthcare provides high quality homecare, also known as domiciliary care and support to clients living
           in their own homes. Our aim is to make your homecare experience not just better, but excellent! We are registered, and 
           licensed by the Care Quality Commission (CQC) to provide homecare, live-in care and personal care services to our
            communities. We provide temporary, contract and permanent staff. We provide Excellent Standards of Care, Management and Support that meet the needs of           our clients while ensuring that their dignity and self-Respect are met. Our clients trust us to place the right staff in the right roles with many requests coming at short notice. Growing reputation has been built by the professionalism and work ethic of our staffs.
A key part of our homecare and support service is to get to know the unique qualities of each customer. We want to know about your interests and hobbies and the experiences that light up your life. This is the reason why Amaki Agency healthcare offer a free, initial homecare assessment in order to assess your needs and develop care plans that is individualised and responsive to you needs.
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
          Amaki Agency Healthcare employ competent, skilled, caring, and well-trained 
          care staff who are responsive to the needs of our service users, their families,
           and the communities we serve. Our qualified staff include health and social care
            assistants, support workers and healthcare assistants.
We also supply highly qualified healthcare professionals to provide personalized care services to private hospitals, private sectors, nursing homes, residential homes and learning disability homes. To meet these demands for our clients we supply highly trained healthcare assistants, support workers who are CRB/DBS checked and highly experienced in their jobs. We spend heavily on screening and vetting for our staff, you can count on us for full compliance in 
supplying you with well-vetted and screened staff to do the job you want.!😎
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
          <h3 className='font-bold text-xl text-center p-4'>Continuous Improvement</h3>
          <p className='text-lg text-center p-4'>We make sure that we fulfil all staffing requests. 
          We also regularly evaluate staff performanceto ensure quality standards.,</p>
        </div>

        <div className='text-center bg-white border-black border-2 p-4'
        >
          <h3 className='font-bold text-xl text-center p-4'>Respect</h3>
          <p className='text-lg text-center p-4'>The service will encourage a feedback policy from client and families 
          of client to ensure the dignity and respect of service users are met,</p>
        </div>

        <div className='text-center bg-white border-black border-2 p-4'
        >
          <h3 className='font-bold text-xl text-center p-4'>Customer Focus</h3>
          <p className='text-lg text-center p-4'>Deliver the best talent and insights to help healthcare organisations optimise 
            their workforce,</p>
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
            <p className='text-lg text-center'>Our staffs are passionate and able to give your clients the very
             best service Specialists in their field, be that hospital care, residential care or other fields</p>
        </div>
        <div className='px-5 lg:flex-1 md:flex-1 md:order-2 lg:order-2 container flex-col lg:flex-row'>
            <p className='text-lg text-center'>
            Deliver the best talent and insights to help healthcare organisations optimise 
            their workforce
            </p>
        </div>
      </div>
    </section>

  </>
  )
}

export default About