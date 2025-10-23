import React from 'react'
import ContactUsBreadcrumb from './ContactUsBreadcrumb/ContactUsBreadcrumb'
import ContactUsContent from './ContactUsContent/ContactUsContent'

const ContactUs = () => {
  return (
    <div className='max-w-[96%] w-full mx-auto my-8'>
      <ContactUsBreadcrumb />
      <ContactUsContent />
    </div>
  )
}

export default ContactUs