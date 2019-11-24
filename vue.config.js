module.exports = {
  devServer: {
    proxy: {
      '^/v1/me': {
        target: process.env.SPOTIFY_API_URL,
        ws: true,
        changeOrigin: true
      },
      '^/api': {
        target: process.env.VIBE_API_URL,
        ws: true,
        changeOrigin: true
      },
      '^/authorize': {
        target: process.env.SPOTIFY_AUTH_URL,
        ws: true,
        changeOrigin: true
      }
    }
  }
};
