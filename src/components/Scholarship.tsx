import { Award, ArrowRight } from 'lucide-react';

interface ScholarshipProps {
  onApplyClick: () => void;
}

export default function Scholarship({ onApplyClick }: ScholarshipProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-sky-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-6 font-semibold">
              <Award className="w-5 h-5" />
              Limited Time Opportunity
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Merit Scholarships –<br />
              <span className="text-sky-600">Empowering Future Leaders</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              Academically bright students with financial need can apply for our prestigious scholarship program.
            </p>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg mb-8 border-l-4 border-orange-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    2 Full Scholarships Available
                  </h3>
                  <p className="text-gray-600">
                    For IBDP 2026-27 Academic Year
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-sky-600 mt-1">✓</span>
                  <span>Full tuition coverage for 2 years</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-600 mt-1">✓</span>
                  <span>Merit-based selection process</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-600 mt-1">✓</span>
                  <span>Financial need consideration</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onApplyClick}
              className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-3"
            >
              Apply for Scholarship
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div>
            <img
              src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Student success"
              className="rounded-2xl shadow-2xl w-full h-[500px] md:h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
