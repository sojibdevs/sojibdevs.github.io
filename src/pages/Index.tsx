import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ExpertiseSection } from '@/components/ExpertiseSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <ProjectsSection />
        <ServicesSection />
        <ExperienceSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
