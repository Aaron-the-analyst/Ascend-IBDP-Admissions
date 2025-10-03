import { FileText, Users, Award, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Submit Application Form',
    description: 'Complete our online application with required documents',
    number: '01',
  },
  {
    icon: Users,
    title: 'Assessment & Interview',
    description: 'Attend entrance assessment and personal interview',
    number: '02',
  },
  {
    icon: Award,
    title: 'Offer of Admission',
    description: 'Receive admission decision and scholarship results',
    number: '03',
  },
];

interface AdmissionsProcessProps {
  onApplyClick: () => void;
}

export default function AdmissionsProcess({ onApplyClick }: AdmissionsProcessProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-sky-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Admissions Process Timeline
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Your journey to becoming an Ascend scholar starts here
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="absolute -top-6 left-8">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="absolute top-4 right-4 text-6xl font-bold text-sky-100">
                {step.number}
              </div>

              <div className="mt-8">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-sky-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onApplyClick}
            className="group bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-full text-xl font-bold transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-3"
          >
            Start Your Application
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
