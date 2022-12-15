/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  reactStrictMode: true,
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    BACKEND_URL: "http://localhost:8080",
  },
  staticPageGenerationTimeout: 160, // default is 60 seconds
  images: {
    domains: [
      "database.shodkk.com",
      "wild-puce-hippopotamus-hose.cyclic.app",
      "shodkk.com",
      "shodkk-blog.vercel.app",
      "images.unsplash.com",
      "cdn.pixabay.com",
      "www.google.com",
    ],
  },
});
