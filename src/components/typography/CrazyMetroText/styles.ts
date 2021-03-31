import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '@constants';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    justifyContent: 'center',

    alignItems: 'center',
  },
  number: {
    fontFamily: 'CrazyMetro',
    fontSize: 70,
  },
  vs: {
    paddingTop: 3,
    marginLeft: 5,
    width: 70,
    fontSize: 70,

    fontFamily: 'CrazyMetro',
  },
  three: {
    paddingTop: 13,
    width: 32,
  },
  two: {
    marginTop: 10,
    width: 41,
  },
  one: {
    paddingTop: 9,
    width: 31,
  },
});
