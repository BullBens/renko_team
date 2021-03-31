
import EStyleSheet from 'react-native-extended-stylesheet';
import { colors, metrics, fonts } from '@constants';
import { StyleSheet } from '@components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: metrics.pts_32,
  },
  textInput: {
    marginBottom: metrics.pts_8,
    fontFamily: fonts.GILROY_REGULAR_NORMAL,
    color: colors.WHITE,
    padding: 8,
    fontSize: 20,
    borderBottomWidth: 1,
  },
  title: {
    bottom: 40,
    textAlign: 'center',
    fontSize: 60,
    fontFamily: 'CrazyMetro',
  },
  textInputView: {

  },
  titleTypeAccount: {
    color: colors.RED,
    fontSize: 26,
    fontFamily: fonts.CRAZY_METRO
  }
});

export default styles;
