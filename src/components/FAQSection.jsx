import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full px-6 py-5 text-left flex justify-between items-start focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-base sm:text-lg font-medium text-gray-900 pr-8 group-hover:text-gray-600 transition-colors">{question}</span>
        <span className={`transform transition-transform duration-200 mt-1 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className="px-6 pb-5 text-sm sm:text-base text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What is Foxicon Academy?",
      answer: "Foxicon Academy is an ed-tech platform that provides hands-on bootcamps and online courses to help learners of all levels master coding and technology skills."
    },
    {
      question: "Who can enroll in your courses?",
      answer: "Anyone interested in learning coding or technology can enroll—students, working professionals, or hobbyists. No prior experience is required for beginner courses."
    },
    {
      question: "What types of courses do you offer?",
      answer: "We offer live and self-paced bootcamps, as well as online courses covering programming, web development, data science, and related tech topics."
    },
    {
      question: "How are your bootcamps different from regular courses?",
      answer: "Bootcamps are intensive, mentor-led programs designed to teach job-ready skills in a short time through real-world projects, collaboration, and hands-on guidance."
    },
    {
      question: "Do I get a certificate after completing a course or bootcamp?",
      answer: "Yes, a certificate of completion will be awarded once you finish a course or bootcamp, which can be added to your resume or LinkedIn profile."
    },
    {
      question: "What support do you provide to learners?",
      answer: "Our instructors and mentors are available to answer questions, provide feedback on assignments, and guide you throughout your learning journey."
    },
    {
      question: "What is the mode of instruction for courses?",
      answer: "Courses and bootcamps are offered online and accessible from anywhere, with options for live sessions and recorded content."
    },
    {
      question: "How do I enroll in a course or bootcamp?",
      answer: "Simply register on our website, choose your desired course or bootcamp, and follow the enrollment steps provided."
    },
    {
      question: "What payment options are available?",
      answer: "We accept payments via credit/debit cards, net banking, and other popular online payment methods."
    },
    {
      question: "Can I get a refund if I am not satisfied?",
      answer: "Please refer to our refund policy on the website or contact our support team for more details regarding refunds and cancellations."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-purple-600">Questions</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our platform and courses
          </p>
        </div>

        {/* FAQ Items */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        {/* Support Note */}
        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-sm sm:text-base text-gray-600">
            Still have questions?{' '}
            <a href="/contact" className="text-purple-600 font-medium hover:text-purple-700 transition-colors">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
