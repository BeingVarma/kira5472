import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Search, Map, Code2, RefreshCcw, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Understand',
    description:
      'We start by deeply understanding your business, your users, and the real problem you are trying to solve.',
  },
  {
    icon: Map,
    number: '02',
    title: 'Plan',
    description:
      'Clear roadmaps, realistic timelines, and transparent budgets. No surprises, no scope creep.',
  },
  {
    icon: Code2,
    number: '03',
    title: 'Build',
    description:
      'Coordinated sprints with regular check-ins. You see progress every week, not just at the end.',
  },
  {
    icon: RefreshCcw,
    number: '04',
    title: 'Iterate',
    description:
      'Real user feedback drives refinement. We polish until the product feels right.',
  },
  {
    icon: Rocket,
    number: '05',
    title: 'Deliver',
    description:
      'Scalable, maintainable code with full documentation. Built to grow with your business.',
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="section-padding bg-section-alt">
      <div className="section-container">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-wider text-muted-foreground uppercase mb-4">
            How We Work
          </p>
          <h2 className="mb-6">A Collaboration, Not a Handoff</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Building software is a partnership. We keep you in the loop at every stage - because 
            the best products come from tight collaboration between those who know the code 
            and those who know the business.
          </p>
        </AnimatedSection>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-px bg-border" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 80}>
                <div className="relative text-center lg:text-left">
                  {/* Number badge */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto lg:mx-0 mb-6 text-lg font-semibold">
                    {step.number}
                  </div>

                  <h4 className="mb-3 flex items-center justify-center lg:justify-start gap-2">
                    <step.icon className="w-5 h-5 text-muted-foreground" />
                    {step.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
