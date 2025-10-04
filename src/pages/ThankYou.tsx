import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CheckCircle, Home, ArrowLeft } from 'lucide-react';

export default function ThankYou() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');
  const isTour = type === 'tour';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <div className="absolute top-0 left-0 right-0 p-4 md:p-6 bg-white shadow-sm">
        <img
          src="/Ascend log with name transparent.png"
          alt="Ascend International School"
          className="h-24 md:h-32 lg:h-35 w-auto"
        />
      </div>

      <div className="min-h-screen flex items-center justify-center px-4 pt-24 pb-12">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 md:p-16 text-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
              <CheckCircle className="w-12 h-12 sm:w-14 sm:h-14 text-green-600" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Thank You!
            </h1>

            <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto mb-6 rounded-full"></div>

            <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed max-w-xl mx-auto">
              {isTour ? (
                <>
                  Your <strong>campus tour request</strong> has been received successfully.
                  Our admissions team will contact you within <strong>24 hours</strong> to
                  confirm your visit and schedule a convenient time.
                </>
              ) : (
                <>
                  Your <strong>application</strong> has been received successfully.
                  Our admissions team will review your information and contact you
                  within <strong>2 business days</strong>.
                </>
              )}
            </p>

            <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl p-6 sm:p-8 mb-8 border border-sky-200">
              <p className="text-base sm:text-lg text-gray-800 font-semibold mb-3">
                Admissions Office Contact
              </p>
              <div className="space-y-2">
                <p className="text-base sm:text-lg text-gray-700">
                  <strong>Email:</strong> admissions@ascendschool.edu.in
                </p>
                <p className="text-base sm:text-lg text-gray-700">
                  <strong>Phone:</strong> +91 2271222000
                </p>
                <p className="text-sm sm:text-base text-gray-600 mt-4">
                  Monday - Friday: 9:00 AM - 5:00 PM IST
                </p>
              </div>
            </div>

            <div className="bg-orange-50 rounded-2xl p-6 mb-8 border border-orange-200">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                <strong>What's Next?</strong><br />
                Our admissions team will reach out to you via email or phone.
                Please check your inbox (including spam folder) for our communication.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-full text-base sm:text-lg font-bold transition-all transform hover:scale-105 shadow-lg"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </button>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-4 rounded-full text-base sm:text-lg font-bold transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </button>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Questions? Contact us anytime at{' '}
              <a
                href="mailto:admissions@ascendschool.edu.in"
                className="text-sky-600 hover:text-sky-700 font-semibold underline"
              >
                admissions@ascendschool.edu.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
