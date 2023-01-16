import React from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { images } from '../../constants';
import { serviceData } from '../../serviceData';
import ServiceItem from './ServiceItem';



export const points = [
  {
    title: "Keep your home tidy and clean",
    desc: "help with domestic tasks like washing and ironing."
  },
  {
    title: "Keep connected with friends",
    desc: "meet friends and family, go to school, college or clubs, pursue a favourite hobby."
  },
  {
    title: "Keep fit and healthy",
    desc: "attend medical appointments, eat well or go to a fitness centre."
  },
  {
    title: "Stay independent",
    desc: "take a shopping trip to town or pay bills, manage money."
  },
]



const Services = () => {
  return (
    <>
      <div className="items-center justify-center w-full border-y-2 border-black flex flex-col space-y-14 lg:py-24 py-36">
      <h1 className="2xl:text-8xl lg:text-6xl text-6xl text-center">
      Services We offer
      </h1>
      <h1 className="lg:text-2xl text-[20px] lg:mx-16 mx-4 lg:p-12 lg:max-w-1/2 lg:w-[60%] text-center leading-snug">
      Listed below are most of the services that we offer, many of which will be changed to suit your personal needs. Our shortest care visit is 30 minutes and we also provide 45 minute and 60 minute visits. Longer visits are charged at pro rata to the hourly rate.
      </h1>
      <div className="text-xl py-4 px-4">
        <HashLink to='#more' className='px-6 py-4 rounded-full
             bg-sky-500 hover:bg-blue-700 ease-in-out duration-75 text-white'> 
              See our Work
        </HashLink>
    
      </div>
    </div>

    <div id="more" className="h-full w-full items-start justify-start border-b-2 border-black">
     <div className="grid grid-cols-1 xl:grid-cols-3 place-items-start w-full">
        {serviceData.map((item) => (
          <ServiceItem key={item.id} item={item} />
        ))}
      </div>
    </div>

    <div  className="items-center justify-center flex-col-1 lg:flex border-b border-[#e9ebee]">

      <div  className="items-start justify-center lg:w-[70%] py-12 px-6 lg:px-2 flex flex-col space-y-6">
        <h1 className="text-2xl font-semibold px-12">Personal Care</h1>
        <p className="text-[18px] leading-snug px-12">
        Help with getting out of bed, washing, bathing or showering, dressed in the morning and at night. Managing continence and / or emptying 
commod, changing of soiled linen, prompting to take medication.
        </p>
      </div>
    </div>

    <div className="items-center justify-center flex-col-1 lg:flex border-b border-[#e9ebee]">
      <div className="items-start justify-center lg:w-[70%] py-12 px-6 lg:px-2 flex flex-col space-y-6">
        <h1 className="text-2xl font-semibold px-12">Live In Care</h1>
        <p className="text-[18px] leading-snug px-12">
        Our live-in care service offers the assurance of 24 hour care and support in the comfort of your own home. Your personalised care needs are considered every step of the way, this means you stay in control of your care and support at all times-day or night. Count on us to provide you with experienced and compassionate staff who treat you with dignity and respect. The registered care manager will do regular follow-up visits to check you are happy with our service.
        </p>
      </div>
    </div>

    <div className="items-center justify-center flex-col-1 lg:flex border-b border-[#e9ebee]">
      <div className="items-start justify-center lg:w-[70%] py-12 px-6 lg:px-2 flex flex-col space-y-6">
        <h1 className="text-2xl font-semibold px-12">Respite Care</h1>
        <p className="text-[18px] leading-snug px-12">
        Amaki-Agency Healthcare understands that short breaks are of great importance to people who give care to their loved ones. It offers the individual the chance to meet new people, do something different from their normal routine. This is the reason why Eunistar Healthcare provides respite care and support for people with complex needs in the comfort of their own homes. Our services range from a sitting service for a couple of hours to 24 hour live-in care. We offer personalised care and support, so you and your loved one have the service that you want, in the way you both want it. Our compassionate and reliable staff are fully trained, so that you have the peace of mind you need to take that much needed break-out. 
Contact our office today on 01634926177 to discuss how we can create a tailored service to meet your needs.
        </p>
      </div>
    </div>

    <div className="items-center justify-center lg:flex flex-col-1 border-b border-[#e9ebee]">
      <div className="items-start justify-center lg:w-[70%] py-12 px-6 lg:px-2 flex flex-col space-y-6">
        <h1 className="text-2xl font-semibold px-12">Learning Disability Care/Social Care</h1>
        <p className="text-[18px] leading-snug px-12">
          Amaki-Agency Healthcare believes that people with learning disabilities are no exception in terms of enjoying a life that has purpose and meaning. This is why our serviHeadce supports you to live the life you want. Our aim is to help you achieve your personal goals. We develop a personalised support plan with you, so you can receive your care in the community where you live. Choosing Eunistar Healthcare means receiving support and care to:
        </p>
        <div className="px-12 space-y-2 font-medium text-xl">
        <ul className='text-lg grid md:grid-cols-4 gap-2 mb-28'>
          {points.map((point, index) => (
          <li key={index} className='flex flex-col text-center bg-white border-black border-2 p-4'>
          <span className='font-bold text-[20px]'>{point.title}</span>
          <span>{point.desc}</span>
          </li>
          ))}
         </ul>
        </div>
      </div>
    </div>
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
            <p className='text-lg text-center'>Deliver the best talent and insights to help healthcare 
            organisations optimise their workforce
            </p>
        </div>
      </div>
    </section>

    </>
  )
}

export default Services