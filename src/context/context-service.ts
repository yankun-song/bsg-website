import {
  DBusiness,
  DCookie,
  DLinkedInCompositeProfile,
  DLinkedInState,
  DUser,
} from "../model";
import Amplify, { API, Auth } from "aws-amplify";
import awsConfig from "../api/aws-amplify";

//const cookie = useCookie();

Amplify.configure(awsConfig);

const bsg_cookie_name = "_bsg";

export class ContextService {
  static CACHE_MAX_AGE: number = 300; // seconds

  user: DUser = { authorized: false };

  business: DBusiness = {};

  urlRoot: string = "";

  update: boolean = false;

  constructor(user?: DUser, business?: DBusiness) {
    if (user) this.user = user;
    this.user.cookie = this.getBSGCookies();

    if (business) this.business = business;

    if (
      window.location.port == "" ||
      window.location.port == "0" ||
      window.location.port == "80" ||
      window.location.port == "443"
    ) {
      this.urlRoot = `${window.location.protocol}//${window.location.hostname}`;
    } else {
      this.urlRoot = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;
    }

    this.user.linkedInFirstname = "Guest";
    //this.setBusiness();

    //this.user.cookie = cookie.getBSGCookies();

    this.init().then((data) => {
      this.setUser(data.user as DUser);
      this.setBusiness(data.business);
    });
  }

  async init() {
    // retrieving business info
    const api = "business-bsg";
    const path = "";
    const myInit = {
      headers: {
        Authorization: "", // for public API/json, we set it empty. Otherwise, AWS will use it to valdiate
      },
    };
    let business = await API.get(api, path, myInit);

    //console.log("Loading business info ..." + JSON.stringify(business));
    /** 
    console.log(
      "Host name: " +
        window.location.protocol +
        " " +
        window.location.port +
        " " +
        window.location.hostname
    );
    **/

    return {
      user: {
        authorized: false,
        linkedInFirstname: "Guest",
        //        setLinkedInFirstName: (user: DUser, name: string) => {
        //          user.linkedInFirstname = name;
        //        },
      },
      business: business,
    };
  }

  forceUpdate() {
    this.update = !this.update;
    console.log("this.update: " + this.update);
  }

  signOut() {
    this.user = {
      authorized: false,
      linkedInFirstname: "Guest",
    };
  }

  setCookie(cookieName: string, cookieValue: string, hourToExpire?: number) {
    let date = new Date();
    date.setTime(
      date.getTime() +
        (hourToExpire
          ? hourToExpire * 24 * 3600 * 1000
          : 365 * 24 * 3600 * 1000)
    );
    document.cookie =
      cookieName + "=" + cookieValue + "; expires=" + date.toUTCString();
  }

  getCookie(cookieName: string) {
    let cookieValue = "";
    let cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].split("=");
      console.log("key: " + cookie[0] + " value: " + cookie[1]);

      if (cookie[0].trim() == cookieName) {
        cookieValue = cookie[1];
        return cookieValue;
      } else {
        console.log("No match: [" + cookie[0] + "]");
      }
    }
    console.log("Cookie value: " + cookieValue);
    return cookieValue;
  }

  getBSGCookies() {
    let val = this.getCookie(bsg_cookie_name).split(".");
    console.log("val: " + val);

    let cookieUID = val.length > 0 ? val[0] : "";
    let cookiePrivacyConsent = val.length > 1 ? val[1] : "";

    return {
      cookieUID: cookieUID,
      cookiePrivacyConsent: cookiePrivacyConsent,
    } as DCookie;
  }

  setBSGCookies() {
    if (this.user.cookie == null) this.user.cookie = {};

    if (
      this.user.cookie.cookieUID == null ||
      this.user.cookie.cookieUID == ""
    ) {
      this.user.cookie.cookieUID = Math.random()
        .toString(36)
        .substr(2, 10)
        .toUpperCase();
    }
    if (
      this.user.cookie.cookiePrivacyConsent == null ||
      this.user.cookie.cookiePrivacyConsent == ""
    ) {
      this.user.cookie.cookiePrivacyConsent = "N";
    }

    let cookieValue =
      this.user.cookie?.cookieUID +
      "." +
      this.user.cookie?.cookiePrivacyConsent;

    this.setCookie(bsg_cookie_name, cookieValue);
  }

  setBusiness(business: DBusiness) {
    this.business = business;
  }

  setUser(user: DUser) {
    this.user = user;
  }

  setLinkedInState(linkedInState: DLinkedInState) {
    this.user.linkedInState = linkedInState;

    return this.encodeLinkedInState();
  }

  // encode linkedin state to a string
  encodeLinkedInState() {
    let timestamp = new Date().getTime();
    let uri = encodeURIComponent(
      this.user.linkedInState?.redirectLink?.uri as string
    );
    let external = this.user.linkedInState?.redirectLink?.external ? "Y" : "N";

    return `${timestamp}||${uri}||${external}`;
  }

  // decode from linkedin state
  decodeLinkedInState(state: string) {
    let val = state.split("||");
    let timestamp = val.length > 0 ? val[0] : -1;
    let uri = val.length > 1 ? decodeURIComponent(val[1]) : "";
    let external = val.length > 2 ? val[2] == "Y" : false;

    let linkedInState = {
      timestamp: timestamp as number,
      redirectLink: {
        external: external,
        uri: uri,
      },
    };
    this.user.linkedInState = linkedInState;

    return linkedInState;
  }

  setLinkedInProfile(compositeProfile: DLinkedInCompositeProfile) {
    this.user.linkedInProfile = compositeProfile.profile;
    this.user.linkedInEmail =
      compositeProfile.emailHandler["handle~"].emailAddress;

    //to make it convenient
    this.user.linkedInFirstname = compositeProfile.profile.localizedFirstName;
    this.user.linkedInLastname = compositeProfile.profile.localizedLastName;

    console.log("LinkedIn: " + this.user.linkedInFirstname);

    if (this.user.linkedInEmail != null) {
      this.user.authorized = true;
    }

    this.forceUpdate();
  }

  setLinkedInEmail(email: string) {
    this.user.linkedInEmail = email;
  }

  setLanguage(lang: string) {
    this.user.language = lang;
  }

  getCognitoJWT() {
    // if cognito JWT exist, we don't check again
    return new Promise<string>((resolve, reject) => {
      if (!this.user.cognitoJWT) {
        Auth.currentSession()
          .then((res) => {
            let accessToken = res.getAccessToken();
            let jwt = accessToken.getJwtToken();
            //You can print them to see the full objects
            console.log(`myAccessToken: ${JSON.stringify(accessToken)}`);
            console.log(`myJwt: ${jwt}`);

            this.user.cognitoJWT = jwt;

            //return jwt;
          })
          .catch((reason: any) => {
            console.log("Error Reason: " + reason);
            this.user.cognitoJWT = null;
          })
          .finally(() => {
            //} else {
            //return this.user.cognitoJWT;
            resolve(this.user.cognitoJWT as string);
          });
      } else {
        resolve(this.user.cognitoJWT);
      }
    });
  }

  signin = (email: string, password: string) => {
    this.user.sessionId = null;
  };
  signup = (email: string, password: string) => {
    this.user.sessionId = null;
  };
  signout = () => {
    this.user.sessionId = null;
  };
  sendPasswordResetEmail = (email: string) => {
    this.user.sessionId = null;
  };

  confirmPasswordReset = (code: string, password: string) => {
    this.user.sessionId = null;
  };
}
