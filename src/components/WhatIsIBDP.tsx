import { BookOpen, Lightbulb, Users, Pen } from 'lucide-react';

export default function WhatIsIBDP() {
  const subjectGroups = [
    'Language and Literature',
    'Language Acquisition',
    'Individuals and Societies',
    'Sciences',
    'Mathematics',
    'The Arts',
  ];

  const coreElements = [
    {
      icon: Lightbulb,
      title: 'Theory of Knowledge (TOK)',
      description: 'Critical thinking and questioning the nature of knowledge',
    },
    {
      icon: Pen,
      title: 'Extended Essay (EE)',
      description: '4,000-word independent research project',
    },
    {
      icon: Users,
      title: 'Creativity, Activity, Service (CAS)',
      description: 'Experiential learning through real-world activities',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            What is the IB Diploma Programme (IBDP)?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            The International Baccalaureate Diploma Programme (IBDP) is a rigorous two-year
            pre-university curriculum recognized globally for developing well-rounded, critical thinkers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-8 md:p-10 border border-sky-200">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-10 h-10 text-sky-600" />
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                Programme Structure
              </h3>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The <strong>IB curriculum</strong> is designed to develop students who are:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Internationally minded and culturally aware</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Critical and creative thinkers</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Prepared for top universities worldwide</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Balanced in academic and personal development</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 md:p-10 border border-orange-200">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Six Subject Groups
            </h3>
            <p className="text-gray-700 mb-6">
              Students study <strong>six subjects</strong> — three at Higher Level (HL) and three at Standard Level (SL):
            </p>
            <div className="space-y-3">
              {subjectGroups.map((subject, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <span className="font-semibold text-gray-800">{subject}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-4xl font-bold mb-8 text-center">
            The Core: What Makes IBDP Unique
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {coreElements.map((element, index) => {
              const Icon = element.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-sky-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-9 h-9 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{element.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{element.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 bg-sky-50 rounded-2xl p-8 border-l-4 border-sky-600">
          <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
            Why IB Diploma in Mumbai at Ascend?
          </h4>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ascend International School offers the <strong>IBDP in India</strong> with world-class
            facilities, experienced IB-trained faculty, and personalized mentorship. Our campus in
            Mumbai provides students with an ideal environment to excel in the <strong>international
            baccalaureate curriculum</strong> while staying connected to their roots.
          </p>
          <ul className="grid md:grid-cols-2 gap-3">
            <li className="flex items-start gap-2">
              <span className="text-sky-600 font-bold">✓</span>
              <span className="text-gray-700">Small class sizes (max 15 students)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-600 font-bold">✓</span>
              <span className="text-gray-700">Dedicated university counseling</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-600 font-bold">✓</span>
              <span className="text-gray-700">State-of-the-art labs and libraries</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-600 font-bold">✓</span>
              <span className="text-gray-700">Strong CAS programme integration</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
