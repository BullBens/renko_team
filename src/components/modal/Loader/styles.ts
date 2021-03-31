import {StyleSheet} from '@components';
import {colors, metrics} from '@constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: metrics.WIDTH_WINDOW / 4,
  },
});
