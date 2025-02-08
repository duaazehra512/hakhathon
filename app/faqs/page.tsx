import React from 'react';


export default function FAQ() {
 
  const faqs = [
    { question: "What types of chairs do you offer?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus enum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?" },
    { question: "How can we get in touch with you?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus enum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?" },
    { question: "Do your chairs come with a warranty?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus enum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?" },
    { question: "What will be delivered? And when?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus enum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?" },
    { question: "Can I try a chair before purchasing?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus enum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?" },
        { question: "How do I clean and maintain my Comforty chair?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus enum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?" },
  ];

  return (
    <div className="min-h-screen bg-white md:pl-56 md:pr-36 py-10 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Questions Looks Here</h1>
        <p className="text-gray-500 mb-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-100 shadow-md rounded-lg p-5 flex items-center justify-between hover:shadow-lg transition-shadow duration-200"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-700">{faq.question}</h3>
                <p className="text-sm justify-center text-gray-500 mt-1">{faq.answer}</p>
              </div>
              <button
                aria-label="Toggle FAQ"
                className=" text-gray-900"
              >
                +
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}