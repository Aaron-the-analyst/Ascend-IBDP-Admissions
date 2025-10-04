import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is the IB Diploma Programme?',
      answer: 'The International Baccalaureate Diploma Programme (IBDP) is a rigorous two-year pre-university curriculum for students aged 16-19 (Grades 11-12). It is recognized globally and prepares students for success in higher education and beyond. The programme emphasizes critical thinking, intercultural understanding, and exposure to a variety of subjects.',
    },
    {
      question: 'What is the IB curriculum structure?',
      answer: 'The IB curriculum requires students to study six subjects from different subject groups — three at Higher Level (HL) and three at Standard Level (SL). Additionally, all students complete three core components: Theory of Knowledge (TOK), Extended Essay (EE), and Creativity, Activity, Service (CAS). This comprehensive approach develops well-rounded, internationally-minded students.',
    },
    {
      question: 'Who can apply for the Ascend IBDP Scholarship?',
      answer: 'The scholarship is open to students who have completed Grade 10 with a minimum of 85% aggregate marks. Applicants should demonstrate strong academic performance, particularly in Mathematics and Sciences, along with leadership skills and extracurricular involvement. Indian citizens and residents are eligible to apply.',
    },
    {
      question: 'What is the IB Diploma cost in Mumbai at Ascend?',
      answer: 'The full tuition fee for the two-year IBDP at Ascend ranges from ₹8-12 lakhs, depending on the programme and facilities. However, our merit scholarship covers up to 100% of the tuition fees, significantly reducing the financial burden for deserving students. Additional costs include books, examination fees, and extracurricular activities.',
    },
    {
      question: 'Do I need prior IB experience to apply?',
      answer: 'No prior IB experience is required. Students from CBSE, ICSE, State Boards, or any other curriculum are welcome to apply. Our comprehensive orientation programme and experienced faculty help all students transition smoothly into the IB curriculum. We provide personalized support to ensure every student succeeds.',
    },
    {
      question: 'How does IBDP compare to other curricula in India?',
      answer: 'The IBDP is more internationally focused and emphasizes critical thinking, research, and holistic development compared to CBSE or ICSE. It is highly valued by universities worldwide, especially in the US, UK, Canada, and Europe. The IB curriculum prepares students not just for exams but for university-level independent study and global citizenship.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-10 h-10 text-sky-600" />
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-600">
            Everything you need to know about IBDP and Ascend Scholarships
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl border border-sky-200 overflow-hidden transition-all hover:shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg md:text-xl font-bold text-slate-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-sky-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-sky-600" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Still Have Questions?</h3>
          <p className="text-lg mb-6">Our admissions team is here to help you</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+912212345678"
              className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all"
            >
              Call: +91 2271222000
            </a>
            <a
              href="mailto:admissions@ascendschool.edu.in"
              className="bg-white/10 backdrop-blur text-white px-8 py-3 rounded-full font-bold hover:bg-white/20 transition-all border border-white"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
