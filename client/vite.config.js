export default {
    server: {
      proxy: {
        '/weather': 'http://localhost:3000',
      },
    },
};
  