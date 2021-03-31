import { colors, metrics } from '@constants';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 14,
  },
  activeText: {
    color: colors.WHITE,
  },
  inactiveText: {
    color: colors.GRAY,
  },
  button: {
    padding: metrics.pts_12,
    marginHorizontal: 10,
    borderWidth: 1,
  },
  activeButton: {
    borderColor: '$PRIMARY_COLOR',
  },
  inactiveButton: {
    borderColor: '$PRIMARY_COLOR_DARK',
  },
});
