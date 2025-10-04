import { ArrowRight, Download, Award } from 'lucide-react';

interface HeroProps {
  onApplyClick: () => void;
  onDownloadBrochure: () => void;
}

export default function Hero({ onApplyClick, onDownloadBrochure }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-slate-900/60 to-slate-900/80"></div>
      </div>

      <div className="absolute top-0 left-0 right-0 z-20 p-4 md:p-6 bg-gradient-to-b from-white via-white/80 to-transparent pb-8">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <img
            src="/Ascend log with name transparent.png"
            alt="Ascend International School - IB World School"
            className="h-20 md:h-28 lg:h-36 w-auto"
            loading="eager"
          />
          <div className="flex items-center gap-2 bg-white/95 px-4 py-2 rounded-lg shadow-lg">
            <Award className="w-8 h-8 text-sky-600" />
            <div className="text-left hidden sm:block">
              <p className="text-xs font-semibold text-gray-600">IB World School</p>
              <p className="text-xs text-gray-500">Accredited</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto pt-32 pb-16">
        <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full text-sm md:text-base font-bold shadow-2xl animate-pulse">
          🎓 Scholarships 2025 | Only Limited Merit Seats Available
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
          Apply for Ascend IBDP<br />
          <span className="text-sky-400">Scholarships 2025</span>
        </h1>

        <p className="text-xl md:text-3xl text-gray-100 mb-10 max-w-4xl mx-auto font-semibold drop-shadow-lg">
          World-class IB Diploma in Mumbai — Limited merit scholarships available
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={onApplyClick}
            className="group bg-orange-500 hover:bg-orange-600 text-white px-10 md:px-14 py-5 md:py-6 rounded-full text-lg md:text-xl font-bold transition-all transform hover:scale-105 shadow-2xl inline-flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            Apply Now
            <ArrowRight className="group-hover:translate-x-1 transition-transform w-6 h-6" />
          </button>

          <button
            onClick={onDownloadBrochure}
            className="group bg-white hover:bg-gray-50 text-slate-900 px-10 md:px-14 py-5 md:py-6 rounded-full text-lg md:text-xl font-bold transition-all transform hover:scale-105 shadow-2xl inline-flex items-center gap-3 w-full sm:w-auto justify-center border-2 border-slate-200"
          >
            <Download className="w-6 h-6" />
            Download Brochure
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-white">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm md:text-base font-medium">IB World School</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm md:text-base font-medium">100% IB Pass Rate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm md:text-base font-medium">Global University Placements</span>
          </div>
        </div>
      </div>
    </section>
  );
}
