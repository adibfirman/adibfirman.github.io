"use client";

import { useEffect, useRef } from "react";

export function SubHeader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.scale(dpr, dpr);
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
    };

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      // Responsive scaling factors
      const isMobile = width < 768;
      const amplitudeScale = isMobile ? 0.4 : 0.6;
      const particleCount = isMobile ? 8 : 12;

      // Calm, slow breathing effect
      const breathe = Math.sin(time * 0.008) * 0.3 + 0.7;
      const slowPulse = Math.sin(time * 0.003) * 0.2 + 0.8;

      // Serene color palette - deep blues, muted greys
      const colors = [
        `hsl(220, 25%, ${18 + Math.sin(time * 0.002) * 2}%)`, // Deep blue-grey
        `hsl(210, 20%, ${22 + Math.cos(time * 0.0015) * 3}%)`, // Muted blue
        `hsl(200, 15%, ${26 + Math.sin(time * 0.0018) * 2}%)`, // Soft steel blue
        `hsl(230, 18%, ${20 + Math.cos(time * 0.0012) * 2}%)`, // Dark periwinkle
        `hsl(190, 12%, ${24 + Math.sin(time * 0.0025) * 2}%)`, // Slate blue
      ];

      const getColorWithAlpha = (color: string, alpha: number) => {
        return color.replace("hsl(", "hsla(").replace(")", `, ${alpha})`);
      };

      // Gentle ambient background glow
      ctx.globalCompositeOperation = "screen";
      for (let i = 0; i < 3; i++) {
        const centerX = width * (0.4 + Math.sin(time * 0.001 + i * 2) * 0.2);
        const centerY = height * (0.5 + Math.cos(time * 0.0008 + i * 2) * 0.15);

        const ambientGradient = ctx.createRadialGradient(
          centerX,
          centerY,
          0,
          centerX,
          centerY,
          Math.max(width, height) * (0.6 + Math.sin(time * 0.002 + i) * 0.1),
        );
        ambientGradient.addColorStop(
          0,
          getColorWithAlpha(colors[i % colors.length], 0.08 * breathe),
        );
        ambientGradient.addColorStop(
          0.4,
          getColorWithAlpha(colors[(i + 1) % colors.length], 0.04 * breathe),
        );
        ambientGradient.addColorStop(1, "transparent");

        ctx.fillStyle = ambientGradient;
        ctx.fillRect(0, 0, width, height);
      }

      ctx.globalCompositeOperation = "multiply";

      // Gentle flowing waves - much calmer
      const layers = [
        {
          colorIdx: 0,
          speed: 0.006,
          amplitude: 20 * amplitudeScale,
          offset: 0,
        },
        {
          colorIdx: 1,
          speed: 0.004,
          amplitude: 25 * amplitudeScale,
          offset: Math.PI / 2,
        },
        {
          colorIdx: 2,
          speed: 0.005,
          amplitude: 18 * amplitudeScale,
          offset: Math.PI,
        },
      ];

      layers.forEach((layer, index) => {
        const gradient = ctx.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(
          0,
          getColorWithAlpha(colors[layer.colorIdx], 0.3 * slowPulse),
        );
        gradient.addColorStop(
          0.5,
          getColorWithAlpha(
            colors[(layer.colorIdx + 1) % colors.length],
            0.5 * slowPulse,
          ),
        );
        gradient.addColorStop(
          1,
          getColorWithAlpha(
            colors[(layer.colorIdx + 2) % colors.length],
            0.2 * slowPulse,
          ),
        );

        ctx.fillStyle = gradient;
        ctx.beginPath();

        const points = [];
        for (let x = 0; x <= width + 20; x += 20) {
          const normalizedX = x / width;
          const waveY =
            height / 2 +
            Math.sin(
              normalizedX * Math.PI * 2 + time * layer.speed + layer.offset,
            ) *
              layer.amplitude *
              breathe +
            Math.sin(
              normalizedX * Math.PI + time * layer.speed * 0.5 + layer.offset,
            ) *
              (layer.amplitude * 0.4) *
              breathe;
          points.push([x, waveY]);
        }

        ctx.moveTo(0, height);
        points.forEach(([x, y]) => ctx.lineTo(x, y));
        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fill();
      });

      // Soft floating particles - like gentle fireflies
      ctx.globalCompositeOperation = "screen";
      for (let i = 0; i < particleCount; i++) {
        const particleTime = time * 0.5 + i * 100;
        const x =
          width * 0.2 + Math.sin(particleTime * 0.003 + i) * width * 0.6;
        const y =
          height * 0.3 +
          Math.cos(particleTime * 0.002 + i * 0.7) * height * 0.4;

        const size =
          (Math.sin(particleTime * 0.008) + 1) * (isMobile ? 0.8 : 1.2) + 0.3;
        const alpha =
          (Math.abs(Math.sin(particleTime * 0.005)) * 0.4 + 0.1) * breathe;

        // Soft particle glow
        const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, size * 8);
        glowGradient.addColorStop(
          0,
          getColorWithAlpha(colors[i % colors.length], alpha),
        );
        glowGradient.addColorStop(
          0.3,
          getColorWithAlpha(colors[(i + 1) % colors.length], alpha * 0.5),
        );
        glowGradient.addColorStop(1, "transparent");

        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(x, y, size * 8, 0, Math.PI * 2);
        ctx.fill();

        // Gentle core
        ctx.fillStyle = getColorWithAlpha(
          colors[(i + 2) % colors.length],
          alpha * 1.5,
        );
        ctx.beginPath();
        ctx.arc(x, y, size * 0.8, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";
      time += 0.5; // Slower time progression for calmer feel
      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener("resize", handleResize);

    // Handle orientation change on mobile
    window.addEventListener("orientationchange", () => {
      setTimeout(resizeCanvas, 100);
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return (
    <div
      className="relative min-h-[40svh] sm:min-h-[50svh] w-full overflow-hidden"
      style={{
        background: `linear-gradient(135deg, 
          hsl(220, 30%, 8%) 0%, 
          hsl(210, 25%, 12%) 25%, 
          hsl(200, 20%, 10%) 50%, 
          hsl(230, 25%, 9%) 75%, 
          hsl(220, 30%, 8%) 100%
        )`,
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
        style={{ width: "100%", height: "100%", display: "block" }}
      />
      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-left z-10 max-w-3xl mx-auto">
        <div className="text-left pr-6 xs:mt-20 sm:pr-8 md:pr-12 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-heading">
            Hello, I'm Adib! 👋
          </h1>
          <p className="text-lg sm:text-xl md:text-lg text-gray-300 leading-relaxed font-body">
            A passionate software developer crafting digital experiences with
            modern web technologies. Welcome to my corner of the internet where
            I share my journey, projects, and thoughts on development.
          </p>
        </div>
      </div>

      {/* Linear gradient overlay at bottom */}
      <div
        className="absolute bottom-0 left-0 w-full h-32 z-5"
        style={{
          background: `linear-gradient(180deg, transparent 0%, hsla(210, 20%, 8%, 0.3) 30%, hsla(220, 25%, 10%, 0.6) 50%, #101828 100%)`,
        }}
      />
    </div>
  );
}
