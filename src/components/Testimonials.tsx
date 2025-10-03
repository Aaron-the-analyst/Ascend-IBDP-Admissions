import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Parent of IB Graduate',
    image: 'https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'Ascend transformed my daughter into a confident, critical thinker. The personalized attention and global curriculum prepared her perfectly for Stanford University.',
  },
  {
    name: 'Arjun Patel',
    role: 'IB Diploma Graduate, Class of 2024',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'The IB programme at Ascend challenged me intellectually while nurturing my creativity. I am now studying at Oxford, and I owe so much to the incredible faculty here.',
  },
  {
    name: 'Meera Desai',
    role: 'Parent of Current Student',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'The small class sizes mean teachers know each student individually. My son has thrived academically and personally in this nurturing environment.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            What Our Community Says
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Hear from parents and students about their Ascend experience
          </p>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-xl">
            <Quote className="w-12 h-12 text-sky-600 mb-6" />

            <p className="text-lg md:text-2xl text-gray-800 mb-8 leading-relaxed italic">
              "{testimonials[current].quote}"
            </p>

            <div className="flex items-center gap-4">
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-slate-900 text-lg">
                  {testimonials[current].name}
                </p>
                <p className="text-gray-600">{testimonials[current].role}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-sky-600 hover:bg-sky-700 text-white flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === current ? 'bg-sky-600 w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-sky-600 hover:bg-sky-700 text-white flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
