import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

//deploy on github pages docs
//https://dev.to/shrinivasv73/how-to-deploy-reactjs-apps-built-using-vite-on-github-pages-38bi

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin()],
    base: '/WebMouseTester/',
    server: {
        port: 54093,
    }
})