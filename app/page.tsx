'use client';

import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import TeamSection from '../components/sections/TeamSection';
import CTASection from '../components/sections/CTASection';
import Footer from '../components/footer';

export default function HomePage() {
  return (
    <main className="bg-white min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <TeamSection />
      <CTASection />
      <footer />
    </main>
  );
}
