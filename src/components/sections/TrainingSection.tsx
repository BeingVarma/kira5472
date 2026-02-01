import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GraduationCap, Code, Handshake } from 'lucide-react';

const trainingPoints = [
  {
    icon: GraduationCap,
    title: 'College Partnerships',
    description:
      'We partner with engineering colleges to bridge the gap between academic learning and industry-ready skills.',
  },
  {
    icon: Code,
    title: 'Real-World Training',
    description:
      'Students work on actual projects, learning modern tools, workflows, and professional standards.',
  },
  {
    icon: Handshake,
    title: 'Giving Back',
    description:
      'By investing in education, we are building the next generation of developers - and strengthening our talent pipeline.',
  },
];

export function TrainingSection() {
  return (
    <section id="training" className="section-padding">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Visual */}
          <AnimatedSection animation="fade-left">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-secondary to-muted overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <GraduationCap className="w-16 h-16 text-foreground/20 mx-auto mb-4" />
                    <p className="text-2xl font-semibold text-foreground/60">
                      Training Tomorrow's Engineers
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-xl -z-10" />
            </div>
          </AnimatedSection>

          {/* Right Content */}
          <div>
            <AnimatedSection animation="fade-right">
              <p className="text-sm font-medium tracking-wider text-muted-foreground uppercase mb-4">
                Training & Impact
              </p>
              <h2 className="mb-6">Building More Than Software</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                We believe the best way to improve the industry is to invest in people. 
                That is why we actively train and mentor students, preparing them for 
                real careers in software development.
              </p>
            </AnimatedSection>

            <div className="space-y-6">
              {trainingPoints.map((point, index) => (
                <AnimatedSection key={point.title} animation="fade-right" delay={index * 100}>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <point.icon className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <h4 className="text-base font-medium mb-1">{point.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
