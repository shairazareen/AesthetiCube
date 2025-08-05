// src/pages/FAQ.jsx
import React, { useState } from 'react';
import { FaBrain } from 'react-icons/fa';
import { Transition } from '@headlessui/react';

const faqData = [
  { question: 'How do I place an order?', answer: 'To place an order, browse the products, add them to your cart, and proceed to checkout.' },
  { question: 'What payment methods do you accept?', answer: 'We accept credit/debit cards, mobile banking, and cash on delivery.' },
  { question: 'How long does delivery take?', answer: 'Delivery typically takes 3–5 business days depending on your location.' },
  { question: 'Can I return or exchange a product?', answer: 'Yes, you can return or exchange products within 7 days of delivery.' },
  { question: 'What if I receive a damaged or wrong item?', answer: 'Please contact customer support immediately and we will assist you with a return or replacement.' },
  { question: 'Do you deliver outside Dhaka?', answer: 'Yes, we deliver nationwide through our courier partners.' },
  { question: 'Can I check the product before paying?', answer: 'Unfortunately, checking before payment is not available for home delivery.' },
  { question: 'How do I contact customer support?', answer: 'You can contact us via email, live chat, or our hotline number listed on the Contact page.' },
  { question: 'Do you restock sold-out items?', answer: 'We frequently restock popular items. You can subscribe for notifications on the product page.' },
  { question: 'Are your sizes standard?', answer: 'Yes, our sizes follow standard measurements. Please refer to the size guide on each product page.' }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
        <div className='pt-[190px]'>
    <div className="min-h-screen bg-gray-50 px-4 py-12 pb-25 md:px-20">
      <h1 className="text-4xl font-bold text-center mb-8">FAQ</h1>

      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-2 text-lg font-semibold mb-6">
          <FaBrain className="text-pink-500 text-2xl" />
          <span>Frequently Asked Questions (FAQs)</span>
        </div>

        <div className=" border rounded-md border-gray-300 divide-y divide-gray-300">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer hover:bg-gray-100 transition-all"
              onClick={() => toggleAnswer(index)}
            >
              <div className="px-6 py-4 font-medium">
                {index + 1}. {item.question}
              </div>
              <Transition
                show={openIndex === index}
                enter="transition duration-600 ease-out"
                enterFrom="opacity-0 max-h-0"
                enterTo="opacity-100 max-h-40"
                leave="transition duration-200 ease-in"
                leaveFrom="opacity-100 max-h-40"
                leaveTo="opacity-0 max-h-0"
              >
                <div className="px-6 pb-4 text-gray-600 text-sm overflow-hidden">
                  {item.answer}
                </div>
              </Transition>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default FAQ;
