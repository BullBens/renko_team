import { StyleSheet } from '@components';
import { colors, metrics } from '@constants'
import { scale } from '@helpers';

export default StyleSheet.create({
  container: {
    paddingVertical: 16,
    justifyContent: 'space-between',
    flex: 1
  },
  avatar: {
    width: metrics.WIDTH_WINDOW / 3,
    height: metrics.WIDTH_WINDOW / 3,
    borderRadius: metrics.WIDTH_WINDOW / 3,
  },
  themeIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 10
  },
  themeButtonsWrap: {
    padding: scale(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
});
