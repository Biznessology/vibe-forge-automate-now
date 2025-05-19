
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqItems = [
    {
      question: "Who can participate in the Vibe-A-Thon?",
      answer: "The hackathon is open to all WonderBotz internal employees. No formal prerequisites—just passion for AI & automation. Teams should consist of 2-4 members."
    },
    {
      question: "What should be included in the one-pager submission?",
      answer: "Your one-pager should outline the problem statement & target users, proposed AI/agentic approach, and a high-level architecture. Keep it concise and focused on communicating the core idea and potential impact."
    },
    {
      question: "Do we need to bring our own equipment?",
      answer: "Yes, teams should bring their own laptops. The venue will provide power, Wi-Fi, whiteboards, and other collaborative resources. Some pre-configured environments may be available."
    },
    {
      question: "What resources will be available during the hackathon?",
      answer: "We'll provide access to mentors, free trials of cloud/AI platforms, development sandboxes, and collaborative spaces. Food and beverages will also be available throughout the 24-hour event."
    },
    {
      question: "Will there be mentors available during the event?",
      answer: "Yes, we'll have AI engineers, data scientists, and product managers available for drop-in or scheduled mentoring slots to help guide your team."
    },
    {
      question: "What happens to our projects after the hackathon?",
      answer: "Top projects may be considered for further incubation into POCs or internal tools. All projects will be showcased internally, with the winning team invited to present at a company all-hands meeting."
    },
  ];

  return (
    <section id="faq" className="scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-purple-900">Frequently Asked Questions</h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium text-purple-900 hover:text-purple-700">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-10 text-center">
          <p className="text-gray-700">
            Have more questions? Contact the organizing team at{" "}
            <a href="mailto:hackathon@wonderbotz.com" className="text-purple-700 hover:text-purple-900 underline">
              hackathon@wonderbotz.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
