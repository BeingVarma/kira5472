import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Target, Lightbulb, Shield } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Purpose-Driven',
    description:
      'Every line of code serves your business goals. We do not build features for the sake of it - we build what matters.',
  },
  {
    icon: Lightbulb,
    title: 'Clear Thinking',
    description:
      'Complex problems need simple solutions. We cut through noise to deliver software that is intuitive and maintainable.',
  },
  {
    icon: Shield,
    title: 'Value for Money',
    description:
      'Quality does not mean expensive. We optimize for impact, delivering scalable solutions without unnecessary overhead.',
  },
];

export function WhySection() {
  return (
    <section id="why" className="section-padding bg-section-alt">
      <div className="section-container">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-6">Why Shancom Solutions Exists</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We believe great software should be accessible to every business. Not just the ones 
            with deep pockets or technical teams. Our mission is to bring clarity, craftsmanship, 
            and genuine value to every project.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {values.map((value, index) => (
            <AnimatedSection key={value.title} delay={index * 100}>
              <div className="bg-card rounded-lg p-8 shadow-sm border border-border card-hover h-full">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-foreground" />
                </div>
                <h4 className="mb-3">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
