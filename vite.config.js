import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createProxyMiddleware } from 'http-proxy-middleware';

export default defineConfig({
  server: {
    middleware: [
      createProxyMiddleware({
        target: 'https://yehgs.co.uk',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/': '/',
          '^/assets': '/assets',
        },
        router: function (req) {
          // Condition to redirect only when the request is for www.yehgs.co.uk
          if (
            req.headers.host &&
            req.headers.host.startsWith('www.yehgs.co.uk')
          ) {
            return 'https://yehgs.co.uk';
          }
          return null;
        },
      }),
    ],
  },
  plugins: [react()],
});
