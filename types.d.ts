declare module 'vite-plugin-eslint' {
  import { Plugin } from 'vite';
  const eslint: () => Plugin;
  export default eslint;
}