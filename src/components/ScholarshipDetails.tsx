import { CheckCircle, Calendar, Download, AlertCircle } from 'lucide-react';

interface ScholarshipDetailsProps {
  onApplyClick: () => void;
  onDownloadBrochure: () => void;
}

export default function ScholarshipDetails({ onApplyClick, onDownloadBrochure }: ScholarshipDetailsProps) {
  const eligibility = [
    'Completed Grade 10 with minimum 85% aggregate',
    'Strong academic record in Mathematics and Sciences',
    'Demonstrated leadership and extracurricular involvement',
    'Proficiency in English (written and spoken)',
    'Indian citizen or resident',
  ];

  const benefits = [
    'Up to 75% tuition fee waiver for entire IBDP (Grades 11-12)',
    'Free study materials and textbooks',
    'Priority access to university counseling',
    'Mentorship from IB alumni network',
    'Certificate of Merit Recognition',
  ];

  const steps = [
    {
      number: '01',
      title: 'Submit Application',
      description: 'Complete online form with academic records and personal statement',
      deadline: 'By October 31, 2025',
    },
    {
      number: '02',
      title: 'Entrance Assessment',
      description: 'Aptitude test covering Mathematics, English, and Logical Reasoning',
      deadline: 'November, 2025',
    },
    {
      number: '03',
      title: 'Personal Interview',
      description: 'Meet with admissions panel to discuss goals and aspirations',
      deadline: 'November, 2025',
    },
    {
      number: '04',
      title: 'Results Announcement',
      description: 'Scholarship recipients notified via email and phone',
      deadline: 'December, 2025',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
            ⚡ Limited Time Offer
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Ascend IBDP Scholarships 2025
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Only <strong className="text-orange-600">2 scholarship seats</strong> available for exceptional students
          </p>
        </div>

        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-3xl p-8 md:p-12 mb-12 text-center shadow-2xl">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertCircle className="w-10 h-10" />
            <h3 className="text-2xl md:text-4xl font-bold">Application Deadline</h3>
          </div>
          <p className="text-3xl md:text-5xl font-bold mb-2">October 31, 2025</p>
          <p className="text-lg md:text-xl">Don't miss this opportunity — Apply today!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-sky-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                Eligibility Criteria
              </h3>
            </div>
            <ul className="space-y-4">
              {eligibility.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-sky-600" />
                  </div>
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-3xl p-8 md:p-10 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">
                Scholarship Benefits
              </h3>
            </div>
            <ul className="space-y-4">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">
              Application Process
            </h3>
            <p className="text-gray-600 text-lg">
              Follow these 4 simple steps to apply for the scholarship
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-6 border border-sky-200 h-full">
                  <div className="text-5xl font-bold text-sky-200 mb-3">{step.number}</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{step.description}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-orange-600" />
                    <span className="font-semibold text-orange-600">{step.deadline}</span>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-sky-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={onApplyClick}
            className="group bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 rounded-full text-xl font-bold transition-all transform hover:scale-105 shadow-2xl inline-flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            <CheckCircle className="w-6 h-6" />
            Apply for Scholarship Now
          </button>

          <button
            onClick={onDownloadBrochure}
            className="group bg-slate-900 hover:bg-slate-800 text-white px-12 py-6 rounded-full text-xl font-bold transition-all transform hover:scale-105 shadow-2xl inline-flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            <Download className="w-6 h-6" />
            Download Scholarship Brochure
          </button>
        </div>

        <div className="mt-12 bg-sky-50 rounded-2xl p-6 border-l-4 border-sky-600">
          <p className="text-gray-700 text-center">
            <strong className="text-slate-900">Questions about the scholarship?</strong> Contact our admissions team at{' '}
            <a href="tel:+912212345678" className="text-sky-600 font-semibold hover:underline">
              +91 22 1234 5678
            </a>{' '}
            or email{' '}
            <a href="mailto:scholarships@ascendschool.edu.in" className="text-sky-600 font-semibold hover:underline">
              scholarships@ascendschool.edu.in
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
