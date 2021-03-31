import {Platform} from 'react-native';

export const shadowBlock = Platform.select({
  ios: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: 'gray',
    shadowRadius: 5,
  },
  android: {
    elevation: 6,
  },
});
export const shadowScrollViewBlock = Platform.select({
  ios: {
    shadowOpacity: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: 'red',
    shadowRadius: 10,
  },
  android: {
    elevation: 6,
  },
});
