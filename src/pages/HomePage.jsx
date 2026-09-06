import React from 'react';
import { Hero } from '../components/Hero';
import { RunningServicesStrip } from '../components/RunningServicesStrip';
import { TrustStrip } from '../components/TrustStrip';
import { PopularDestinations } from '../components/PopularDestinations';
import { FeaturedPackage } from '../components/FeaturedPackage';
import { OffersSection } from '../components/OffersSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { JourneyInNumbers } from '../components/JourneyInNumbers';
import { Testimonials } from '../components/Testimonials';
import { CTASection } from '../components/CTASection';

export const HomePage = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <RunningServicesStrip />
      <TrustStrip />
      <PopularDestinations />
      <FeaturedPackage />
      <OffersSection />
      <WhyChooseUs />
      <JourneyInNumbers />
      <Testimonials />
      <CTASection />
    </main>
  );
};
