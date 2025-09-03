'use client';

import React, { useEffect, useRef } from "react";

interface TagCanvasOptions {
  textColour: string;
  depth: number;
  outlineMethod: string;
  initial: [number, number];
  noSelect: boolean;
  wheelZoom: boolean;
}

declare global {
  interface Window {
    TagCanvas: {
      Start: (canvasId: string, tagsId: string, options: TagCanvasOptions) => boolean;
    } | undefined;
  }
}

const TagCloud = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.TagCanvas) {
      try {
        const options: TagCanvasOptions = {
          textColour: "#00A8E8",
          depth: 0.99,
          outlineMethod: "none",
          initial: [0.07, 0.08],
          noSelect: true,
          wheelZoom: false,
        };

        window.TagCanvas.Start("myCanvas", "", options);
      } catch (e) {
        if (containerRef.current) {
          (containerRef.current as HTMLDivElement).style.display = "none";
        }
      }
    } else {
      if (containerRef.current) {
        (containerRef.current as HTMLDivElement).style.display = "none";
      }
    }
  }, []);

  return (
    <div
      ref={containerRef}
      id="myCanvasContainer"
      className="flex-auto sm:w-2/6 w-full my-auto h-[50vh] sm:h-4/6 py-12 sm:py-0"
    >
      <canvas
        ref={canvasRef}
        id="myCanvas"
        className="w-full h-full"
        aria-label="Skills tag cloud"
      >
        <ul>
          <li><a href="/">Java</a></li>
          <li><a href="/">Javascript</a></li>
          <li><a href="/">HTML</a></li>
          <li><a href="/">CSS</a></li>
          <li><a href="/">NodeJS</a></li>
          <li><a href="/">React</a></li>
          <li><a href="/">Python</a></li>
          <li><a href="/">Git</a></li>
          <li><a href="/">MongoDB</a></li>
          <li><a href="/">SQL</a></li>
          <li><a href="/">Spring Boot Framework</a></li>
          <li><a href="/">Docker</a></li>
        </ul>
      </canvas>
    </div>
  );
};

export default TagCloud;
