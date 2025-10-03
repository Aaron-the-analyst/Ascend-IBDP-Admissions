import { useState } from 'react';
import Hero from '../components/Hero';
import WhyAscend from '../components/WhyAscend';
import Scholarship from '../components/Scholarship';
import ProgrammeOverview from '../components/ProgrammeOverview';
import UniversityPlacements from '../components/UniversityPlacements';
import Testimonials from '../components/Testimonials';
import AdmissionsProcess from '../components/AdmissionsProcess';
import FinalCTA from '../components/FinalCTA';
import ApplicationForm from '../components/ApplicationForm';
import Footer from '../components/Footer';

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

  return (
    <div className="min-h-screen bg-white">
      <Hero onApplyClick={handleApplyClick} />
      <WhyAscend />
      <Scholarship onApplyClick={handleApplyClick} />
      <ProgrammeOverview />
      <UniversityPlacements />
      <Testimonials />
      <AdmissionsProcess onApplyClick={handleApplyClick} />
      <FinalCTA onApplyClick={handleApplyClick} onTourClick={handleTourClick} />
      <Footer />

      {showForm && (
        <ApplicationForm onClose={handleCloseForm} formType={formType} />
      )}
    </div>
  );
}
