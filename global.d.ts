// global.d.ts
declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

export {};

declare global {
  interface Window {
    EXTENSION_LOGO_URL?: string;
  }
}
