export interface DApplication {
  user?: DUser;
  business?: DBusiness;
}

export interface DUser {
  authorized: boolean;
  language?: string;
  theme?: string;
  sessionId?: string | null;
  business?: DBusiness;
  cookie?: DCookie;
  linkedInProfile?: DLinkedInProfile;
  linkedInEmail?: string;
  linkedInFirstname?: string;
  linkedInLastname?: string;
  linkedInState?: DLinkedInState;
  cognitoJWT?: string | null;
}

export interface DLinkedInState {
  redirectLink?: {
    external: boolean;
    uri: string;
  };
  timestamp?: number;
}

export interface DCookie {
  cookieUID?: string;
  cookiePrivacyConsent?: string;
}

export interface DBusiness {
  company?: DCompany;
  clients?: DCompany[];
  technologies?: DTechnology[];
  privacyPolicy?: DPrivacyPolicy;
}
export interface DCompany {
  name?: string;
  logo?: string;
  description?: string;
}
export interface DTechnology {
  name?: string;
  logo?: string;
  description?: string;
}
export interface DPerson {
  fname?: string;
  lname?: string;
  picture?: string;
  title?: string;
  subtitle?: string;
  description?: string;
}
export interface DSchool {
  name?: string;
  logo?: string;
}
export interface DQuestion {
  question?: string;
  answer?: string;
}

export interface DProgram {
  name?: string;
  date?: string;
  description?: string;
  panels?: DPerson[];
  guests?: DPerson[];
  companies?: DCompany[];
  schools?: DSchool[];
  news?: string[];
  faqs?: DQuestion[];
}

export interface DBusiness {
  name?: string;
  description?: string;
  companies?: DCompany[];
  news?: string[];
}

export interface DInquiry {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export interface DKeyValue {
  key: string;
  value: string;
}
export interface DPrivacyPolicy {
  title?: string;
  description?: string;
  content?: DKeyValue[];
}
export interface DLocale {
  country?: string; // US
  language?: string; // en
}

export interface DLinkedInRequest {
  authorizationCode: string;
  state: string;
  redirectUri: string;
}

export interface DLinkedInCompositeProfile {
  profile: DLinkedInProfile;
  emailHandler: DLinkedInEmailHandler;
}

export interface DLinkedInProfile {
  id: string;
  localizedFirstName: string;
  localizedLastName: string;
  profilePicture?: {
    displayImage?: string;
  };
  firstName?: {
    localized?: {
      en_US?: string;
    };
    preferredLocale?: DLocale;
  };
  lastName?: {
    localized?: {
      en_US?: string;
    };
    preferredLocale?: DLocale;
  };
}

export interface DLinkedInEmailHandler {
  handle: string;
  "handle~": {
    emailAddress: string;
  };
}

export interface DJob {
  id: string;
  status?: string;
  employer?: string;
  type?: string;
  level?: string;
  title?: string;
  summary?: string[];
  duty?: string[];
  qualification?: string[];
  niceToHave?: string[];
  benefit?: string[];
  pay?: string;
  sponsorship?: string;
}

// used in project case study
export interface DProject {
  id: string;
  category?: string[];
  name?: string;
  summary?: string[];
  team?: string;
  duration?: string;
  cost?: string;
  content?: DContent[];
  downloadLink?: string;
}

export interface DContent {
  id?: string;
  type?: string; // youtube
  title?: string;
  description?: string;
  src?: string;
  children?: DContent[];
}

export interface DJobApplication {
  firstName?: string;
  lastName?: string;
  email?: string;
  jobId?: string;
}

export interface DEvent {
  id: string;
  status?: string;
  organizer?: DCompany[];
  sponsor?: DCompany[];
  date?: string;
  time?: string;
  name?: string;
  image?: string;
  summary?: string[];
}
export interface DEventRegistration {
  firstName?: string;
  lastName?: string;
  email?: string;
  eventId?: string;
}
