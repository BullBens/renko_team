import { Dimensions, Platform } from 'react-native';
import { colors, fonts, top } from '@constants';
import EStyleSheet from 'react-native-extended-stylesheet';

const { width } = Dimensions.get('window');
const ios = Platform.OS === 'ios';

const styles =  EStyleSheet.create({
  headerStyle: {
    backgroundColor: '$PRIMARY_BACKGROUND_COLOR',
    height: 56 + (ios ? top : 0),
  },
  headerTitleStyle: {
    fontSize: 30,
    fontFamily: fonts.CRAZY_METRO,
    color: colors.RED,
    letterSpacing: 0.15,
    fontStyle: 'normal',
    fontWeight: 'normal',
    alignSelf: 'center',
  },
  drawerStyle: {
    width: (width / 4) * 3,
  },
  startLogoContainer: {
    height: 200,
    width: 200,
    alignSelf: 'center',
  },
  startLogo: {
    width: '100%',
    height: '100%',
  },
  cardStyle: {
    backgroundColor: '$PRIMARY_BACKGROUND_COLOR',
  }
});

export default styles
