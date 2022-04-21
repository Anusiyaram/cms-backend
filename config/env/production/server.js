  module.exports = ({ env }) => ({
    url: env('https://strapi-gatsby-postgresql-pro.herokuapp.com/'),
    proxy: true,
    app: {
        keys: env.array("APP_KEYS", ["EzgphHFZUdH4m3widbaitg==", "wNPsJTQcYdaL7xVEys8FDg==","lL0FeCw62mRKpY9z5Quagw==","vBJIuXsBEd3ssY9YYwJ0sQ=="]),
    },
  });