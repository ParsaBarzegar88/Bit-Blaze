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
    <div className='max-w-[100%] w-full flex flex-col sm:flex-row mt-20'>
        <div className='max-w-[60%] w-full'>
        <RightSide />
        </div>
        <div className='max-w-[40%] w-full'>
            <ContactForm action={ContactUsFetch} />
        </div>
    </div>
  )
}

export default ContactUsContent