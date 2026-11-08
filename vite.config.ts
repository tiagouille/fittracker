import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import {VitePWA} from 'vite-plugin-pwa';
export default defineConfig({base:'./',plugins:[react(),tailwindcss(),VitePWA({registerType:'prompt',manifest:{name:'FitTracker',short_name:'FitTracker',lang:'fr',description:'À ton rythme',theme_color:'#10121b',background_color:'#10121b',display:'standalone',icons:[{src:'icon.svg',sizes:'any',type:'image/svg+xml',purpose:'any'}]},workbox:{globPatterns:['**/*.{js,css,html,svg,png}'],navigateFallback:'index.html'}})]});
