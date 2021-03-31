import styles from './styles';
import { colors } from '@constants';
import { Platform } from '@components';

export const defaultStackOptions = {
  headerStyle: styles.headerStyle,
  headerTitleStyle: styles.headerTitleStyle,
  // headerBackTitleStyle: styles.headerBackTitleStyle,
  // headerTintColor: 'red',
  // headerPressColorAndroid: 'grey',
  // cardStyle: styles.cardStyle,
};

export const theme = {
  dark: false,
  colors: {
    primary: '', // The primary color of the app used to tint various elements. Usually you'll want to use your brand color for this.
    background: colors.BLACK, // The color of various backgrounds, such as background color for the screens.
    card: '', // The background color of card-like elements, such as headers, tab bars etc.
    text: colors.WHITE, // The text color of various elements.
    // border: colors.RED, // The color of borders, e.g. header border, tab bar border etc.
  },
};


export const headerStyleWithMarginLeft = {
  headerStyle: defaultStackOptions.headerStyle,
  headerTitleStyle: { ...defaultStackOptions.headerTitleStyle, marginLeft: Platform.OS === 'android' ? -60 : 0 },
};

export const headerStyle = {
  headerStyle: defaultStackOptions.headerStyle,
  headerTitleStyle: defaultStackOptions.headerTitleStyle,
  headerTintColor: 'red'
};
