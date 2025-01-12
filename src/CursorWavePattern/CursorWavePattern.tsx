import React, { useState, useEffect, useCallback } from 'react';

interface Dot {
  x: number;
  y: number;
  size: number;
  opacity: number;
}

interface CursorWavePatternProps {
  gridSize?: number;
  spacing?: number;
  waveSpeed?: number;
  primaryWaveFrequency?: number;
  secondaryWaveFrequency?: number;
  cursorInfluenceRadius?: number;
  backgroundColor?: string;
  dotColor?: string;
}

const CursorWavePattern: React.FC<CursorWavePatternProps> = ({
  gridSize = 20,
  spacing = 40,
  waveSpeed = 0.05,
  primaryWaveFrequency = 0.05,
  secondaryWaveFrequency = 0.02,
  cursorInfluenceRadius = 200,
  backgroundColor = 'rgb(17, 24, 39)',
  dotColor = 'rgb(96, 165, 250)'
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(0);
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    
    const animate = () => {
      setTime(prev => prev + waveSpeed);
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [waveSpeed]);

  const calculateWaveOffset = useCallback((x: number, y: number, time: number) => {
    const dx = x - mousePosition.x;
    const dy = y - mousePosition.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    const wave1 = Math.sin(distance * primaryWaveFrequency - time) * 15;
    const wave2 = Math.sin(distance * secondaryWaveFrequency - time * 0.5) * 10;
    const cursorEffect = Math.max(0, 1 - distance / cursorInfluenceRadius) * 20;
    
    return wave1 + wave2 + cursorEffect;
  }, [mousePosition, primaryWaveFrequency, secondaryWaveFrequency, cursorInfluenceRadius]);

  useEffect(() => {
    const generateDots = () => {
      const newDots: Dot[] = [];
      const offset = (gridSize * spacing) / 2;

      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          const baseX = mousePosition.x - offset + (i * spacing);
          const baseY = mousePosition.y - offset + (j * spacing);
          const waveOffset = calculateWaveOffset(baseX, baseY, time);
          
          const x = baseX;
          const y = baseY + waveOffset;
          const distance = Math.sqrt(
            Math.pow((mousePosition.x - x), 2) + 
            Math.pow((mousePosition.y - y), 2)
          );
          
          const size = Math.max(3, 8 - (distance / 100));
          const opacity = Math.max(0.2, 1 - (distance / 400));

          newDots.push({ x, y, size, opacity });
        }
      }
      setDots(newDots);
    };

    generateDots();
  }, [mousePosition, time, calculateWaveOffset, gridSize, spacing]);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor,
      overflow: 'hidden'
    }}>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <div 
          style={{
            position: 'fixed',
            width: '24px',
            height: '24px',
            backgroundColor: dotColor,
            borderRadius: '50%',
            pointerEvents: 'none',
            transform: `translate(${mousePosition.x - 12}px, ${mousePosition.y - 12}px)`,
            transition: 'transform 0.1s ease-out',
            boxShadow: `0 0 20px ${dotColor}80`
          }}
        />
        
        {dots.map((dot, index) => (
          <div
            key={index}
            style={{
              position: 'fixed',
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              transform: `translate(${dot.x - dot.size/2}px, ${dot.y - dot.size/2}px)`,
              backgroundColor: dotColor,
              borderRadius: '50%',
              opacity: dot.opacity,
              pointerEvents: 'none',
              transition: 'opacity 0.2s ease-out'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CursorWavePattern;