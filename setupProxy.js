import { createProxyMiddleware } from 'http-proxy-middleware'

export default function(app) {
  app.use(createProxyMiddleware('/api/', // replace with your endpoint
    { target: 'http://localhost:3003' } // replace with your target
  ))
}