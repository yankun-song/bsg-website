import React, { useState } from 'react';
import Amplify, { Auth, API } from 'aws-amplify';
import { AmplifyAuthenticator, withAuthenticator } from '@aws-amplify/ui-react';

import { AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
/** */  
Amplify.configure({

    Auth: {
  
        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        identityPoolId: 'us-east-1:8808900b-c623-4bf1-87c7-c49d5a8b5209',
  
        // REQUIRED - Amazon Cognito Region
        region: 'us-east-1',
  
        // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
        // Required only if it's different from Amazon Cognito Region
        identityPoolRegion: 'us-east-1',
  
        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'us-east-1_0EVwHFPm0',
  
        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: '7m39ip0e8kdbtvodk1o04vo0jm',
  
        // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
        mandatorySignIn: false,
  
        /**
        // OPTIONAL - Configuration for cookie storage
        // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
        cookieStorage: {
        // REQUIRED - Cookie domain (only required if cookieStorage is provided)
            domain: '.yourdomain.com',
        // OPTIONAL - Cookie path
            path: '/',
        // OPTIONAL - Cookie expiration in days
            expires: 365,
        // OPTIONAL - See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
            sameSite: "strict", //"strict" | "lax",
        // OPTIONAL - Cookie secure flag
        // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
            secure: true
        },
  
        // OPTIONAL - customized storage object
        //storage: MyStorage,
  
        // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
        //authenticationFlowType: 'USER_PASSWORD_AUTH',
        authenticationFlowType: 'USER_SRP_AUTH',
  
        // OPTIONAL - Manually set key value pairs that can be passed to Cognito Lambda Triggers
        clientMetadata: { myCustomKey: 'myCustomValue' },
  
         // OPTIONAL - Hosted UI configuration
        oauth: {
            domain: 'your_cognito_domain',
            scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
            redirectSignIn: 'http://localhost:3000/',
            redirectSignOut: 'http://localhost:3000/',
            responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
        }
         */
    }, 
    API: {
      endpoints: [
          {
              name: "topics",
              endpoint: "/topics"
          },
          {
              name: "industries",
              endpoint: "/api/pub2/industries",
  
          }
      ]
  }  
  });

function MemberTest() {

    /**/
    Auth.currentSession().then(res=>{
        let accessToken = res.getAccessToken();
        let jwt = accessToken.getJwtToken();
        //You can print them to see the full objects
        console.log(`myAccessToken: ${JSON.stringify(accessToken)}`);
        console.log(`myJwt: ${jwt}`);

        /**/
        const myInit = { 
            headers: { 
              //Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`,
              Authorization: `Bearer ${jwt}`,    
              },
          };

        API
        //.get("industries", '/', null)
        .get("industries", '/', myInit)
        .then(response => {
            // Add your code here
            console.log(JSON.stringify(response));
        })
        .catch(error => {
            console.log(error.response);
        });

        //postData(jwt);


      });
 //


 async function postData(jwt:any) { 
    const apiName = 'MyApiName';
    const path = '/path';
    const myInit = { 
      headers: { 
        //Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`,
        Authorization: `Bearer ${jwt}`,    
        },
    };

    return await API.post(apiName, path, myInit);
}



const [authState, setAuthState] = React.useState<AuthState>();
const [user, setUser] = React.useState<any | undefined>();

React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
        console.log(JSON.stringify(nextAuthState)); 
        console.log(JSON.stringify(authData)); 
        setAuthState(nextAuthState);
        setUser(authData);
    });
}, []);


// You can get the current config object
const currentConfig = Auth.configure();

console.log(JSON.stringify(currentConfig));

return authState === AuthState.SignedIn && user ? (

    <div className="App">
    <div>Hello, {user.username}</div>
    <AmplifySignOut />
    </div>
    ): (
        <AmplifyAuthenticator />
    );
}
//export default withAuthenticator(MemberTest);
export default MemberTest; 
