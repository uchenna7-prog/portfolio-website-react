import React, { useEffect, useRef } from 'react';
import './Pixel.css';

export default function PixelHero() {
  const containerRef = useRef(null);

  const letters = {
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
      [1,1,1,1,1],
      [1,0,0,0,1],
      [1,0,0,0,1],
      [1,0,0,0,1],
      [1,0,0,0,1],
    ],
    E: [
      [1,1,1,1,1],
      [1,0,0,0,0],
      [1,1,1,1,0],
      [1,0,0,0,0],
      [1,1,1,1,0],
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
      [0,1,1,1,0],
      [1,0,0,0,1],
      [1,0,0,0,1],
      [1,1,1,1,1],
      [1,0,0,0,1],
      [1,0,0,0,1],
      [1,0,0,0,1],
    ],
  };

  const letterPaths = {
    U: [
      {x:0,y:0},{x:0,y:1},{x:0,y:2},{x:0,y:3},{x:0,y:4},{x:0,y:5},
      {x:1,y:6},{x:2,y:6},{x:3,y:6},
      {x:4,y:5},{x:4,y:4},{x:4,y:3},{x:4,y:2},{x:4,y:1},{x:4,y:0}
    ],
    C: [
      {x:4,y:0},{x:3,y:0},{x:2,y:0},{x:1,y:0},
      {x:0,y:1},{x:0,y:2},{x:0,y:3},{x:0,y:4},{x:0,y:5},
      {x:1,y:6},{x:2,y:6},{x:3,y:6},{x:4,y:6}
    ],
    H: [
      {x:0,y:0},{x:0,y:1},{x:0,y:2},{x:0,y:3},{x:0,y:4},{x:0,y:5},{x:0,y:6},
      {x:1,y:2},{x:2,y:2},{x:3,y:2},
      {x:4,y:0},{x:4,y:1},{x:4,y:2},{x:4,y:3},{x:4,y:4},{x:4,y:5},{x:4,y:6}
    ],
    E: [
      {x:0,y:0},{x:1,y:0},{x:2,y:0},{x:3,y:0},{x:4,y:0},
      {x:0,y:1},
      {x:0,y:2},{x:1,y:2},{x:2,y:2},{x:3,y:2},
      {x:0,y:3},
      {x:0,y:4},{x:1,y:4},{x:2,y:4},{x:3,y:4},
      {x:0,y:5},
      {x:0,y:6},{x:1,y:6},{x:2,y:6},{x:3,y:6},{x:4,y:6}
    ],
    N: [
      {x:0,y:0},{x:0,y:1},{x:0,y:2},{x:0,y:3},{x:0,y:4},{x:0,y:5},{x:0,y:6},
      {x:1,y:1},{x:2,y:2},{x:3,y:3},
      {x:4,y:0},{x:4,y:1},{x:4,y:2},{x:4,y:3},{x:4,y:4},{x:4,y:5},{x:4,y:6}
    ],
    A: [
      {x:1,y:0},{x:2,y:0},{x:3,y:0},
      {x:0,y:1},{x:4,y:1},
      {x:0,y:2},{x:4,y:2},
      {x:0,y:3},{x:1,y:3},{x:2,y:3},{x:3,y:3},{x:4,y:3},
      {x:0,y:4},{x:4,y:4},
      {x:0,y:5},{x:4,y:5},
      {x:0,y:6},{x:4,y:6}
    ]
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";
    const elements = [];
    const text = "UCHENNA";

    for (let char of text) {
      const pattern = letters[char];
      if (!pattern) continue;

      const letterDiv = document.createElement("div");
      letterDiv.className = "letter";

      const grid = [];

      pattern.forEach((row, r) => {
        const rowDiv = document.createElement("div");
        rowDiv.className = "row";
        grid[r] = [];

        row.forEach((v, c) => {
          const px = document.createElement("div");
          px.className = "pixel";
          if (v === 1) px.dataset.active = "1";
          rowDiv.appendChild(px);
          grid[r][c] = px;
        });

        letterDiv.appendChild(rowDiv);
      });

      container.appendChild(letterDiv);
      elements.push({ char, grid });
    }

    let l = 0;
    let p = 0;

    function draw() {
      if (l >= elements.length) return;

      const cur = elements[l];
      const path = letterPaths[cur.char];
      if (!path || p >= path.length) {
        l++; p = 0;
        if (l < elements.length) setTimeout(draw, 25);
        return;
      }

      const coord = path[p];
      const px = cur.grid[coord.y][coord.x];
      if (px && px.dataset.active === "1") {
        px.classList.add("on");
      }

      p++;
      setTimeout(draw, 25);
    }

    draw();
  }, []);

  return <div className="pixel-container" ref={containerRef}></div>;
}
