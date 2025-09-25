"use client";

import React, { useState, useEffect } from 'react';
import { Download, FileText, MessageCircle, Star, Zap, Code, Gamepad2, Sparkles } from 'lucide-react';
import { useParams } from 'next/navigation';
import departments from './data';

// Custom cursor component
const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleMouseOver = (e: Event) => {
      const target = e.target as Element | null;
      if (target && target.matches && target.matches('button, a, [role="button"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseOutWindow = (e: MouseEvent) => {
      // when leaving the window, relatedTarget is null in some browsers
      if (!(e.relatedTarget || (e as any).toElement)) {
        setVisible(false);
      }
    };

    const handleMouseEnterWindow = () => setVisible(true);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOutWindow);
    window.addEventListener('mouseenter', handleMouseEnterWindow);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOutWindow);
      window.removeEventListener('mouseenter', handleMouseEnterWindow);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) ${isHovering ? 'scale(1.8)' : 'scale(1)'}`,
        opacity: visible ? 1 : 0,
        transition: 'transform 0.12s ease, opacity 0.12s ease'
      }}
    />
  );
};

// Floating particles component
const FloatingParticles = () => {
  return (
    <div className="floating-particles">
      {[...Array(50)].map((_, i) => (
        <div 
          key={i} 
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
  );
};

// Event status indicator
const StatusIndicator: React.FC<{ status: string }> = ({ status }) => {
  const statusConfig: Record<'open'|'filling'|'closing', { color: string; text: string; pulse: boolean }> = {
    open: { color: 'bg-green-500', text: 'Open', pulse: true },
    filling: { color: 'bg-yellow-500', text: 'Filling Fast', pulse: true },
    closing: { color: 'bg-red-500', text: 'Closing Soon', pulse: true }
  };

  const key = (['open', 'filling', 'closing'] as const).includes(status as any) ? (status as 'open'|'filling'|'closing') : 'open';
  const config = statusConfig[key];

  return (
    <div className="flex items-center gap-2 mb-3">
      <div className={`w-2 h-2 rounded-full ${config.color} ${config.pulse ? 'animate-pulse' : ''}`} />
      <span className="text-xs text-cyan-300 font-medium">{config.text}</span>
    </div>
  );
};

export default function CyberpunkEventPage(): JSX.Element {
  const [loadedSections, setLoadedSections] = useState<Set<string>>(new Set());

  // Choose department data based on route param. If param not found, default to cse-events or first
  const params = useParams() as { dept?: string } | undefined;
  const routeName = params?.dept || 'cse-events';
  const dept = departments.find(d => d.routerName === routeName) || departments.find(d => d.routerName === 'cse-events') || departments[0];
  const departmentData = dept || { title: 'Department', logo: '/innoverse.jpg', whatsapp: '', events: [] };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = (entry.target as HTMLElement).dataset.section;
            if (section) {
              setLoadedSections(prev => {
                const s = new Set(prev);
                s.add(section);
                return s;
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-section]').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const getEventIcon = (title: string): JSX.Element => {
    if (title.includes('Paper')) return <FileText className="w-6 h-6" />;
    if (title.includes('Hacker')) return <Code className="w-6 h-6" />;
    if (title.includes('Web')) return <Zap className="w-6 h-6" />;
    if (title.includes('Football')) return <Gamepad2 className="w-6 h-6" />;
    if (title.includes('Fire')) return <Sparkles className="w-6 h-6" />;
    return <Star className="w-6 h-6" />;
  };

  return (
    <div className="cyberpunk-page">
      <CustomCursor />
      <FloatingParticles />
      
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        
        .cyberpunk-page {
          font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0a23 0%, #1a0b2e 25%, #16213e 50%, #0f3460 75%, #533483 100%);
          position: relative;
          overflow-x: hidden;
          cursor: auto; /* show native pointer again */
        }

        .custom-cursor {
          position: fixed;
          width: 26px;
          height: 26px;
          border: 2px solid #00ffff;
          background: rgba(0, 255, 255, 0.06);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transition: transform 0.12s ease, box-shadow 0.12s ease, opacity 0.12s ease;
          box-shadow: 0 0 22px #00ffff, inset 0 0 12px #00ffff;
          mix-blend-mode: screen;
          will-change: transform, opacity;
        }

        .floating-particles {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: linear-gradient(45deg, #00ffff, #ff00ff);
          border-radius: 50%;
          animation: float-up linear infinite;
          box-shadow: 0 0 6px currentColor;
        }

        @keyframes float-up {
          from {
            transform: translateY(100vh) rotate(0deg);
            opacity: 1;
          }
          to {
            transform: translateY(-10vh) rotate(360deg);
            opacity: 0;
          }
        }

        .cyber-grid {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 100px 100px;
          z-index: 1;
        }

        .hero-section {
          position: relative;
          z-index: 10;
          padding: 6rem 2rem 4rem;
          text-align: center;
        }

        .logo-container {
          width: 200px;
          height: 200px;
          margin: 0 auto 2rem;
          position: relative;
          border-radius: 50%;
          background: linear-gradient(135deg, #00ffff20, #ff00ff20);
          border: 2px solid transparent;
          background-clip: padding-box;
          transition: all 0.4s ease;
        }

        .logo-container:hover {
          transform: scale(1.05);
          box-shadow: 
            0 0 50px rgba(0, 255, 255, 0.4),
            0 0 100px rgba(255, 0, 255, 0.2);
          animation: pulse-glow 2s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 50px rgba(0, 255, 255, 0.4); }
          50% { box-shadow: 0 0 80px rgba(255, 0, 255, 0.6); }
        }

        .logo-container img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }

        .hero-title {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 700;
          background: linear-gradient(135deg, #00ffff, #ff00ff, #00ff00);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
          text-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
          animation: title-glow 3s ease-in-out infinite alternate;
        }

        @keyframes title-glow {
          from { text-shadow: 0 0 30px rgba(0, 255, 255, 0.5); }
          to { text-shadow: 0 0 50px rgba(255, 0, 255, 0.7); }
        }

        .hero-description {
          font-size: 1.25rem;
          color: #a0a9c0;
          max-width: 600px;
          margin: 0 auto 3rem;
          line-height: 1.6;
        }

        .scroll-indicator {
          animation: bounce 2s infinite;
          font-size: 2rem;
          color: #00ffff;
          text-shadow: 0 0 20px #00ffff;
        }

        .floating-actions {
          position: fixed;
          right: 2rem;
          bottom: 2rem;
          z-index: 50;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .action-button {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          background: linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1));
          backdrop-filter: blur(10px);
          cursor: pointer;
        }

        .action-button:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 10px 30px rgba(0, 255, 255, 0.3);
        }

        .action-button.whatsapp {
          background: linear-gradient(135deg, #25d366, #128c7e);
        }

        .action-button.whatsapp:hover {
          box-shadow: 0 10px 30px rgba(37, 211, 102, 0.4);
        }

        .events-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          padding: 4rem 2rem;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        .event-card {
          background: linear-gradient(135deg, rgba(10, 10, 35, 0.8), rgba(26, 11, 46, 0.6));
          border-radius: 20px;
          border: 1px solid rgba(0, 255, 255, 0.2);
          backdrop-filter: blur(20px);
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          cursor: pointer;
        }

        .event-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: rgba(255, 0, 255, 0.5);
          box-shadow: 
            0 20px 60px rgba(0, 255, 255, 0.2),
            0 0 50px rgba(255, 0, 255, 0.1);
        }

        .event-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #00ffff, #ff00ff, #00ff00);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .event-card:hover::before {
          transform: scaleX(1);
        }

        .card-image {
          height: 200px;
          background: linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1));
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-image::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.2);
          z-index: 1;
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          max-height: 100%;
          max-width: 100%;
          transition: transform 0.4s ease;
          position: relative;
          z-index: 0;
        }

        .event-card:hover .card-image img {
          transform: scale(1.05);
        }

        .card-content {
          padding: 1.5rem;
          position: relative;
        }

        .event-icon {
          position: absolute;
          top: -30px;
          right: 1.5rem;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #00ffff, #ff00ff);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 10px 30px rgba(0, 255, 255, 0.3);
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #00ffff;
          margin-bottom: 0.5rem;
          text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
        }

        .card-description {
          color: #a0a9c0;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .card-actions {
          display: flex;
          gap: 1rem;
        }

        .btn-primary {
          background: linear-gradient(135deg, #00ffff, #0080ff);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .btn-primary:hover::before {
          left: 100%;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 255, 255, 0.3);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          color: #a0a9c0;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .btn-secondary:hover {
          background: rgba(255, 0, 255, 0.2);
          color: white;
          border-color: #ff00ff;
        }

        .fade-in {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease;
        }

        .fade-in.loaded {
          opacity: 1;
          transform: translateY(0);
        }

        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.2s; }
        .stagger-3 { transition-delay: 0.3s; }
        .stagger-4 { transition-delay: 0.4s; }
        .stagger-5 { transition-delay: 0.5s; }

        @media (max-width: 768px) {
          .events-grid {
            grid-template-columns: 1fr;
            padding: 2rem 1rem;
          }
          
          .floating-actions {
            right: 1rem;
            bottom: 1rem;
          }
          
          .hero-section {
            padding: 4rem 1rem 3rem;
          }
          
          .cyberpunk-page {
            cursor: auto;
          }
          
          .custom-cursor {
            display: none;
          }
        }
      `}</style>

      <div className="cyber-grid" />

      <section className="hero-section">
        <div className="logo-container">
          <img 
            src={departmentData.logo || '/dep.png'} 
            alt={`${departmentData.title || 'Department'} Logo`}
          />
        </div>
        
        <h1 className="hero-title">{departmentData.title || 'Events'}</h1>
        <p className="hero-description">
          {departmentData.description || 'Explore our events and activities'}
        </p>
        
        <div className="scroll-indicator">⬇</div>
      </section>

      <main className="events-grid" data-section="events">
        { (departmentData.events || []).map((event: any, index: number) => {
          const title = event.title || 'Event';
          const shortDesc = (event.description || '').slice(0, 140);
          const image = event.image || '/innoverse.jpg';
          const status = (event.status as string) || 'open';
          const registrationLink = event.routerName ? `/${departmentData.routerName}/${event.routerName}` : '#';

          return (
            <article 
              key={`${departmentData.routerName}-${index}`}
              className={`event-card fade-in stagger-${index + 1} ${loadedSections.has('events') ? 'loaded' : ''}`}
            >
              <div className="card-image" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <img 
                  src={image} 
                  alt={title}
                  onLoad={(e) => {
                    const img = e.target as HTMLImageElement;
                    const aspectRatio = img.naturalWidth / img.naturalHeight;
                    
                    if (aspectRatio > 1.3) {
                      // Wide image - use cover
                      img.style.objectFit = 'cover';
                    } else if (aspectRatio < 0.7) {
                      // Tall image - use contain
                      img.style.objectFit = 'contain';
                    } else {
                      // Balanced ratio - use cover
                      img.style.objectFit = 'cover';
                    }
                  }}
                />
              </div>
              
              <div className="card-content">
                <div className="event-icon">
                  {getEventIcon(title)}
                </div>
                
                <StatusIndicator status={status} />
                
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{shortDesc}</p>
                
                <div className="card-actions">
                  <a href={registrationLink} className="btn-primary">
                    Register Now
                  </a>
                  <a href={`/${departmentData.routerName}/${event.routerName || ''}`} className="btn-secondary">
                    Learn More
                  </a>
                </div>
              </div>
            </article>
          );
        }) }
      </main>

      <div className="floating-actions">
        <a className="action-button" title="Registration PDF" href={departmentData.registrationPdf || '#'} target="_blank" rel="noreferrer">
          <Download className="w-6 h-6 text-cyan-400" />
        </a>
        
        <a className="action-button" title="Guidelines" href={departmentData.guidelinesPdf || '#'} target="_blank" rel="noreferrer">
          <FileText className="w-6 h-6 text-purple-400" />
        </a>
        
        <a 
          href={departmentData.whatsapp ? `https://wa.me/${departmentData.whatsapp}` : '#'}
          className="action-button whatsapp"
          title="Contact on WhatsApp"
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </a>
      </div>
    </div>
  );
}