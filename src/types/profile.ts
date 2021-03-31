export type TProfile = {
  _id: string,
  code: string,
  fullName: string | null,
  roles: Array<TRoles>,
  status: "blocked" | "active" | "inactive"
  theme: "darkTheme" | "lightTheme",
  avatar: null | {
    key: string
    src: string
    type: "image" | "video" | "gif"
  },
  city: number
  login: string,
  friends: Array<TFriends>,
  email: string,
  type: 'dancing' | 'skater' | 'bmx' | 'roller-skates' | 'scooter'
  coins: number,
  lang: 'ru' | 'ua' | 'en',
  deviceId?: string,
  createdAt?: Date,
  updateAt?: Date,
}

export type TRoles = 'admin' |
  'user' |
  'moderator' |
  'event_org' |
  'magazine'


export type TFriends = {
  _id: string,
  login: string,
  avatar: string,
}