import { BookOpen, Lightbulb, Heart, Globe, Languages, Users } from 'lucide-react';

const coreComponents = [
  { name: 'Theory of Knowledge', icon: Lightbulb },
  { name: 'Extended Essay', icon: BookOpen },
  { name: 'CAS Activities', icon: Heart },
];

const subjectGroups = [
  { name: 'Language & Literature', icon: BookOpen },
  { name: 'Language Acquisition', icon: Languages },
  { name: 'Individuals & Societies', icon: Users },
  { name: 'Sciences', icon: Globe },
  { name: 'Mathematics', icon: BookOpen },
  { name: 'The Arts', icon: Heart },
];

export default function ProgrammeOverview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            IB Diploma at Ascend
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A rigorous 2-year programme that prepares students for global universities through
            balanced academics, creativity, action, and service. The IB Diploma combines depth
            and breadth of learning with critical thinking and international-mindedness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-6 md:p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-sky-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              IB Core Components
            </h3>
            <div className="space-y-4">
              {coreComponents.map((component, index) => (
                <div key={index} className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                    <component.icon className="w-6 h-6 text-sky-600" />
                  </div>
                  <span className="text-lg font-semibold text-slate-900">{component.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 md:p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              6 Subject Groups
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {subjectGroups.map((subject, index) => (
                <div key={index} className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <subject.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <span className="text-base font-semibold text-slate-900">{subject.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Balanced Education for Global Citizens
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Students study 3 subjects at Higher Level (HL) and 3 at Standard Level (SL),
            ensuring depth in their areas of interest while maintaining breadth across disciplines.
          </p>
        </div>
      </div>
    </section>
  );
}
