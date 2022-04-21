module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array("APP_KEYS", ["EzgphHFZUdH4m3widbaitg==", "wNPsJTQcYdaL7xVEys8FDg==","lL0FeCw62mRKpY9z5Quagw==","vBJIuXsBEd3ssY9YYwJ0sQ=="]),
  },
});
