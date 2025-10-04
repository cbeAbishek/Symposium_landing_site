"use client";

import React, { useState, useEffect } from 'react';
import { Download, FileText, MessageCircle, Star, Zap, Code, Gamepad2, Sparkles, RotateCcw, ExternalLink, ArrowLeft } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
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
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const router = useRouter();

  // Choose department data  route param. If param not found, default to cse-events or first
  const params = useParams() as { dept?: string } | undefined;
  const routeName = params?.dept || 'cse-events';
  const dept = departments.find(d => d.routerName === routeName) || departments.find(d => d.routerName === 'cse-events') || departments[0];
  const departmentData = dept || { title: 'Department', logo: '/innoverse.jpg', whatsapp: '', events: [] };

  const toggleCardFlip = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

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

        /* Top navigation bar */
        .top-nav {
          position: fixed;
          top: 12px;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 48px);
          max-width: 1100px;
          z-index: 60;
          pointer-events: auto;
        }

        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: linear-gradient(90deg, rgba(0,0,0,0.35), rgba(255,255,255,0.02));
          border: 1px solid rgba(255,255,255,0.04);
          padding: 8px 12px;
          border-radius: 12px;
          backdrop-filter: blur(8px) saturate(120%);
          box-shadow: 0 6px 24px rgba(0,0,0,0.4);
        }

        .nav-title {
          color: #e6f7ff;
          font-weight: 700;
          text-align: center;
          font-size: 1rem;
          letter-spacing: 0.4px;
        }

        .nav-btn {
          display: inline-flex;
          gap: 8px;
          align-items: center;
          background: rgba(0,0,0,0.25);
          border: 1px solid rgba(255,255,255,0.04);
          color: #e8fbff;
          padding: 8px 12px;
          border-radius: 10px;
          cursor: pointer;
          text-decoration: none;
          font-weight: 600;
        }

        .nav-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(0,255,255,0.06);
        }

        .nav-btn.back {
          background: linear-gradient(90deg, rgba(0,0,0,0.35), rgba(0,255,255,0.02));
        }

        .nav-btn.contact {
          background: linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,0,255,0.02));
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

        /* Top title overlay on each card */
        .card-top-title {
          position: absolute;
          left: 50%;
          transform: translateX(-50%) translateY(-8px);
          top: 12px;
          z-index: 30;
          padding: 6px 14px;
          border-radius: 9999px;
          background: linear-gradient(90deg, rgba(0,255,255,0.08), rgba(255,0,255,0.06));
          color: #00ffff;
          font-weight: 700;
          box-shadow: 0 6px 20px rgba(0,255,255,0.05);
          backdrop-filter: blur(6px);
          animation: topTitleIn 600ms cubic-bezier(.2,.9,.2,1) both;
        }

        @keyframes topTitleIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-18px) scale(.96); }
          to { opacity: 1; transform: translateX(-50%) translateY(-8px) scale(1); }
        }

        /* Guidelines list */
        .guidelines { margin-top: 0.75rem; }
        .guidelines h4 { margin-bottom: 0.35rem; color: #7ee8fa; }
        .guidelines ul { margin: 0; padding: 0; list-style: none; }
        .guidelines li { font-size: 0.85rem; color: #bcd6e6; line-height: 1.3; }
        .guidelines strong { color: #c8fff5; }

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
          border-radius: 10%;
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

        /* Top title overlay on each card */
        .card-top-title {
          position: absolute;
          left: 50%;
          transform: translateX(-50%) translateY(-8px);
          top: 12px;
          z-index: 30;
          padding: 6px 14px;
          border-radius: 9999px;
          background: linear-gradient(90deg, rgba(0,255,255,0.08), rgba(255,0,255,0.06));
          color: #00ffff;
          font-weight: 700;
          box-shadow: 0 6px 20px rgba(0,255,255,0.05);
          backdrop-filter: blur(6px);
          animation: topTitleIn 600ms cubic-bezier(.2,.9,.2,1) both;
        }

        @keyframes topTitleIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-18px) scale(.96); }
          to { opacity: 1; transform: translateX(-50%) translateY(-8px) scale(1); }
        }

        /* Guidelines list */
        .guidelines { margin-top: 0.75rem; }
        .guidelines h4 { margin-bottom: 0.35rem; color: #7ee8fa; }
        .guidelines ul { margin: 0; padding: 0; list-style: none; }
        .guidelines li { font-size: 0.85rem; color: #bcd6e6; line-height: 1.3; }
        .guidelines strong { color: #c8fff5; }

        /* Flip Card Styles */
        .events-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          padding: 4rem 1rem;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        .flip-card {
          background: transparent;
          width: 100%;
          /* make card taller for better content spacing and to accommodate a square image */
          min-height: 660px;
          height: auto;
          perspective: 1000px;
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
        }

        .flip-card-inner.flipped {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 20px;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(10, 10, 35, 0.9), rgba(26, 11, 46, 0.8));
          border: 1px solid rgba(0, 255, 255, 0.2);
          backdrop-filter: blur(20px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .flip-card-back {
          transform: rotateY(180deg);
          background: linear-gradient(135deg, rgba(26, 11, 46, 0.9), rgba(83, 52, 131, 0.8));
          border-color: rgba(255, 0, 255, 0.3);
        }

        .flip-card:hover .flip-card-front,
        .flip-card:hover .flip-card-back {
          box-shadow: 
            0 20px 60px rgba(0, 255, 255, 0.2),
            0 0 50px rgba(255, 0, 255, 0.1);
        }

        /* Front Card Styles */
        .card-image-container {
          position: relative;
          /* force a 1:1 square image container regardless of card width */
          aspect-ratio: 1 / 1;
          width: 100%;
          max-height: 420px; /* limit very tall images on large screens */
          overflow: hidden;
          background: linear-gradient(135deg, rgba(0, 255, 255, 0.06), rgba(255, 0, 255, 0.06));
          display: block;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover; /* cover keeps the 1:1 crop */
          object-position: center center;
          transition: transform 0.4s ease, filter 0.3s ease;
          display: block;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0, 0, 0, 0.1) 50%,
            rgba(0, 0, 0, 0.3) 100%
          );
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          padding: 1rem;
        }

        .event-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #00ffff, #ff00ff);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 8px 25px rgba(0, 255, 255, 0.4);
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        .flip-card:hover .card-image {
          transform: scale(1.05);
        }

        .card-content {
          padding: 1.25rem;
          /* let the content flow naturally under the square image */
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 0.75rem;
        }

        .card-title {
          font-size: 1.4rem;
          font-weight: 600;
          color: #00ffff;
          margin-bottom: 0.5rem;
          text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
          line-height: 1.2;
        }

        .card-description {
          color: #a0a9c0;
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 1rem;
          flex-grow: 1;
        }

        .btn-flip {
          background: linear-gradient(135deg, rgba(0, 255, 255, 0.2), rgba(255, 0, 255, 0.2));
          border: 1px solid rgba(0, 255, 255, 0.4);
          color: #00ffff;
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          width: 100%;
        }

        .btn-flip:hover {
          background: linear-gradient(135deg, rgba(0, 255, 255, 0.3), rgba(255, 0, 255, 0.3));
          border-color: rgba(255, 0, 255, 0.6);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 255, 255, 0.3);
        }

        /* Back Card Styles */
        .back-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 1.5rem 1rem;
          border-bottom: 1px solid rgba(255, 0, 255, 0.2);
        }

        .btn-back {
          background: rgba(255, 0, 255, 0.2);
          border: 1px solid rgba(255, 0, 255, 0.4);
          color: #ff00ff;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-back:hover {
          background: rgba(255, 0, 255, 0.3);
          transform: rotate(-180deg);
        }

        .back-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #ff00ff;
          text-shadow: 0 0 10px rgba(255, 0, 255, 0.5);
        }

        .guidelines-container {
          flex-grow: 1;
          overflow-y: auto;
          padding: 0 1.5rem;
          max-height: 280px;
        }

        .guidelines-grid {
          display: grid;
          gap: 0.75rem;
          grid-template-columns: 1fr;
        }

        .guideline-item {
          background: rgba(0, 0, 0, 0.2);
          padding: 0.75rem;
          border-radius: 10px;
          border: 1px solid rgba(255, 0, 255, 0.1);
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .guideline-item.full-width {
          grid-column: 1 / -1;
        }

        .guideline-label {
          color: #ff00ff;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .guideline-value {
          color: #e0e6ed;
          font-size: 0.85rem;
          line-height: 1.4;
        }

        .back-actions {
          padding: 1rem 1.5rem 1.5rem;
          display: flex;
          gap: 0.75rem;
          flex-direction: column;
        }

        .btn-register {
          background: linear-gradient(135deg, #00ffff, #0099cc);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 255, 255, 0.3);
        }

        .btn-register:hover {
          background: linear-gradient(135deg, #00e6e6, #0088bb);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 255, 255, 0.4);
        }

        .btn-guidelines {
          background: linear-gradient(135deg, rgba(255, 0, 255, 0.2), rgba(138, 43, 226, 0.2));
          border: 1px solid rgba(255, 0, 255, 0.4);
          color: #ff00ff;
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn-guidelines:hover {
          background: linear-gradient(135deg, rgba(255, 0, 255, 0.3), rgba(138, 43, 226, 0.3));
          border-color: rgba(255, 0, 255, 0.6);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .events-grid {
            grid-template-columns: 1fr;
            padding: 2rem 1rem;
            gap: 1.5rem;
          }
          
          .flip-card {
            min-height: 500px;
          }

          .card-image-container {
            /* slightly smaller square on tablet */
            max-height: 360px;
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
          
          .guidelines-grid {
            gap: 0.5rem;
          }
          
          .back-actions {
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .guideline-item {
            padding: 0.5rem;
          }
        }

        @media (max-width: 480px) {
          .events-grid {
            grid-template-columns: 1fr;
            padding: 1rem 0.5rem;
            gap: 1rem;
          }
          
          .flip-card {
            min-height: 700px;
          }

          .card-image-container {
            max-height: 100%;
          }
          
          .card-content {
            padding: 1rem;
          }
          
          .back-header {
            padding: 1rem 1rem 0.5rem;
          }
          
          .guidelines-container {
            padding: 0 1rem;
            max-height: 500px;
          }
          
          .back-actions {
            padding: 0.5rem 1rem 1rem;
          }
        }
      `}</style>

      <div className="cyber-grid" />

      <nav className="top-nav">
        <div className="nav-inner">
          <button className="nav-btn back" onClick={() => router.back()} aria-label="Go Back">
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>

          <div className="nav-title">{departmentData.title || 'Events'}</div>

          <a className="nav-btn contact" href="/contact" aria-label="Contact page">
            <MessageCircle className="w-5 h-5" />
            <span>Contact</span>
          </a>
        </div>
      </nav>

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
        
        
      </section>

      <main className="events-grid" data-section="events">
        { (departmentData.events || []).map((event: any, index: number) => {
          const title = event.title || 'Event';
          const shortDesc = (event.description || '').slice(0, 100);
          const image = event.image || '/innoverse.jpg';
          const status = (event.status as string) || 'open';
          const registrationLink = event.routerName ? `/${departmentData.routerName}/${event.routerName}` : '#';
          const isFlipped = flippedCards.has(index);

          return (
            <article 
              key={`${departmentData.routerName}-${index}`}
              className={`flip-card ${loadedSections.has('events') ? 'loaded' : ''}`}>
              
              <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                {/* Front of card */}
                <div className="flip-card-front">
                  <div className="card-image-container">
                    <img 
                      src={image} 
                      alt={title}
                      className="card-image"
                    />
                  </div>
                  
                  <div className="card-content">
                    <StatusIndicator status={status} />
                    <h3 className="card-title">{title}</h3>
                    <p className="card-description">{shortDesc}...</p>
                    
                    <div className="card-actions">
                      <button 
                        onClick={() => toggleCardFlip(index)}
                        className="btn-flip"
                      >
                        <RotateCcw className="w-4 h-4 mr-2" />
                        View Guidelines
                      </button>
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div className="flip-card-back">
                  <div className="back-header">
                    <button 
                      onClick={() => toggleCardFlip(index)}
                      className="btn-back"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                    <h3 className="back-title">{title}</h3>
                  </div>
                  
                  <div className="guidelines-container">
                    {event.guidelines && (
                      <div className="guidelines">
                        <div className="guidelines-grid">
                          {event.guidelines.team && (
                            <div className="guideline-item">
                              <span className="guideline-label">Team</span>
                              <span className="guideline-value">{event.guidelines.team}</span>
                            </div>
                          )}
                          {event.guidelines.presentation && (
                            <div className="guideline-item">
                              <span className="guideline-label">Duration</span>
                              <span className="guideline-value">{event.guidelines.presentation}</span>
                            </div>
                          )}
                          {event.guidelines.platform && (
                            <div className="guideline-item">
                              <span className="guideline-label">Platform</span>
                              <span className="guideline-value">{event.guidelines.platform}</span>
                            </div>
                          )}
                          {event.guidelines.languages && (
                            <div className="guideline-item">
                              <span className="guideline-label">Languages</span>
                              <span className="guideline-value">{event.guidelines.languages}</span>
                            </div>
                          )}
                          {event.guidelines.tech && (
                            <div className="guideline-item">
                              <span className="guideline-label">Tech Stack</span>
                              <span className="guideline-value">{event.guidelines.tech}</span>
                            </div>
                          )}
                          {event.guidelines.game && (
                            <div className="guideline-item">
                              <span className="guideline-label">Game</span>
                              <span className="guideline-value">{event.guidelines.game}</span>
                            </div>
                          )}
                          {event.guidelines.judging && (
                            <div className="guideline-item full-width">
                              <span className="guideline-label">Judging Criteria</span>
                              <span className="guideline-value">{event.guidelines.judging}</span>
                            </div>
                          )}
                          {event.guidelines.eligibility && (
                            <div className="guideline-item">
                              <span className="guideline-label">Eligibility</span>
                              <span className="guideline-value">{event.guidelines.eligibility}</span>
                            </div>
                          )}
                          {event.guidelines.rewards && (
                            <div className="guideline-item">
                              <span className="guideline-label">Rewards</span>
                              <span className="guideline-value">{event.guidelines.rewards}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="back-actions">
                    <a href={departmentData.registrationPdf || '#'} className="btn-register">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Register Now
                    </a>
                    <a 
                      href={event.guidelinesPdf || departmentData.guidelinesPdf || '#'} 
                      className="btn-guidelines"
                      target="_blank" 
                      rel="noreferrer"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      PDF Guidelines
                    </a>
                  </div>
                </div>
              </div>
            </article>
          );
        }) }
      </main>

      <div className="floating-actions">
       
        
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