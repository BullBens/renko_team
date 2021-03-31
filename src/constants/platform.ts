import {Platform} from 'react-native';

export const ios = Platform.OS === 'ios' ? true : false;
export const android = Platform.OS === 'android' ? true : false;
