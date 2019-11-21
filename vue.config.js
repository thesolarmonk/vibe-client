module.exports = {
  devServer: {
    '^/v1': {
      target: process.env.SPOTIFY_API_URL,
      // ws: true,
      changeOrigin: true
    },
    '^/api': {
      target: process.env.VIBE_API_URL,
      // ws: true,
      changeOrigin: true
    }
  }
};
