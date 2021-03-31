import { StyleSheet } from '@components';
import { colors, metrics } from '@constants'
import { round } from 'lodash';

export default StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: 'center'
  },
  imageContainer: {
    borderColor: colors.RED,
    borderWidth: 1,
    width: 100,
    height: 100,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100
  },
  titleImage: {
    color: colors.WHITE,
    fontSize: metrics.pts_16,
    textAlign: 'center'
  },
  message: {
    minHeight: 100,
    color: colors.WHITE,
    fontSize: metrics.pts_16,
    marginBottom: 16,

  },
  typeWhomView: {
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  titleTypeWhom: {
    fontSize: 22,
    paddingLeft: 16
  },
  head: {
    flexDirection: 'row'
  }
});
