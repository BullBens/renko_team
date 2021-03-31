import {StyleSheet, Dimensions} from 'react-native';
import {colors, metrics, fonts} from '@constants';
import { shadowBlock } from '../../../helpers/shadow';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  
  loginButton: {
    // ...shadowBlock,
    borderWidth: 1,
    // backgroundColor: 
    height: metrics.pts_40,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  loginButtonDisabled: {
    borderColor: colors.DARK_RED,
  },
  loginText: {
    fontSize: metrics.pts_16,
    color: colors.WHITE,
    textTransform: 'uppercase',
  },
  loginTextDisabled: {
    color: colors.GRAY,
  },
  subTitle: {
    fontSize: metrics.pts_12,
    fontFamily: fonts.GILROY_REGULAR_NORMAL,
    color: colors.GRAY,
  },
  subTitleTextDisabled: {
    color: colors.GRAY,
  },
});
