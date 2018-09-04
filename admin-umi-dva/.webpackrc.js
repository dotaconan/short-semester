export default {
  "publicPath": "/static/",
  "proxy": {
    "/user_api": {
      "target": "http://localhost:3456",
      // "changeOrigin": true
    },
    "/article_api": {
      "target": "http://localhost:3456",
      // "changeOrigin": true
    }
  },
}
