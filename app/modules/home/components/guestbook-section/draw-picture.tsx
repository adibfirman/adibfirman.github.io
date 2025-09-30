import { useRef, useEffect, useState } from "react";
import {
  Palette,
  PaintBrushHousehold,
  TrashSimple,
  Circle,
} from "phosphor-react";

export function DrawPicture() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [strokeColor, setStrokeColor] = useState("#000000");
  const [lineWidth, setLineWidth] = useState(2);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number } | null>(
    null,
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";
    ctx.strokeStyle = strokeColor;
  }, [strokeColor, lineWidth]);

  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      const rect = container.getBoundingClientRect();
      const aspectRatio = 800 / 600; // original aspect ratio
      canvas.width = Math.min(rect.width, 800);
      canvas.height = canvas.width / aspectRatio;

      // Redraw if needed, but since we clear on resize, maybe not necessary
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const scaleX = canvas.width / canvas.offsetWidth;
    const scaleY = canvas.height / canvas.offsetHeight;
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX * scaleX, e.nativeEvent.offsetY * scaleY);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const scaleX = canvas.width / canvas.offsetWidth;
    const scaleY = canvas.height / canvas.offsetHeight;
    ctx.lineTo(e.nativeEvent.offsetX * scaleX, e.nativeEvent.offsetY * scaleY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const startDrawingTouch = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / canvas.offsetWidth;
    const scaleY = canvas.height / canvas.offsetHeight;
    const x = (e.touches[0].clientX - rect.left) * scaleX;
    const y = (e.touches[0].clientY - rect.top) * scaleY;
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const drawTouch = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / canvas.offsetWidth;
    const scaleY = canvas.height / canvas.offsetHeight;
    const x = (e.touches[0].clientX - rect.left) * scaleX;
    const y = (e.touches[0].clientY - rect.top) * scaleY;
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawingTouch = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    setIsDrawing(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    draw(e);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left - lineWidth / 2,
      y: e.clientY - rect.top - lineWidth / 2,
    });
  };

  const handleMouseEnter = () => {
    // Cursor will be set on move
  };

  const handleMouseLeave = () => {
    setCursorPos(null);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const saveCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "drawing.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <section>
      <div className="flex flex-row justify-between mb-3">
        <div className="flex gap-x-2">
          <label className="cursor-pointer border rounded py-1 px-2">
            <PaintBrushHousehold size={20} />
            <input
              type="color"
              value={strokeColor}
              className="hidden"
              onChange={(e) => setStrokeColor(e.target.value)}
            />
          </label>

          <label className="cursor-pointer border rounded py-1 px-2">
            <Palette size={20} />
            <input
              type="color"
              value={bgColor}
              className="hidden"
              onChange={(e) => setBgColor(e.target.value)}
            />
          </label>
        </div>

        <div className="flex gap-x-2">
          <div className="flex flex-row items-center">
            <Circle size={20} />
            <select
              value={lineWidth}
              className="cursor-pointer"
              onChange={(e) => setLineWidth(Number(e.target.value))}
            >
              <option className="bg-gray-900 border-0 cursor-pointer" value={2}>
                2px
              </option>
              <option className="bg-gray-900 border-0 cursor-pointer" value={5}>
                5px
              </option>
              <option className="bg-gray-900 border-0 cursor-pointer" value={8}>
                8px
              </option>
              <option
                className="bg-gray-900 border-0 cursor-pointer"
                value={13}
              >
                13px
              </option>
              <option
                className="bg-gray-900 border-0 cursor-pointer"
                value={20}
              >
                21px
              </option>
            </select>
          </div>

          <button
            onClick={clearCanvas}
            className="cursor-pointer border rounded py-1 px-2"
          >
            <TrashSimple size={20} />
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="mb-4 relative w-full max-w-4xl mx-auto"
      >
        <canvas
          ref={canvasRef}
          className="rounded overflow-hidden w-full h-auto"
          style={{ backgroundColor: bgColor, cursor: "none" }}
          onMouseDown={startDrawing}
          onMouseMove={handleMouseMove}
          onMouseUp={stopDrawing}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={startDrawingTouch}
          onTouchMove={drawTouch}
          onTouchEnd={stopDrawingTouch}
        />
        {cursorPos && (
          <div
            className="absolute pointer-events-none rounded-full border border-gray-400"
            style={{
              left: cursorPos.x,
              top: cursorPos.y,
              width: lineWidth,
              height: lineWidth,
              backgroundColor: strokeColor,
            }}
          />
        )}
      </div>
    </section>
  );
}
