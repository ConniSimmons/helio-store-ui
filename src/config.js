const dev = {
  STRIPE_KEY: "pk_test_51HBWwQB9gpM4m6JhC2DvA6b1ikbkSya9j1QGzhC4piopXkqfMhIgsViu06CrfQuw7dawvsUg8K55pXwGM8sCUKcr00s1M70zrM",
  s3: {
    REGION: "us-east-2",
    BUCKET: "helio-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://vj108c71gl.execute-api.us-east-2.amazonaws.com/prodL"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_qAWZUOFI3",
    APP_CLIENT_ID: "2c5vihmb1aopk9hra92h8b0qa",
    IDENTITY_POOL_ID: "us-east-2:f7f41c2e-10f0-4e55-93a4-b13b5f084df7"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51HBWwQB9gpM4m6JhC2DvA6b1ikbkSya9j1QGzhC4piopXkqfMhIgsViu06CrfQuw7dawvsUg8K55pXwGM8sCUKcr00s1M70zrM",
  s3: {
    REGION: "us-east-2",
    BUCKET: "helio-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://iqu23cn0ci.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_y5OOTZUEe",
    APP_CLIENT_ID: "559lhlj3fhmg97v6b7n9qp90f4",
    IDENTITY_POOL_ID: "us-east-2:37bcf70f-25d0-4a0f-b7d9-29c1b81761fd"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
