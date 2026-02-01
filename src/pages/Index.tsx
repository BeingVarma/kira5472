import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { WhySection } from '@/components/sections/WhySection';
import { TeamSection } from '@/components/sections/TeamSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { TrainingSection } from '@/components/sections/TrainingSection';
import { ResultsSection } from '@/components/sections/ResultsSection';
import { CTASection } from '@/components/sections/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhySection />
        <TeamSection />
        <ProcessSection />
        <TrainingSection />
        <ResultsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
