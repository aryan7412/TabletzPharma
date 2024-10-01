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
          question="How can I join SWITCH?"
          answer="There is a recruitment process for joining SWITCH. A google form will be shared in the respective groups regarding applying for the specific roles. After which, the candidates will be called for an interview."
        />
        <Accordion
          question="What types of activities does SWITCH organize?"
          answer="We organize a variety of activities including workshops, hackathons, guest lectures, tech talks, and project collaborations. We also for networking."
        />
        <Accordion
          question="Can non-members attend SWITCH events?"
          answer="All the events organised by SWITCH is open for all. Anyone who will be interested in the event can attend and participate."
        />
        <Accordion
          question="Who can I contact for more information?"
          answer="For more information, you can contact our secretary Snigdha Mohapatra and Sayeda Mahenoor  whose contact number will be given in every event."
        />
        <Accordion
          question="How can I stay updated on SWITCH activities?"
          answer="You can stay updated by following us on social media like LinkedIn and Instagram or checking our official website. We regularly post updates and announcements through these channels."
        />
      </div>
    </>
  );
};

export default FAQ;