import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onApplyClick: () => void;
}

export default function Hero({ onApplyClick }: HeroProps) {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-slate-900/60 to-slate-900/80"></div>
      </div>

      <div className="absolute top-0 left-0 right-0 z-20 p-4 md:p-6 bg-gradient-to-b from-white via-white/80 to-transparent pb-8">
        <img
          src="/Ascend log with name transparent.png"
          alt="Ascend International School"
          className="h-24 md:h-32 lg:h-40 w-auto"
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-block mb-6 px-4 py-2 bg-orange-500 text-white rounded-full text-sm md:text-base font-semibold animate-pulse">
          Scholarship 2026-27 | Only 2 Seats Available
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Admissions Open for<br />
          <span className="text-sky-400">IB Diploma Programme</span><br />
          <span className="text-2xl md:text-4xl lg:text-5xl">(Grades 11-12)</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
          Limited Scholarships Available – Only 2 Seats
        </p>

        <button
          onClick={onApplyClick}
          className="group bg-orange-500 hover:bg-orange-600 text-white px-8 md:px-12 py-4 md:py-5 rounded-full text-lg md:text-xl font-bold transition-all transform hover:scale-105 shadow-2xl inline-flex items-center gap-3"
        >
          Apply Now
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <button
        onClick={onApplyClick}
        className="fixed bottom-8 right-8 z-50 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-bold shadow-2xl md:hidden flex items-center gap-2 animate-bounce"
      >
        Apply <ArrowRight size={18} />
      </button>
    </section>
  );
}
