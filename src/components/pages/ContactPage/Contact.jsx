import React from "react";
import contactImage from "../../../../public/assets/contact.jpg";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <div className="flex flex-col mx-10 md:flex-row items-stretch md:items-start rounded-md shadow-lg justify-center bg-white m-10 max-w-7xl lg:mx-auto">
      <div className="w-full md:w-1/2">
        <ContactForm />
      </div>
      <div className="h-full">
        <img
          src={contactImage}
          alt="Your Image Description"
          className="object-cover hidden md:block h-[490px]"
        />
      </div>
    </div>
  );
};

export default ContactPage;
