import { useEffect, useRef } from 'react';

export default function OrbitCanvas({ className = 'contato-orbit-wrap', lazy = false }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return undefined;

    let raf = 0;
    let width = 0;
    let height = 0;
    let started = !lazy;
    let orbits = [];
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const seed = () => {
      const cx = width / 2;
      const cy = height / 2;
      orbits = Array.from({ length: 7 }, (_, index) => ({
        r: Math.min(width, height) * (0.16 + index * 0.055),
        speed: 0.002 + index * 0.0005,
        angle: Math.random() * Math.PI * 2,
        cx,
        cy,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const step = () => {
      if (!started) {
        raf = requestAnimationFrame(step);
        return;
      }
      ctx.clearRect(0, 0, width, height);
      orbits.forEach((orbit) => {
        if (!reduceMotion) orbit.angle += orbit.speed;
        ctx.strokeStyle = 'rgba(29,181,163,.12)';
        ctx.beginPath();
        ctx.ellipse(orbit.cx, orbit.cy, orbit.r * 1.55, orbit.r, -0.35, 0, Math.PI * 2);
        ctx.stroke();
        const x = orbit.cx + Math.cos(orbit.angle) * orbit.r * 1.55;
        const y = orbit.cy + Math.sin(orbit.angle) * orbit.r;
        ctx.fillStyle = 'rgba(29,181,163,.62)';
        ctx.beginPath();
        ctx.arc(x, y, 2.1, 0, Math.PI * 2);
        ctx.fill();
      });
      raf = requestAnimationFrame(step);
    };

    const start = () => {
      started = true;
    };

    resize();
    step();
    const card = canvas.closest('.atu-card');
    if (card && lazy) card.addEventListener('mouseenter', start);
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      if (card && lazy) card.removeEventListener('mouseenter', start);
    };
  }, [lazy]);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
