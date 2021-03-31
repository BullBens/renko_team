export type TGroup = {
  _id: string;
  name: string;
  admin: string;
  avatar: string | null;
  users: Array<string>;
};
