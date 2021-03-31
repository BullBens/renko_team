import { TProfile } from '@types';

export interface TAuthRequest {
  email: string;
  password: string;
}
export interface TAuthResponse {
  token: string;
  user: TProfile;
}

export interface TRegistrationResponse {
  login: string;
  fullName: string;
  email: string;
  password: string;
  type: 'dancing' | 'skater' | 'bmx' | 'roller-skates' | 'scooter';
  cityId: number;

}


