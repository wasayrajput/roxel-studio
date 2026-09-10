"use client";

import { useState, useRef, useCallback } from "react";
import { GripVertical } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeTitle?: string;
  afterTitle?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeTitle = "Before Redesign",
  afterTitle = "After Redesign (Roxel Studio)",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-slate-700 shadow-2xl"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt={afterTitle}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <span className="absolute top-4 right-4 bg-emerald-500/90 text-slate-950 font-bold text-xs px-3 py-1.5 rounded-lg shadow-md z-10">
        {afterTitle}
      </span>

      {/* Before Image (Clipped Overlay) */}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt={beforeTitle}
          className="absolute inset-0 w-full h-full object-cover max-w-none"
          style={{ width: containerRef.current?.getBoundingClientRect().width || "100%" }}
        />
        <span className="absolute top-4 left-4 bg-slate-900/90 text-white font-bold text-xs px-3 py-1.5 rounded-lg shadow-md z-10">
          {beforeTitle}
        </span>
      </div>

      {/* Divider Bar & Handle */}
      <div
        className="absolute inset-y-0 w-1 bg-white shadow-glow flex items-center justify-center pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-brand-cyan shadow-lg flex items-center justify-center text-brand-cyan">
          <GripVertical size={16} />
        </div>
      </div>
    </div>
  );
}
