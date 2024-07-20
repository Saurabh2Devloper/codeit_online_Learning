import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   host: '192.168.0.106', // Replace 'your-local-ip' with your actual local IP address
  // },
  
  
  plugins: [react()]
})

