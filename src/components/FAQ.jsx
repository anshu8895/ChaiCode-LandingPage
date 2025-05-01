import { useState } from 'react'

const FAQ = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0); // First FAQ is open by default

  const faqItems = [
    {
      question: "How are ChaiCode cohorts different from other online courses?",
      answer: "ChaiCode cohorts offer structured, time-bound learning with real industry experts, peer collaboration through coding hostels, bounty programs for practical experience, and personalized feedback - creating a comprehensive learning environment unlike typical self-paced courses."
    },
    {
      question: "Do I need prior coding experience to join a cohort?",
      answer: "While some basic understanding helps, many of our cohorts are designed for beginners. Each program clearly mentions prerequisites. Our Web Development and Coding Hero cohorts are specifically crafted for those starting from zero."
    },
    {
      question: "What happens if I miss a live session?",
      answer: "All live sessions are recorded and made available in your learning dashboard within 24 hours. Additionally, our revision classes help you catch up on important concepts you might have missed."
    },
    {
      question: "How do the coding hostels work?",
      answer: "Coding hostels are virtual collaborative spaces where you connect with peers to solve problems together. They run in scheduled sessions with mentors available for guidance, creating an environment that mimics real workplace collaboration."
    },
    {
      question: "Can I switch between cohorts if I change my mind?",
      answer: "Yes! Pro members can switch between cohorts anytime. Basic members can request one cohort change per subscription period, subject to availability."
    },
    {
      question: "How do I earn rewards through the bounty program?",
      answer: "You can select bounty projects with clear reward structures. Complete the project according to requirements, submit for review, and upon approval, you'll receive the specified rewards ranging from certificates to tech gadgets."
    },
  ];

  return (
    <section className="bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked <span className="text-yellow-500">Questions</span></h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about our cohort-based learning experience
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
                className="flex justify-between items-center w-full p-5 bg-gray-900 hover:bg-gray-700 rounded-lg text-left transition duration-150 ease-in-out"
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <svg
                  className={`h-6 w-6 transform ${openFaqIndex === index ? 'rotate-180' : 'rotate-0'} transition-transform duration-200`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaqIndex === index && (
                <div className="bg-gray-700 p-5 rounded-b-lg mt-[-5px]">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-xl text-gray-300 mb-6">Still have questions?</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 rounded-md text-lg transition">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  )
}

export default FAQ