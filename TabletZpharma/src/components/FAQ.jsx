import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <>
      <h1 className="text-center text-black lg:text-4xl text-3xl lg:leading-9 leading-7 font-semibold mb-8">
        FAQ's
      </h1>
      <div className="p-4 w-full max-w-3xl mx-auto rounded-lg">
        <Accordion
          question="What are the discounts?"
          answer="15% off on all medicines and 20% off on purchase of medicines above 999"
        />
        <Accordion
          question="Where is TabletzPharma located"
          answer="Jaraka"
        />
        <Accordion
          question="What are the timings of the store"
          answer="Everyday 8:00 AM to 10:00 PM"
        />
        <Accordion
          question="What are the delivery charges?"
          answer="Orders above 999 are eligible for free delivery"
        />
        <Accordion
          question="What are the timings of the doctor's consultation?"
          answer="Everyday 8:00 AM to 10:00 PM"
        />
      </div>
    </>
  );
};

export default FAQ;