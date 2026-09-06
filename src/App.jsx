import React, { useState } from 'react';
import { TripProvider, useTrip } from './context/TripContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

import { HomePage } from './pages/HomePage';
import { DestinationsPage } from './pages/DestinationsPage';
import { TourPackagesPage } from './pages/TourPackagesPage';
import { FlightsPage } from './pages/FlightsPage';
import { HotelsPage } from './pages/HotelsPage';
import { VisaPassportPage } from './pages/VisaPassportPage';
import { ServicesPage } from './pages/ServicesPage';
import { OffersPage } from './pages/OffersPage';
import { MyTripPage } from './pages/MyTripPage';
import { ContactPage } from './pages/ContactPage';

import { PackageDetailsModal } from './components/PackageDetailsModal';
import { PassportModal } from './components/PassportModal';
import { VisaModal } from './components/VisaModal';
import { MyTripDrawer } from './components/MyTripDrawer';
import { AviationIntroScreen } from './components/AviationIntroScreen';

const AppContent = () => {
  const { currentPage } = useTrip();
  const [showIntro, setShowIntro] = useState(true);

  const renderPage = () => {
    switch (currentPage) {
      case 'destinations':
        return <DestinationsPage />;
      case 'packages':
        return <TourPackagesPage />;
      case 'flights':
        return <FlightsPage />;
      case 'hotels':
        return <HotelsPage />;
      case 'visapassport':
        return <VisaPassportPage />;
      case 'services':
        return <ServicesPage />;
      case 'offers':
        return <OffersPage />;
      case 'mytrip':
        return <MyTripPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#080B10] text-[#F5F7FA]">
      {showIntro && (
        <AviationIntroScreen onComplete={() => setShowIntro(false)} />
      )}

      <Navbar />
      <div className="flex-1">
        {renderPage()}
      </div>
      <Footer />

      {/* Global Modals & Drawers */}
      <PackageDetailsModal />
      <PassportModal />
      <VisaModal />
      <MyTripDrawer />
      <Toast />
    </div>
  );
};

export default function App() {
  return (
    <TripProvider>
      <AppContent />
    </TripProvider>
  );
}
