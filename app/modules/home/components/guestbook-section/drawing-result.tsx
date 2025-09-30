import { useState, useEffect } from "react";

const placeholderImages = [
  "/about-profile.png", // Example placeholders, replace with actual paths
  "/profile.jpg",
  "/neovim-logo.png",
];

export function DrawingResult() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % placeholderImages.length,
      );
    }, 3000); // Auto slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border border-gray-300 p-4 rounded">
      <h3 className="text-lg font-semibold mb-4">Result Preview</h3>
      <div className="relative overflow-hidden w-full h-64">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {placeholderImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Preview ${index + 1}`}
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

