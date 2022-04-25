module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('dzrqpbrpv'),
        api_key: env('316115841284142'),
        api_secret: env('btuLMK4xsgi3OUNdlwRJXRlDJPQ'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // ...
});
