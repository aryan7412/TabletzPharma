import React from "react";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div>
      {/* Upper Part */}
      <div></div>
      
      <div className="flex justify-between mx-48">
        {/* Left Side */}
        <div className="w-1/2 mt-8">
          <ContactForm />
        </div>
        {/* Right Side */}
        <div className="w-1/2 pl-32">
          <iframe
            className="shadow-xl mt-20"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59653.8182916184!2d86.04674577713014!3d20.857388138214276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a195bd5f8c0eed5%3A0xe6d5e20fe2eea6c!2sTabletz%20Pharmacy!5e0!3m2!1sen!2sin!4v1728108173192!5m2!1sen!2sin"
            width="450"
            height="350"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <br />
          <address className="text-sm font-semibold">
            Tabletz Pharmacy <br />
            Adampur, Byasanagar, <br />
            Odisha 755051
          </address>
          <br />
          <span className="text-sm font-semibold">
            Email:
            <a
              href="mailto:information@tabletzpharma.in"
              className="text-blue-600 underline hover:text-blue-800 transition-colors duration-200 ease-in-out ml-1"
            >
              information@tabletzpharma.in
            </a>
          </span>
          <br />
          <br />
          <span className="text-sm font-semibold">
            Phone:
            <a href="tel:886 666 00555" className="ml-1">
            886 666 00555
            </a>
          </span>
        </div>
      </div>

      {/* Lower Part */}
    </div>
  );
}

export default Contact;
