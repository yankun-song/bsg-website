const awsConfig = {
  /** 
  oauth: {
    domain: "your_cognito_domain",
    scope: [
      "phone",
      "email",
      "profile",
      "openid",
      "aws.cognito.signin.user.admin",
    ],
    redirectSignIn: "http://localhost:3000/",
    redirectSignOut: "http://localhost:3000/",
    responseType: "code", // or 'token', note that REFRESH token will only be generated when the responseType is code
  },

  **/
  Auth: {
    // REQUIRED - Amazon Cognito Identity Pool ID
    identityPoolId: "us-east-1:fc2ed1cb-6499-4045-9a17-e3a0ee0c5b1c",
    // REQUIRED - Amazon Cognito Region
    region: "us-east-1",
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: "us-east-1_0EVwHFPm0",
    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: "7m39ip0e8kdbtvodk1o04vo0jm",
  },
  API: {
    endpoints: [
      {
        name: "users",
        endpoint: "http://jsonplaceholder.typicode.com/users",
      },
      {
        name: "program-active",
        endpoint: "https://my-bsg-json.s3.amazonaws.com/program-active.json",
      },
      {
        name: "business-bsg",
        endpoint: "https://my-bsg-json.s3.amazonaws.com/business-bsg.json",
      },
      {
        name: "case-study-bsg",
        endpoint:
          "https://my-bsg-json.s3.amazonaws.com/projects-case-study.json",
      },
      {
        name: "jobs-bsg",
        endpoint: "https://my-bsg-json.s3.amazonaws.com/jobs-bsg.json",
      },
      {
        name: "job-application",
        endpoint: "/api/pub/my-bsg-job-application",
      },
      {
        name: "events-bsg",
        endpoint: "https://my-bsg-json.s3.amazonaws.com/events-bsg.json",
      },
      {
        name: "event-registration",
        endpoint: "/api/pub/my-bsg-event-registration",
      },
      {
        name: "industries",
        endpoint: "/api/pub2/industries",
      },
      {
        name: "online-inquiry",
        endpoint: "/api/pub/my-bsg-online-inquiry",
      },
      {
        name: "oauth-linkedin-profile",
        endpoint: "/api/pub/my-bsg-oauth-linkedin-profile",
      },
      {
        name: "oauth-linkedin-email",
        endpoint: "/api/pub/my-bsg-oauth-linkedin-email",
      },
    ],
  },

  /** 
    "aws_project_region": "us-east-1",
    "aws_appsync_graphqlEndpoint": "https://pjegt6bnmrh6fgomlma2c33q5a.appsync-api.us-east-1.amazonaws.com/graphql",
    "aws_appsync_region": "us-east-1",
    "aws_appsync_authenticationType": "API_KEY",
    "aws_appsync_apiKey": "da2-plhzmtq7q5hxpedxqc5lcajltm",
    "aws_cognito_identity_pool_id": "us-east-1:fc2ed1cb-6499-4045-9a17-e3a0ee0c5b1c",
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_LqLeU1Wk3",
    "aws_user_pools_web_client_id": "5fel06v2t04quptp2ueg3v8413",
    "oauth": {

        "redirectSignIn": '',
        "redirectSignOut": ''

    }
    **/
};

export default awsConfig;
