import React, { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  backgroundImage: string;
  children?: React.ReactNode;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ backgroundImage, children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to match container
    const resizeCanvas = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };

    // Initial resize
    resizeCanvas();

    // Handle window resize
    window.addEventListener('resize', resizeCanvas);

    // Load background image
    const bgImage = new Image();
    bgImage.src = backgroundImage;
    bgImage.onload = () => {
      // Stars array with more stars and added movement properties
      const stars: { x: number; y: number; size: number; speed: number; direction: number }[] = [];
      
      // Create more stars with movement properties
      for (let i = 0; i < 200; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.05 + 0.01, // Very subtle speed
          direction: Math.random() * Math.PI * 2 // Random direction in radians
        });
      }

      // Shooting stars array
      const shootingStars: {
        x: number;
        y: number;
        length: number;
        speed: number;
        angle: number;
        opacity: number;
        active: boolean;
        trail: { x: number; y: number }[];
      }[] = [];

      // Create shooting stars (initially inactive)
      for (let i = 0; i < 5; i++) {
        shootingStars.push({
          x: 0,
          y: 0,
          length: Math.random() * 80 + 50,
          speed: Math.random() * 10 + 5,
          angle: Math.random() * Math.PI / 4 + Math.PI / 4, // Angle between PI/4 and PI/2
          opacity: 0,
          active: false,
          trail: []
        });
      }

      // Animation variables
      let lastTime = 0;
      let shootingStarTimer = 0;
      const shootingStarInterval = 3000; // New shooting star every 3 seconds

      // Animation function
      const animate = (timestamp: number) => {
        // Calculate delta time
        const deltaTime = timestamp - lastTime;
        lastTime = timestamp;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw background image
        ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);

        // Update and draw stars with subtle movement
        stars.forEach(star => {
          // Move star slightly in its direction
          star.x += Math.cos(star.direction) * star.speed;
          star.y += Math.sin(star.direction) * star.speed;
          
          // Wrap stars around edges
          if (star.x < 0) star.x = canvas.width;
          if (star.x > canvas.width) star.x = 0;
          if (star.y < 0) star.y = canvas.height;
          if (star.y > canvas.height) star.y = 0;
          
          // Twinkle effect
          const twinkle = Math.sin(timestamp * 0.001 + star.x) * 0.2 + 0.8;
          
          ctx.fillStyle = `rgba(255, 255, 255, ${twinkle})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fill();
        });

        // Update shooting star timer
        shootingStarTimer += deltaTime;
        if (shootingStarTimer > shootingStarInterval) {
          // Activate a random inactive shooting star
          const inactiveStars = shootingStars.filter(star => !star.active);
          if (inactiveStars.length > 0) {
            const star = inactiveStars[Math.floor(Math.random() * inactiveStars.length)];
            star.x = Math.random() * canvas.width * 0.3 + canvas.width * 0.1;
            star.y = Math.random() * canvas.height * 0.3;
            star.angle = Math.random() * Math.PI / 4 + Math.PI / 4;
            star.opacity = 1;
            star.active = true;
            star.trail = [];
          }
          shootingStarTimer = 0;
        }

        // Update and draw shooting stars
        shootingStars.forEach(star => {
          if (!star.active) return;

          // Move shooting star
          star.x += Math.cos(star.angle) * star.speed;
          star.y += Math.sin(star.angle) * star.speed;

          // Add to trail
          star.trail.push({ x: star.x, y: star.y });
          if (star.trail.length > 20) {
            star.trail.shift();
          }

          // Draw shooting star trail
          if (star.trail.length > 1) {
            ctx.beginPath();
            ctx.moveTo(star.trail[0].x, star.trail[0].y);
            
            for (let i = 1; i < star.trail.length; i++) {
              ctx.lineTo(star.trail[i].x, star.trail[i].y);
            }
            
            const gradient = ctx.createLinearGradient(
              star.trail[0].x, star.trail[0].y,
              star.x, star.y
            );
            gradient.addColorStop(0, `rgba(255, 255, 255, 0)`);
            gradient.addColorStop(1, `rgba(255, 255, 255, ${star.opacity})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;
            ctx.stroke();
          }

          // Draw shooting star head
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, 2, 0, Math.PI * 2);
          ctx.fill();

          // Check if shooting star is out of bounds
          if (star.x > canvas.width || star.y > canvas.height) {
            star.active = false;
          }
        });

        // Request next frame
        requestAnimationFrame(animate);
      };

      // Start animation
      requestAnimationFrame(animate);
    };

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [backgroundImage]);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
        style={{ zIndex: -1 }}
      />
      {children}
    </div>
  );
};

export default AnimatedBackground;
