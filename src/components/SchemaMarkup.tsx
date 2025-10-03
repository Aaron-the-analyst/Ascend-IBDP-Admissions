import { useEffect } from 'react';

export default function SchemaMarkup() {
  useEffect(() => {
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: 'Ascend International School',
      description: 'IB World School offering IBDP in Mumbai with world-class facilities and 100% pass rate',
      url: 'https://ascendschool.edu.in',
      logo: 'https://ascendschool.edu.in/Ascend%20Logo%20Orignal.jpg',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mumbai',
        addressRegion: 'Maharashtra',
        addressCountry: 'IN',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-22-1234-5678',
        contactType: 'Admissions',
        email: 'admissions@ascendschool.edu.in',
      },
      sameAs: [
        'https://www.facebook.com/ascendschool',
        'https://www.instagram.com/ascendschool',
        'https://www.linkedin.com/school/ascendschool',
      ],
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the IB Diploma Programme?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The International Baccalaureate Diploma Programme (IBDP) is a rigorous two-year pre-university curriculum for students aged 16-19 (Grades 11-12). It is recognized globally and prepares students for success in higher education and beyond. The programme emphasizes critical thinking, intercultural understanding, and exposure to a variety of subjects.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the IB curriculum structure?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The IB curriculum requires students to study six subjects from different subject groups — three at Higher Level (HL) and three at Standard Level (SL). Additionally, all students complete three core components: Theory of Knowledge (TOK), Extended Essay (EE), and Creativity, Activity, Service (CAS).',
          },
        },
        {
          '@type': 'Question',
          name: 'Who can apply for the Ascend IBDP Scholarship?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The scholarship is open to students who have completed Grade 10 with a minimum of 85% aggregate marks. Applicants should demonstrate strong academic performance, particularly in Mathematics and Sciences, along with leadership skills and extracurricular involvement.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the IB Diploma cost in Mumbai at Ascend?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The full tuition fee for the two-year IBDP at Ascend ranges from ₹8-12 lakhs. However, our merit scholarship covers up to 75% of the tuition fees. Additional costs include books, examination fees, and extracurricular activities.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need prior IB experience to apply?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No prior IB experience is required. Students from CBSE, ICSE, State Boards, or any other curriculum are welcome to apply. Our comprehensive orientation programme and experienced faculty help all students transition smoothly.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does IBDP compare to other curricula in India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The IBDP is more internationally focused and emphasizes critical thinking, research, and holistic development compared to CBSE or ICSE. It is highly valued by universities worldwide, especially in the US, UK, Canada, and Europe.',
          },
        },
      ],
    };

    const offerSchema = {
      '@context': 'https://schema.org',
      '@type': 'Offer',
      name: 'Ascend IBDP Scholarship 2025',
      description: 'Merit-based scholarship for IB Diploma Programme covering up to 75% tuition fees',
      price: '0',
      priceCurrency: 'INR',
      availability: 'https://schema.org/LimitedAvailability',
      validFrom: '2024-12-01',
      validThrough: '2025-03-15',
      seller: {
        '@type': 'EducationalOrganization',
        name: 'Ascend International School',
      },
    };

    const script1 = document.createElement('script');
    script1.type = 'application/ld+json';
    script1.text = JSON.stringify(organizationSchema);
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'application/ld+json';
    script2.text = JSON.stringify(faqSchema);
    document.head.appendChild(script2);

    const script3 = document.createElement('script');
    script3.type = 'application/ld+json';
    script3.text = JSON.stringify(offerSchema);
    document.head.appendChild(script3);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.head.removeChild(script3);
    };
  }, []);

  return null;
}
