import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

type AnimationType = 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'stagger';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
}

const animationClasses: Record<AnimationType, { base: string; visible: string }> = {
  'fade-up': {
    base: 'animate-on-scroll',
    visible: 'visible',
  },
  'fade-left': {
    base: 'animate-on-scroll-left',
    visible: 'visible',
  },
  'fade-right': {
    base: 'animate-on-scroll-right',
    visible: 'visible',
  },
  scale: {
    base: 'animate-on-scroll-scale',
    visible: 'visible',
  },
  stagger: {
    base: 'stagger-children',
    visible: 'visible',
  },
};

export function AnimatedSection({
  children,
  className,
  animation = 'fade-up',
  delay = 0,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation();
  const { base, visible } = animationClasses[animation];

  return (
    <div
      ref={ref}
      className={cn(base, isVisible && visible, className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
