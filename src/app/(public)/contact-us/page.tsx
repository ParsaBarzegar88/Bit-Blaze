import ContactUs from '@/components/ContactUs/ContactUs';
import ContactForm from '@/components/ContactUs/ContactUsContent/ContactForm';
import { ContactUsFetch } from '@/core/api/ContactUs/ContactUs';
import { Metadata } from 'next';
import React from 'react'
import { ToastContainer } from 'react-toastify';
export const metadata: Metadata = {
  title: "تماس با ما",
};

const ContactUsPage = () => {
  return (
    <>
      <ContactUs />
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
    </>
  )
}

export default ContactUsPage