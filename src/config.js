export default {
  STRIPE_KEY: "pk_test_51HBWwQB9gpM4m6JhC2DvA6b1ikbkSya9j1QGzhC4piopXkqfMhIgsViu06CrfQuw7dawvsUg8K55pXwGM8sCUKcr00s1M70zrM",
  MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-2",
      BUCKET: "helio-app-uploads"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://vj108c71gl.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_qAWZUOFI3",
      APP_CLIENT_ID: "2c5vihmb1aopk9hra92h8b0qa",
      IDENTITY_POOL_ID: "us-east-2:f7f41c2e-10f0-4e55-93a4-b13b5f084df7"
    }
  };