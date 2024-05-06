import { defineConfig } from 'vite';
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
        },
        router: function (req) {
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
});
