import { TProfile } from "@types";


export const INITIAL_REDUCER: (data?: any) => TReturn = (data = {}) => ({
  name: data.name || '',
  secondName: data.secondName || '',
});

type TReturn = {
  name: string;
  secondName: string;
};

export const PROFILE: (data?: any) => TProfile = (data = {}) => ({
  _id: data._id || '',
  email: data.email || '',
  avatar: data.avatar || null,
  login: data.login || '',
  city: data.city || '',
  theme: data.theme || "darkTheme",
  type: data.type || null,
  friends: data.friends || [],
  coins: data.coins || 0,
  fullName: data.fullName || '',
  roles: data.roles || ['user'],
  status: 'blocked',
  lang: 'ru',
  code: data.code || '',
  updateAt: data.updateAt,
  deviceId: data.deviceId,
});
