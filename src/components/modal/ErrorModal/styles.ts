import { StyleSheet } from '@components';
import { colors, metrics } from '@constants';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 16,
    backgroundColor: colors.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: metrics.WIDTH_WINDOW / 4,
  },
});
