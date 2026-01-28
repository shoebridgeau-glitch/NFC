/// <reference types="vite/client" />

// Declare Figma asset imports
declare module 'figma:asset/*' {
  const value: string;
  export default value;
}
