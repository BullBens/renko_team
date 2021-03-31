import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('screen');

console.log(width)
console.log(height)

const metrics = {
  horizontalCoefficient: width / 414,
  verticalCoefficient: height / 896,
  rem: width > 375 ? 18 : 16,
  HEIGHT_WINDOW: Dimensions.get('screen').height,
  WIDTH_WINDOW: Dimensions.get('window').width,
  pts_4: 4,
  pts_8: 8,
  pts_12: 12,
  pts_16: 16,
  pts_18: 18,
  pts_20: 20,
  pts_24: 24,
  pts_32: 32,
  pts_40: 40,
  pts_48: 48,
  pts_56: 56,
  pts_64: 64,
  pts_72: 72,
  pts_80: 80,
  pts_100: 100,
  pts_120: 120,
  pts_240: 240,
};

export default metrics;