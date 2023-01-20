import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { images } from '../../constants';

const About = () => {
  return (
  <>
  <section className='text-black py-28 bg-center bg-cover h-96'
    style={{ backgroundImage: `url(${images.healthcare6})` }}>
  </section>
  <section className='py-19 lg:py-12 lg:px-10'>
    <div className='lg:flex-1 mx-2'>  
      <h1 className='text-2xl lg:text-[45px] font-bold leading-snug text-center'>
        About Our Company
      </h1>
      <p className='text-lg mb-6'>
        Amaki Agency Healthcare provides high quality homecare, also known as domiciliary care and support to clients living
        in their own homes. Our aim is to make your homecare experience not just better, but excellent! We are registered, and 
        licensed by the Care Quality Commission (CQC) to provide homecare, live-in care and personal care services to our
        communities. We provide temporary, contract and permanent staff. We provide Excellent Standards of Care, Management and Support that meet the needs of           our clients while ensuring that their dignity and self-Respect are met. Our clients trust us to place the right staff in the right roles with many requests coming at short notice. Growing reputation has been built by the professionalism and work ethic of our staffs.
        A key part of our homecare and support service is to get to know the unique qualities of each customer. We want to know about your interests and hobbies and the experiences that light up your life. This is the reason why Amaki Agency healthcare offer a free, initial homecare assessment in order to assess your needs and develop care plans that is individualised and responsive to you needs.
      </p>
    </div>
  </section>
  <section className='py-19 lg:py-12 bg-[#f8f9fa]'>
    <div className='lg:flex-1 mx-2'>
      <h2 className='text-2xl lg:text-[45px] font-bold leading-snug text-center'>
        Our Career
      </h2>
      <p className='text-lg mb-6 lg:px-10'>
        Amaki Agency Healthcare employ competent, skilled, caring, and well-trained care staff who are responsive to the needs of our service users, their families, and the communities we serve. Our qualified staff include health and social care assistants, support workers and healthcare assistants. We also supply highly qualified healthcare professionals to provide personalized care services to private hospitals, private sectors,
        nursing homes, residential homes and learning disability homes. To meet these demands for our clients we supply highly trained healthcare assistants, support workers who are CRB/DBS checked and highly experienced in their jobs. We spend heavily on screening and vetting for our staff, you can count on us for full compliance in supplying you with well-vetted and screened staff to do the job you want.!😎
      </p>
    </div>
  </section>
  <section className='flex flex-col pt-16'>
    <div className='lg:flex-1'>
      <h2 className='text-2xl lg:text-[45px] font-bold m-6 text-center'>
        What We Believe
      </h2>
    </div>
    <div className='text-lg grid md:grid-cols-3 gap-8 m-10'>
      <div className='text-center bg-white border-black border-2 p-4'>
        <h3 className='font-bold text-xl text-center p-4'>
          Continuous Improvement
        </h3>
        <p className='text-lg text-center p-4'>
          We make sure that we fulfil all staffing requests. 
          We also regularly evaluate staff performanceto ensure quality standards.
        </p>
      </div>
      <div className='text-center bg-white border-black border-2 p-4'
        >
        <h3 className='font-bold text-xl text-center p-4'>
          Respect
        </h3>
        <p className='text-lg text-center p-4'>
          The service will encourage a feedback policy from client and families 
          of client to ensure the dignity and respect of service users are met,
        </p>
      </div>
      <div className='text-center bg-white border-black border-2 p-4'
      >
        <h3 className='font-bold text-xl text-center p-4'>
          Customer Focus
        </h3>
        <p className='text-lg text-center p-4'>
          Deliver the best talent and insights to help healthcare organisations optimise their workforce,
        </p>
      </div>
     </div>
  </section>

  </>
  )
}

export default About;
