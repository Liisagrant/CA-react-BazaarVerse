import React from "react";
import contactImage from "../../../../public/assets/contact.jpg";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <div className="flex flex-col mx-10 lg:flex-row items-stretch md:items-start rounded-md shadow-lg justify-center bg-white m-10 max-w-7xl lg:mx-auto">
      <div className=" flex justify-center w-full">
        <ContactForm />
      </div>
      <div className="h-full">
        <img
          src={contactImage}
          alt="Your Image Description"
          className="object-cover hidden lg:block h-[600px]"
        />
      </div>
    </div>
  );
};

export default ContactPage;
