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
          question="Where is TabletzPharma located"
          answer="Jaraka"
        />
      </div>
    </>
  );
};

export default FAQ;