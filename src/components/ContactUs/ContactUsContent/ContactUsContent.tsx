import React from 'react'
import RightSide from './RightSide/RightSide'
import ContactForm from './ContactForm'
import { ContactUsFetch } from '@/core/api/ContactUs/ContactUs'

export interface IContactResponse{
  error?:string;
  success?: boolean
}

const ContactUsContent = () => {
  return (
    <div className='max-w-[100%] w-full flex flex-col lg:flex-row mt-20'>
        <div className='lg:max-w-[60%] w-full'>
        <RightSide />
        </div>
        <div className='lg:max-w-[40%] lg:mt-0 mt-10 w-full'>
            <ContactForm action={ContactUsFetch} />
        </div>
    </div>
  )
}

export default ContactUsContent