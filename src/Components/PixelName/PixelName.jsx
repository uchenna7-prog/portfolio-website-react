// PixelHero.jsx
import React, { useEffect, useState } from "react";
import "./Pixel.css";

const lettersData = {
  U: [
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0],
  ],
  C: [
    [0,1,1,1,1],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [0,1,1,1,1],
  ],
  H: [
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,1,1,1,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
  ],
  E: [
    [1,1,1,1,1],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,1,1,1,1],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,1,1,1,1],
  ],
  N: [
    [1,0,0,0,1],
    [1,1,0,0,1],
    [1,0,1,0,1],
    [1,0,0,1,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
  ],
  A: [
    [0,0,1,0,0],
    [0,1,0,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,1,1,1,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
  ],
};

// Define realistic drawing paths for each letter
const drawingPaths = {
  U: [
    // Left stroke (top to bottom)
    {x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}, {x: 0, y: 3}, {x: 0, y: 4}, {x: 0, y: 5},
    // Bottom curve
    {x: 1, y: 6}, {x: 2, y: 6}, {x: 3, y: 6},
    // Right stroke (bottom to top)
    {x: 4, y: 5}, {x: 4, y: 4}, {x: 4, y: 3}, {x: 4, y: 2}, {x: 4, y: 1}, {x: 4, y: 0},
  ],
  C: [
    // Top curve (right to left)
    {x: 4, y: 0}, {x: 3, y: 0}, {x: 2, y: 0}, {x: 1, y: 0},
    // Left stroke (top to bottom)
    {x: 0, y: 1}, {x: 0, y: 2}, {x: 0, y: 3}, {x: 0, y: 4}, {x: 0, y: 5},
    // Bottom curve (left to right)
    {x: 1, y: 6}, {x: 2, y: 6}, {x: 3, y: 6}, {x: 4, y: 6},
  ],
  H: [
    // Left stroke (top to bottom)
    {x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}, {x: 0, y: 3}, {x: 0, y: 4}, {x: 0, y: 5}, {x: 0, y: 6},
    // Middle bar (left to right)
    {x: 1, y: 3}, {x: 2, y: 3}, {x: 3, y: 3},
    // Right stroke (top to bottom)
    {x: 4, y: 0}, {x: 4, y: 1}, {x: 4, y: 2}, {x: 4, y: 3}, {x: 4, y: 4}, {x: 4, y: 5}, {x: 4, y: 6},
  ],
  E: [
    // Left stroke (top to bottom)
    {x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}, {x: 0, y: 3}, {x: 0, y: 4}, {x: 0, y: 5}, {x: 0, y: 6},
    // Top bar (left to right)
    {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 4, y: 0},
    // Middle bar (left to right)
    {x: 1, y: 3}, {x: 2, y: 3}, {x: 3, y: 3}, {x: 4, y: 3},
    // Bottom bar (left to right)
    {x: 1, y: 6}, {x: 2, y: 6}, {x: 3, y: 6}, {x: 4, y: 6},
  ],
  N: [
    // Left stroke (top to bottom)
    {x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}, {x: 0, y: 3}, {x: 0, y: 4}, {x: 0, y: 5}, {x: 0, y: 6},
    // Diagonal (top-left to bottom-right)
    {x: 1, y: 1}, {x: 2, y: 2}, {x: 3, y: 3},
    // Right stroke (top to bottom)
    {x: 4, y: 0}, {x: 4, y: 1}, {x: 4, y: 2}, {x: 4, y: 3}, {x: 4, y: 4}, {x: 4, y: 5}, {x: 4, y: 6},
  ],
  A: [
    // Left stroke (top to bottom)
    {x: 2, y: 0}, {x: 1, y: 1}, {x: 0, y: 2}, {x: 0, y: 3}, {x: 0, y: 4}, {x: 0, y: 5}, {x: 0, y: 6},
    // Middle bar (left to right)
    {x: 1, y: 4}, {x: 2, y: 4}, {x: 3, y: 4},
    // Right stroke (bottom to top)
    {x: 4, y: 6}, {x: 4, y: 5}, {x: 4, y: 4}, {x: 4, y: 3}, {x: 4, y: 2}, {x: 3, y: 1},
  ],
};

const PixelComponent = ({ char, charIdx, pixelsOn }) => {
  const letter = lettersData[char];
  if (!letter) return null;

  return (
    <div className="letter">
      {letter.map((row, y) => (
        <div className="row" key={y}>
          {row.map((v, x) => {
            const isOn = pixelsOn.some(
              p => p && p.charIdx === charIdx && p.x === x && p.y === y
            );
            return (
              <div
                key={x}
                className={`pixel ${isOn ? "on" : ""}`}
                style={{
                  transition: "opacity 0.15s ease, transform 0.15s ease",
                  transform: isOn ? "scale(1)" : "scale(0.8)",
                  opacity: isOn ? 1 : 0,
                }}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default function PixelHero({ onFinish }) {
  const text = "UCHENNA";
  const [pixelsOn, setPixelsOn] = useState([]);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const drawingSequence = [];
    
    // Build the complete drawing sequence
    text.split("").forEach((char, charIdx) => {
      const path = drawingPaths[char];
      if (!path) return;
      
      path.forEach(coord => {
        drawingSequence.push({ charIdx, x: coord.x, y: coord.y });
      });
      
      // Add a small pause between letters
      if (charIdx < text.length - 1) {
        drawingSequence.push(null); // null = pause marker
      }
    });

    // Animate the drawing
    let currentIndex = 0;
    const baseDelay = 30; // milliseconds per pixel
    const pauseDelay = 150; // pause between letters

    const drawNext = () => {
      if (currentIndex >= drawingSequence.length) {
        setFinished(true);
        return;
      }

      const pixel = drawingSequence[currentIndex];
      
      if (pixel === null) {
        // Pause between letters
        setTimeout(() => {
          currentIndex++;
          drawNext();
        }, pauseDelay);
      } else {
        // Draw pixel
        setPixelsOn(prev => [...prev, pixel]);
        setTimeout(() => {
          currentIndex++;
          drawNext();
        }, baseDelay);
      }
    };

    drawNext();
  }, [text]);

  // Trigger onFinish after zoom/fade animation ends
  useEffect(() => {
    if (finished) {
      const timer = setTimeout(() => {
        if (onFinish) onFinish();
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [finished, onFinish]);

  return (
    <div className={`pixel-container ${finished ? "finish" : ""}`}>
      {text.split("").map((char, ci) => (
        <PixelComponent key={ci} char={char} charIdx={ci} pixelsOn={pixelsOn} />
      ))}
    </div>
  );
}

// ---------------------------------------------
// Pixel.css
// ---------------------------------------------
