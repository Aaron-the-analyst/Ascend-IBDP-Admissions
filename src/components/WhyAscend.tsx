import { Globe, Users, TrendingUp, BookOpen, MapPin } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Globally Recognized IB Curriculum',
    description: 'World-class education accepted by universities worldwide',
  },
  {
    icon: Users,
    title: 'Expert International Faculty',
    description: 'Learn from experienced educators with global expertise',
  },
  {
    icon: TrendingUp,
    title: 'Strong University Placements',
    description: 'Our graduates join top universities across the globe',
  },
  {
    icon: BookOpen,
    title: 'Personalized Learning',
    description: 'Small class sizes ensure individual attention',
  },
  {
    icon: MapPin,
    title: 'Prime Mumbai Location',
    description: 'State-of-the-art campus in the heart of the city',
  },
];

export default function WhyAscend() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Why Choose Ascend IB Diploma?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            A world-class education that prepares students for global success
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 rounded-lg hover:bg-sky-50 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-sky-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="order-first md:order-last">
            <img
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Students collaborating"
              className="rounded-2xl shadow-2xl w-full h-[400px] md:h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
