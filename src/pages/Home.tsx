import { useState } from 'react';
import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import WhatIsIBDP from '../components/WhatIsIBDP';
import WhyAscend from '../components/WhyAscend';
import ScholarshipDetails from '../components/ScholarshipDetails';
import UniversityPlacements from '../components/UniversityPlacements';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import AdmissionsProcess from '../components/AdmissionsProcess';
import FinalCTA from '../components/FinalCTA';
import ApplicationForm from '../components/ApplicationForm';
import Footer from '../components/Footer';
import StickyApplyButton from '../components/StickyApplyButton';
import SchemaMarkup from '../components/SchemaMarkup';

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState<'application' | 'tour'>('application');

  const handleApplyClick = () => {
    setFormType('application');
    setShowForm(true);
  };

  const handleTourClick = () => {
    setFormType('tour');
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleDownloadBrochure = () => {
    window.open('https://ascendschool.edu.in/brochure.pdf', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <SchemaMarkup />
      <Hero onApplyClick={handleApplyClick} onDownloadBrochure={handleDownloadBrochure} />
      <Statistics />
      <WhatIsIBDP />
      <WhyAscend />
      <ScholarshipDetails onApplyClick={handleApplyClick} onDownloadBrochure={handleDownloadBrochure} />
      <UniversityPlacements />
      <Testimonials />
      <FAQ />
      <AdmissionsProcess onApplyClick={handleApplyClick} />
      <FinalCTA onApplyClick={handleApplyClick} onTourClick={handleTourClick} />
      <Footer />
      <StickyApplyButton onApplyClick={handleApplyClick} />

      {showForm && (
        <ApplicationForm onClose={handleCloseForm} formType={formType} />
      )}
    </div>
  );
}
