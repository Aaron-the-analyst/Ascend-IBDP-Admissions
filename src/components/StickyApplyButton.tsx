import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface StickyApplyButtonProps {
  onApplyClick: () => void;
}

export default function StickyApplyButton({ onApplyClick }: StickyApplyButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={onApplyClick}
      className="fixed bottom-6 right-6 z-50 bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 md:px-8 md:py-5 rounded-full font-bold shadow-2xl flex items-center gap-2 transition-all transform hover:scale-105 animate-slide-up"
      aria-label="Apply Now"
    >
      <span className="text-base md:text-lg">Apply Now</span>
      <ArrowRight className="w-5 h-5" />
    </button>
  );
}
