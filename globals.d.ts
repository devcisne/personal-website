export {};

interface TagCanvasOptions {
  textColour: string;
  depth: number;
  outlineMethod: string;
  initial: [number, number];
  noSelect: boolean;
  wheelZoom: boolean;
  // Add other options as needed based on the TagCanvas library
}

interface TagCanvas {
  Start: (canvasId: string, tagsId: string, options: TagCanvasOptions) => boolean;
  // Add other methods as needed based on the TagCanvas library
}

declare global {
  interface Window {
    TagCanvas: TagCanvas | undefined;
  }
}
