import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-90' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to CareStack Your trusted partner in managing your healthcare journey. We bridge the gap between patients and quality care, making it simpler than ever to find, book, and manage your medical appointments online. </p>

          <p>At CareStack, we believe that healthcare should be accessible, transparent, and patient-centric. Our platform is designed to take the stress out of scheduling, so you can focus on what matters most—your health and well-being.
          </p>
          <b className='text-gray-800'>Our vision</b>
          <p>To create a world where quality healthcare is just a click away for everyone. We aim to empower patients with the tools they need to make informed decisions about their care while providing doctors with a streamlined way to reach those who need them most.</p>
        </div>
      </div>


      <div className='text-xl my-4'>
        <p>WHY <span className='text-semibold text-gray-700'>CHOOSE US</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white  transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits perfectly into your busy lifestyle.</p>
        </div>
        <div  className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white  transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Access a vast network of trusted, board-certified healthcare professionals in your local area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white  transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Tailored health recommendations and smart reminders to help you stay on top of your wellness goals.</p>
        </div>
      </div>
    </div>
  )
}

export default About
