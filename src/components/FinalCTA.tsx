import { ArrowRight, Calendar } from 'lucide-react';

interface FinalCTAProps {
  onApplyClick: () => void;
  onTourClick: () => void;
}

export default function FinalCTA({ onApplyClick, onTourClick }: FinalCTAProps) {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900/95 to-blue-900/90"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-orange-500 text-white rounded-full text-sm md:text-base font-semibold animate-pulse">
          Limited Seats Available | Act Now
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Limited Seats.<br />Apply Today.
        </h2>

        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
          Join a world-class IB community in Mumbai and unlock your potential
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onTourClick}
            className="group bg-white hover:bg-gray-100 text-slate-900 px-8 md:px-10 py-4 md:py-5 rounded-full text-lg md:text-xl font-bold transition-all transform hover:scale-105 shadow-xl inline-flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            <Calendar className="w-6 h-6" />
            Book a Campus Tour
          </button>

          <button
            onClick={onApplyClick}
            className="group bg-orange-500 hover:bg-orange-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-lg md:text-xl font-bold transition-all transform hover:scale-105 shadow-xl inline-flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            Apply Now
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
