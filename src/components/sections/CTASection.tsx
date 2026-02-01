import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail } from 'lucide-react';

export function CTASection() {
  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <AnimatedSection animation="scale">
          <div className="relative bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 lg:p-16 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <h2 className="text-primary-foreground mb-6">Ready to Build Something Great?</h2>
              <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
                Whether you have a clear vision or just an idea, we would love to hear from you. 
                Let us discuss how we can help turn your software goals into reality.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="group"
                  asChild
                >
                  <a href="mailto:hello@shancomsolutions.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Get in Touch
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>

              <p className="text-sm text-primary-foreground/60 mt-8">
                No pressure, no sales pitch - just a conversation about your project.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
