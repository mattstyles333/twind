module.exports = {
  apps: [{
    name: "static-server",
    script: "serve",
    env: {
      PM2_SERVE_PATH: './twind/src',
      PM2_SERVE_PORT: 3000,
      PM2_SERVE_SPA: 'true',
      PM2_SERVE_HOMEPAGE: '/index.html'
    }
  }]
} 