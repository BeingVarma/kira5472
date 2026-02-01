import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { TrendingUp, Clock, Shield, Users } from 'lucide-react';

const stats = [
  { icon: TrendingUp, value: '40+', label: 'Projects Delivered' },
  { icon: Clock, value: '10+', label: 'Years Experience' },
  { icon: Shield, value: '99%', label: 'Client Retention' },
  { icon: Users, value: '25+', label: 'Team Members' },
];

const testimonials = [
  {
    quote:
      'Shancom Solutions transformed our operations. They did not just build software - they understood our business and delivered a solution that actually works.',
    author: 'Business Owner',
    role: 'E-commerce Startup',
  },
  {
    quote:
      'Working with Shancom felt like having an in-house team. The communication was clear, timelines were met, and the quality exceeded expectations.',
    author: 'Operations Director',
    role: 'Healthcare Company',
  },
];

export function ResultsSection() {
  return (
    <section id="results" className="section-padding bg-section-alt">
      <div className="section-container">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-wider text-muted-foreground uppercase mb-4">
            Results & Growth
          </p>
          <h2 className="mb-6">Businesses That Grow With Us</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We measure success by your success. When your software works, your business 
            grows - and that is the outcome we optimize for.
          </p>
        </AnimatedSection>

        {/* Stats Grid */}
        <AnimatedSection animation="stagger" className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-card rounded-xl border border-border"
            >
              <stat.icon className="w-8 h-8 text-muted-foreground mx-auto mb-4" />
              <p className="text-3xl md:text-4xl font-semibold text-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </AnimatedSection>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="bg-card rounded-xl p-8 border border-border h-full">
                <blockquote className="text-lg text-foreground leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-medium text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
