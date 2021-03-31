
import { TProfile } from './profile';
export * from './http';
export * from './navigation';
export * from './music';
export * from './auth';
export * from './profile';
export * from './group';

export type TLang = 'ua' | 'ru' | 'en';

export type TSet = {
  exist: boolean;
  top: null | number;
  bottom: null | number;
  left: null | number;
  right: null | number;
};

// Auth

export type TAuthRequest = {
  login: string;
  password: string;
};

// Post
export type TPostResponse = {
  _id: string,
  message: string,
  images: Array<string>,
  latitude: string,
  longitude: string,
  createdAt: string,
  author: {
    _id: string
    login: string,
    avatar: string
  }
}

// Friends
export type TFriendsResponse = {
  login: string;
  photo: null | string;
  _id: string;
};

// Group
export type TGroupUserResponse = {
  _id: string;
  login: string;
  photo: null | string;
};
// REQUESTS
export type TGenerateOptions = {
  method: 'POST' | 'GET' | 'PUT' | 'DELETE';
  url: string;
  data?: any;
  params?: any;
};

export type TFormatResponse = {
  data: any;
  status: number;
  statusText: string;
};

export type TCities = {
  _id: string,
  name: {
    ru: string,
    ua: string,
    en: string,
  }
}

// STORE
export type TGroup = {
  _id: string;
  name: string;
  admin: string;
  avatar: string | null;
  users: Array<string>;
};


export type TGlobalState = {
  appGlobalState: {
    onBoarding: boolean;
    lang: 'ru' | 'ua' | 'en';
    access_token: string;
    type: 'admin' | 'organizer' | null
  };
  _additional: {
    loader: boolean;
    firstRequest: boolean;
    error: null | string | Object,
  };
  themeReducer: TThemeReducer;
  profile: TProfile;
  group: {
    data: null | TGroup,
    loading: boolean
  };
  posts: Array<TPostResponse>;
};

export type TThemeReducer = {
  theme: {
    $THEME: string

    $PRIMARY_COLOR: string,
    $PRIMARY_COLOR_LIGHT: string,
    $PRIMARY_COLOR_DARK: string,


    $PRIMARY_BACKGROUND_COLOR: string,
    $PRIMARY_BACKGROUND_COLOR_LIGHT: string,

    $SECONDARY_BACKGROUND_COLOR: string,
    $SECONDARY_BACKGROUND_COLOR_LIGHT: string,

    $PRIMARY_TEXT_COLOR: string,
    $PRIMARY_TEXT_COLOR_LIGHT: string,
    $PRIMARY_TEXT_COLOR_DARK: string,

    $PRIMARY_TEXT_BACKGROUND_COLOR: string,
    $SECONDARY_TEXT_BACKGROUND_COLOR: string,
  };
}


// PROFILE
export interface TRegistrationResponse {
  login: string;
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  type: TUserType,
  city: string;
}

export type TUserType = 'dancing' | 'skater' | 'bmx' | 'roller-skates' | 'scooter'




export type TRequestLoginEmail = {
  email: number,
  password: number
}

export type TRequestUserRegistration = {
  login: string,
  fullName: string,
  email: string,
  password: string,
  type: string,
  city: string
}

export type TCity = {

}

export type TResponseUserRegistration = {
  data: {
    access_token: string,
    user: TProfile
  },
  ms: number,
  status: number
}


export enum eTheme {
  black_and_red = 'black_and_red',
  black_and_purple = 'black_and_purple',
  white_and_gold = 'white_and_gold'
}