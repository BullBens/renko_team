import { Platform } from 'react-native';

export default {
  PROFILE_ICON: require('./images/tab-bar/user.png'),
  MAIN_ICON: require('./images/tab-bar/circle.png'),
  MENU_ICON: require('./images/tab-bar/list.png'),
  GIF1: require('./gif/giphy1.gif')
  // PROFILE_ICON: Platform.OS == 'ios' ? 'home' : require('./images/home.png'),
  // SETTINGS_ICON: Platform.OS == 'ios' ? 'settings' : require('./images/settings.png'),
  // SIDE_MENU_ICON: Platform.OS == 'ios' ? 'sideMenu' : require('./images/sideMenu.png'),
};
