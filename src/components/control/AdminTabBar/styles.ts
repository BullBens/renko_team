import { StyleSheet, Dimensions } from 'react-native';
import { bottom, ios, colors } from '@constants';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: colors.BLACK,
    justifyContent: 'space-around',
    flexDirection: 'row',
    // ...shadowBlock,
  },
  eachScreen: {
    width: width / 5,
    paddingTop: 8,
    paddingBottom: !bottom ? 8 : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    lineHeight: 16,
    color: colors.DARK_RED,
    marginTop: 4,
  },
  textActive: {
    color: colors.RED,
  },
});
