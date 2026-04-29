import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimations() {
  const { pathname } = useLocation();

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      gsap.set('.hl span, .hl em', { y: '0%' });
      gsap.set('.hero-eyebrow,.hero-foot,.hero-scroll', { opacity: 1 });
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.timeline({ delay: 0.12 })
        .to('.hl span, .hl em', {
          y: '0%',
          duration: 1.1,
          ease: 'power4.out',
          stagger: 0.12,
        })
        .to('.hero-eyebrow', { opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=.7')
        .to('.hero-foot', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=.5')
        .to('.hero-scroll', { opacity: 1, duration: 0.5 }, '-=.3');

      gsap.utils.toArray('.eyebrow:not(.hero-eyebrow)').forEach((el) => {
        gsap.from(el, {
          x: -20,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
        });
      });

      gsap.utils.toArray('.s-title, .prob-h, .parc-title, .contato-title, .page-title').forEach((el) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
        });
      });

      [
        ['.circle-card', '.circles'],
        ['.atu-card', '.atu-grid'],
        ['.tcard', '.team-grid'],
        ['#contato .container > *', '#contato'],
      ].forEach(([target, trigger]) => {
        if (!document.querySelector(trigger)) return;
        gsap.from(target, {
          y: 40,
          opacity: 0,
          stagger: 0.12,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger, start: 'top 82%', toggleActions: 'play none none none' },
        });
      });

      gsap.utils.toArray('.case-row').forEach((row) => {
        const imgs = row.querySelector('.case-imgs');
        const text = row.querySelector('.case-text');
        gsap.timeline({
          scrollTrigger: { trigger: row, start: 'top 75%', toggleActions: 'play none none none' },
        })
          .from(imgs, { clipPath: 'inset(0 100% 0 0)', duration: 1.1, ease: 'power4.out' })
          .from(text, { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=.65');
      });
    });

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [pathname]);
}
