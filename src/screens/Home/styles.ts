import { StyleSheet } from '@components';
import { colors, metrics } from '@constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  mapView: {
    flex: 1,
  },
  markerFixed: {
    left: '50%',
    marginLeft: -24,
    marginTop: -48,
    position: 'absolute',
    top: '50%'
  },
  marker: {
    height: 48,
    width: 48
  },
  createPostBtn: {
    position: 'absolute',
    borderRadius: 16,
    width: metrics.pts_100,
    paddingVertical: metrics.pts_16,
    left: '50%',
    alignItems: 'center',
    marginLeft: -50,
    bottom: metrics.pts_16
  },
  createPostTitle: {
    fontSize: metrics.pts_16,
    color: colors.WHITE
  },
  refreshBtn: {
    position: 'absolute',
    zIndex: 2,
    bottom: 50,
    right: 16,
    backgroundColor: colors.BLACK,
    padding: 8,
    borderRadius: 24,
  },
  plusBtn: {
    position: 'absolute',
    zIndex: 2,
    top: 60,
    right: 16,
    backgroundColor: colors.BLACK,
    padding: 8,
    borderRadius: 24,
  },
});
