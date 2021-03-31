export type TScreenParams = {
	Test: TPropsScreen & {}
	QrCodeGroupScanner: TPropsScreen & {}
	QrCodeGroupScaner: TPropsScreen & {}
	GroupUsers: TPropsScreen & {}
  GroupSettings: TPropsScreen & {};
  CreateGroup: TPropsScreen & {};
  Group: TPropsScreen & {};
  Posts: TPropsScreen & {};
  CreatePost: TPropsScreen & {};
  QrCodeScanner: TPropsScreen & {};
  QrCode: TPropsScreen & {};
  AddFriend: TPropsScreen & {};
  Friends: TPropsScreen & {};
  Settings: TPropsScreen & {};
  CityModal: TPropsScreen & {};
  Loader: TPropsScreen & {};
  Onboarding: TPropsScreen & {};
  ProductClothingInfo: TPropsScreen & {};
  Shop: TPropsScreen & {};
  UserInfo: TPropsScreen & {};
  Registration: TPropsScreen & {
    selectedCity: undefined | null | string;
  };
  Login: TPropsScreen & {};
  Initializing: TPropsScreen & {};
  Menu: TPropsScreen & {};
  Main: TPropsScreen & {};
  Profile: TPropsScreen & {};
  Auth: TPropsScreen & {};
};
type TPropsScreen = any;
