import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Send } from 'lucide-react';

interface ApplicationFormProps {
  onClose: () => void;
  formType: 'application' | 'tour';
}

export default function ApplicationForm({ onClose, formType }: ApplicationFormProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+91',
    childGrade: '',
    interest: 'Admission',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://sheetdb.io/api/v1/j3hx9vdw9e4m5', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: formData }),
      });

      if (response.ok) {
        onClose();
        navigate(`/thank-you?type=${formType}`);
      } else {
        alert('Submission failed. Please try again.');
        setIsSubmitting(false);
      }
    } catch (error) {
      alert('There was an error submitting the form.');
      console.error(error);
      setIsSubmitting(false);
    }
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isTourForm = formType === 'tour';

  const gradeOptions = [
    'Grade 10',
    'Grade 11 (Transfer)', 'Others'
  ];

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center backdrop-blur-sm overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-[95%] sm:w-[90%] md:w-full max-w-2xl my-4 sm:my-8 mx-auto">
        <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 relative animate-scale-in shadow-2xl max-h-[95vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="sticky top-0 float-right w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 flex items-center justify-center transition-all z-10 shadow-md"
            aria-label="Close form"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
          </button>

          <div className="mb-5 sm:mb-6 pr-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              {isTourForm ? 'Book a Campus Tour' : 'Apply to Ascend IB Diploma'}
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              {isTourForm
                ? 'Visit our campus and experience our world-class facilities'
                : 'Start your journey to global academic excellence'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">
                Parent's Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 sm:py-4 text-base sm:text-lg rounded-xl border-2 border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all bg-white"
                placeholder="Enter full name"
                style={{ fontSize: '16px' }}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 sm:py-4 text-base sm:text-lg rounded-xl border-2 border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all bg-white"
                placeholder="your@email.com"
                style={{ fontSize: '16px' }}
              />
            </div>

            <div>
                <label htmlFor="phone" className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 sm:py-4 text-base sm:text-lg rounded-xl border-2 border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all bg-white"
                  placeholder="Enter phone number"
                  style={{ fontSize: '16px' }}
                />
            </div>

            <div>
              <label htmlFor="childGrade" className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">
                Child's Current Grade *
              </label>
              <select
                id="childGrade"
                name="childGrade"
                required
                value={formData.childGrade}
                onChange={handleChange}
                className="w-full px-4 py-3 sm:py-4 text-base sm:text-lg rounded-xl border-2 border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all bg-white"
                style={{ fontSize: '16px' }}
              >
                <option value="">Select grade</option>
                {gradeOptions.map((grade) => (
                  <option key={grade} value={grade}>{grade}</option>
                ))}
              </select>
            </div>

            {!isTourForm && (
              <div>
                <label htmlFor="interest" className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">
                  Interest *
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 sm:py-4 text-base sm:text-lg rounded-xl border-2 border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all bg-white"
                  style={{ fontSize: '16px' }}
                >
                  <option value="">Select interest</option>
                  <option value="Admission">Admission Only</option>
                  <option value="Scholarship">Scholarship Only</option>
                  <option value="Both">Both Admission & Scholarship</option>
                </select>
            </div>
                    )}

            <div className="bg-sky-50 rounded-xl p-4 sm:p-5">
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                By submitting this form, you agree to be contacted by Ascend International School
                regarding admissions and related information.
              </p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 disabled:bg-gray-400 text-white px-6 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold transition-all transform hover:scale-[1.02] active:scale-100 disabled:hover:scale-100 shadow-lg inline-flex items-center justify-center gap-3 min-h-[48px] sm:min-h-[56px]"
              style={{ fontSize: '16px' }}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  {isTourForm ? 'Request Campus Tour' : 'Apply Now'}
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
