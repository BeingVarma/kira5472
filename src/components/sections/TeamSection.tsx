import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Users, Globe, Sparkles } from 'lucide-react';

const teamHighlights = [
  {
    icon: Users,
    title: 'Senior Leadership',
    description:
      'Core leadership with 10+ years of experience across enterprise software, startups, and digital transformation.',
  },
  {
    icon: Globe,
    title: 'Remote-First Culture',
    description:
      'A fully distributed team that operates with precision. Timezone-aware, always connected, deeply coordinated.',
  },
  {
    icon: Sparkles,
    title: 'Young Talent Pipeline',
    description:
      'We actively recruit and train the brightest young developers from across the country, keeping innovation at our core.',
  },
];

export function TeamSection() {
  return (
    <section id="team" className="section-padding">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <AnimatedSection animation="fade-left">
            <p className="text-sm font-medium tracking-wider text-muted-foreground uppercase mb-4">
              The People Behind the Code
            </p>
            <h2 className="mb-6">A Team Built for Execution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We're not a large agency. We're a focused, senior-led team that knows how to ship. 
              Every project gets direct access to experienced engineers who understand both 
              technology and business.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our remote-first structure means we hire the best—not the closest. 
              And our commitment to mentoring young talent ensures we stay fresh, 
              curious, and innovative.
            </p>
          </AnimatedSection>

          {/* Right - Highlights */}
          <div className="space-y-6">
            {teamHighlights.map((item, index) => (
              <AnimatedSection key={item.title} animation="fade-right" delay={index * 100}>
                <div className="flex gap-5 p-6 bg-secondary rounded-lg">
                  <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
