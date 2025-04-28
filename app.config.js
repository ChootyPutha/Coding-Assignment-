import 'dotenv/config';
export default {
    expo: {
      name: "Blotte App",
      slug: "/",
      version: "1.0.0",
      extra: {
        API_KEY: process.env.API_KEY,
        BASE_URL: process.env.BASE_URL,
      },
    },
  };