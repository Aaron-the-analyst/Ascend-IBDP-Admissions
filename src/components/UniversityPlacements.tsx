import { GraduationCap } from 'lucide-react';

const universities = [
  'Harvard University',
  'Oxford University',
  'Stanford University',
  'NYU',
  'Ashoka University',
  'Imperial College London',
  'UC Berkeley',
  'National University of Singapore',
];

export default function UniversityPlacements() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-500/20 text-sky-300 px-4 py-2 rounded-full mb-6 font-semibold">
            <GraduationCap className="w-5 h-5" />
            Alumni Success
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our Graduates Go Global
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Ascend students have been accepted to prestigious universities worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
          {universities.map((university, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center text-center hover:bg-white/20 transition-colors"
            >
              <span className="text-base md:text-lg font-semibold">{university}</span>
            </div>
          ))}
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Graduation celebration"
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent flex items-end">
            <div className="p-8 md:p-12">
              <p className="text-2xl md:text-4xl font-bold mb-2">100%</p>
              <p className="text-lg md:text-xl text-gray-200">University Acceptance Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
