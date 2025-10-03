import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <img
              src="/Ascend log transparent.png"
              alt="Ascend International School"
              className="h-16 mb-6 brightness-0 invert"
            />
            <p className="text-gray-400 mb-4 leading-relaxed">
              Empowering students to become global citizens through world-class
              IB education in the heart of Mumbai.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/AscendInternational/"
                className="w-10 h-10 rounded-full bg-sky-600 hover:bg-sky-700 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/ascendspeaks/"
                className="w-10 h-10 rounded-full bg-sky-600 hover:bg-sky-700 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://in.linkedin.com/company/ascend-international-school"
                className="w-10 h-10 rounded-full bg-sky-600 hover:bg-sky-700 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.ascendinternational.org/" 
                  className="hover:text-sky-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" 
                  className="hover:text-sky-400 transition-colors">
                  IB Curriculum
                </a>
              </li>
              <li>
                <a href="#" 
                  className="hover:text-sky-400 transition-colors">
                  Admissions
                </a>
              </li>
              <li>
                <a href="https://www.ascendinternational.org/dp-scholarship"
                  className="hover:text-sky-400 transition-colors">
                  Scholarships
                </a>
              </li>
              <li>
                <a href="https://www.ascendinternational.org/campus" 
                  className="hover:text-sky-400 transition-colors">
                  Campus Life
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-sky-400 flex-shrink-0 mt-1" />
                <span className="text-sm">
                        5, 'F' Block, Opp. Govt. Colony,<br />
                        Bandra Kurla Complex<br />
                        Mumbai - 400051, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <span className="text-sm">+91 22 7122 2000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <span className="text-sm">admin@ascendinternational.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Ascend International School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
