
import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  targetOpacity: number;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const initParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
          targetOpacity: Math.random() * 0.5 + 0.2
        });
      }
      particlesRef.current = particles;
    };

    initParticles();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Mouse interaction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          particle.vx += (dx / distance) * force * 0.02;
          particle.vy += (dy / distance) * force * 0.02;
          particle.targetOpacity = Math.min(1, particle.opacity + force * 0.5);
        } else {
          particle.targetOpacity = Math.random() * 0.5 + 0.2;
        }

        // Apply friction
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Smooth opacity transition
        particle.opacity += (particle.targetOpacity - particle.opacity) * 0.1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
        ctx.fill();

        // Draw connections
        particlesRef.current.forEach((otherParticle, j) => {
          if (i !== j) {
            const dx2 = particle.x - otherParticle.x;
            const dy2 = particle.y - otherParticle.y;
            const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

            if (distance2 < 100) {
              const opacity = (100 - distance2) / 100 * 0.2;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });

      // Floating geometric shapes
      const time = Date.now() * 0.001;
      
      // Draw floating triangles
      for (let i = 0; i < 3; i++) {
        const x = Math.sin(time * 0.3 + i * 2) * 200 + canvas.width / 2;
        const y = Math.cos(time * 0.2 + i * 1.5) * 150 + canvas.height / 2;
        const size = 20 + Math.sin(time + i) * 10;
        
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(time * 0.5 + i);
        ctx.beginPath();
        ctx.moveTo(0, -size);
        ctx.lineTo(-size * 0.866, size * 0.5);
        ctx.lineTo(size * 0.866, size * 0.5);
        ctx.closePath();
        ctx.strokeStyle = `rgba(59, 130, 246, 0.1)`;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      }

      // Draw floating circles
      for (let i = 0; i < 2; i++) {
        const x = Math.cos(time * 0.4 + i * 3) * 300 + canvas.width / 2;
        const y = Math.sin(time * 0.3 + i * 2) * 200 + canvas.height / 2;
        const size = 30 + Math.cos(time * 0.7 + i) * 15;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(59, 130, 246, 0.08)`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)' }}
    />
  );
}
