import { Award, Users, GraduationCap, Globe } from 'lucide-react';

export default function Statistics() {
  const stats = [
    {
      icon: Globe,
      value: '98%',
      label: 'Graduates placed in top global universities',
      description: 'Our students secure admissions to prestigious universities worldwide',
    },
    {
      icon: Award,
      value: '100%',
      label: 'IB Pass Rate for 5 consecutive years',
      description: 'Consistent excellence in IB Diploma Programme outcomes',
    },
    {
      icon: GraduationCap,
      value: '42',
      label: 'Average IB Score',
      description: 'Well above the global average of 30 points',
    },
    {
      icon: Users,
      value: '500+',
      label: 'Alumni network across 25 countries',
      description: 'Building global connections for life',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Why Choose Ascend for IB Diploma?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Join India's leading IB World School with proven track record of academic excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-sky-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-sky-400 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                  {stat.value}
                </div>
                <h3 className="text-base md:text-lg font-bold text-slate-800 mb-2">
                  {stat.label}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-sky-100">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
            Recognized & Accredited By
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-3 bg-sky-50 px-6 py-4 rounded-xl">
              <Award className="w-10 h-10 text-sky-600" />
              <div className="text-left">
                <p className="font-bold text-slate-900">IB World School</p>
                <p className="text-sm text-gray-600">International Baccalaureate</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-sky-50 px-6 py-4 rounded-xl">
              <Award className="w-10 h-10 text-sky-600" />
              <div className="text-left">
                <p className="font-bold text-slate-900">CISCE Affiliated</p>
                <p className="text-sm text-gray-600">Council for ISC Examination</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-sky-50 px-6 py-4 rounded-xl">
              <Award className="w-10 h-10 text-sky-600" />
              <div className="text-left">
                <p className="font-bold text-slate-900">Times School Award</p>
                <p className="text-sm text-gray-600">Excellence in Education</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
