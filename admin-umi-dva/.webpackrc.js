export default {
  "publicPath": "/static/",
  "proxy": {
    "/user": {
      "target": "http://localhost:3456",
      // "changeOrigin": true
    }
  },
}
