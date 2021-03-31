import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '@constants';

const parallaxHeaderHeight = 170;
const headerHeight = 100;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // alignItems: 'center'
  },
  userInfoView: {
    paddingHorizontal: 16,
    marginTop: 8
  },
  userInfo: {
    color: colors.WHITE,
     fontSize: 14 
  },
  profilePhoto: {
    margin: 16,
    width: parallaxHeaderHeight - 32,
    height: parallaxHeaderHeight - 32,
    borderRadius: metrics.WIDTH_WINDOW / 3,
    borderWidth: 5,
    borderColor: 'white',
  },
  userName: {
    flexWrap: 'wrap',
    fontFamily: fonts.CRAZY_METRO,
    fontSize: metrics.pts_24,
    color: colors.WHITE,
  },
  photoAndNiknameView: {
    // backgroundColor: 'red',
    // height: 170,
    paddingHorizontal: metrics.pts_16,
    justifyContent: 'center',
  },
  scrollView: {
    paddingTop: parallaxHeaderHeight,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: 100,
  },
  backgroundImage: {
    position: 'absolute',
    zIndex: 999,
    top: 0,
    left: 0,
    backgroundColor: 'grey',
    height: parallaxHeaderHeight,
    width: metrics.WIDTH_WINDOW,
  },
  profileView: {
    flex: 1,
    position: 'absolute',
    zIndex: 999,
    top: 0,
    left: 0,
    flexDirection: 'row',
    height: parallaxHeaderHeight,
    width: metrics.HEIGHT_WINDOW,
  },
});

export default styles;
