import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 gradient-subtle" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline */}
          <p className="text-sm md:text-base font-medium tracking-wider text-muted-foreground uppercase mb-6 animate-fade-up">
            Software Solutions That Make Sense
          </p>

          {/* Main Headline */}
          <h1 className="mb-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
            We Build Software
            <br />
            <span className="text-muted-foreground">That Builds Your Business</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
            style={{ animationDelay: '200ms' }}
          >
            Shancom Solutions partners with businesses to create reliable, scalable software. 
            No complexity. No confusion. Just clarity, coordination, and code that works.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
            style={{ animationDelay: '300ms' }}
          >
            <Button size="lg" asChild>
              <a href="#contact">Start Your Project</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#why">Learn How We Work</a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-up"
          style={{ animationDelay: '500ms' }}
        >
          <a
            href="#why"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
