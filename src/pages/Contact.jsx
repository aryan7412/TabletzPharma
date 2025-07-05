import React from "react";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div>
      {/* Upper Part */}
      <div className="bg-black w-full h-36 flex flex-col items-center justify-center text-white px-2" data-aos="fade-up">
        <h1 className="text-5xl font-extrabold tracking-wide shadow-lg transition-transform duration-300 hover:scale-105">
          Get in Touch
        </h1>
        <p className="mt-2 text-lg font-medium text-gray-300">
          Contact us to improve our services and for any inquiries.
        </p>{" "}
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 py-8" data-aos="fade-up">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0" data-aos="zoom-in">
          <ContactForm />
        </div>
        {/* Right Side */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start" data-aos="zoom-in">
          <div className="w-full h-64 sm:h-80 md:h-96 mt-4 lg:mt-20">
            <iframe
              className="shadow-xl w-full h-full rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59653.8182916184!2d86.04674577713014!3d20.857388138214276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a195bd5f8c0eed5%3A0xe6d5e20fe2eea6c!2sTabletz%20Pharmacy!5e0!3m2!1sen!2sin!4v1728108173192!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <br />
          <address className="text-sm font-semibold mt-4">
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
    </div>
  );
}

export default Contact;
