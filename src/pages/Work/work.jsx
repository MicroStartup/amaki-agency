import React from 'react';
import { images } from '../../constants';
import { FaMapMarkedAlt, FaUserAlt, FaWallet} from 'react-icons/fa';
import { Link } from 'react-router-dom';


export const points = [
  {
    title: "Flexible working opportunities – full time or part time",
  },
  {
    title: "Utilising your clinical experience working within home environments",
  },
  {
    title: "Working in a wide range of locations with a variety of clients",
  },
  {
    title: "Referral scheme for new joiners",
  },

  {
    title: "Attractive pay rates",
  },
]


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

    <section  className='flex flex-col'>
      <div className='grid-cols-3 gap-5 flex flex-wrap text-black bg-white py-16'>
        <div className=' md:flex-1 
          md:order-2 container flex-col lg:flex-row px-5'>

            <h1 className='text-5xl font-bold mb-4'>Work With Us</h1>
          <p className='text-lg max-w-[630px] mb-16'>
          At Amaki Agency we believe in investing in our team and ensuring that they are supported during their time working with us. We are always looking for experienced, highly skilled, professional nurses and carers to join our team and enhance the service we already provide. We also have great opportunities to join our team working behind the scenes ensuring that the delivery of care is seamless and always to the highest standards.

        </p>
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

    <section className='mdborder-black border-t-2 py-4'>

      <div className="items-center justify-center lg:flex flex-col-1">
      <div className="items-start justify-center lg:w-[70%] py-12 px-6 lg:px-2 flex flex-col space-y-6">
        <h2 className='text-3xl font-bold mb-4'>Join Our Team.</h2>
        <p className='text-lg max-w-[630px] mb-4'>
        At Amaki Agency we value our commitment to our clients just as much as we value the nurses and carers working with us to deliver our exceptional care. We offer flexible agency work that can work alongside your existing schedules or as your full-time position.
  
        </p>

        <p className='text-lg max-w-[630px] mb-4'>
        We operate throughout London and the home counties however we may also have residential work in areas beyond the south east and we have some opportunities in which our client’s require their care team to travel with them.
        </p>

        <p className='text-lg max-w-[630px] mb-16'>
         Many of our clients have medical needs which is why we ensure our nurses and carers have experience in clinical environments so that you will be comfortable supporting our clients to live independently in their homes. We require a minimum of 3 years’ experience to ensure that all of our staff have the skill level required to work with our clients.

        </p>
        
        <br/>
        <h1 className="text-2xl font-semibold px-2">Benefits of working at Amaki Agency</h1>
        <div className="px-2 space-y-2 font-medium text-xl">
        <ul className='text-lg grid md:grid-cols-4 gap-2 mb-28'>
          {points.map((point, index) => (
          <li key={index} className='flex flex-col text-center bg-white border-black border p-4'>
          <span className='font-medium text-[18px]'>{point.title}</span>
          </li>
          ))}
         </ul>
        </div>
      </div>
    </div>

    </section>

    </>
  )
}

export default Work