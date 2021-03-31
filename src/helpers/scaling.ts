import { metrics } from '@constants';
const { horizontalCoefficient, verticalCoefficient } = metrics;

export const rem = (value: number) => `${value / metrics.rem}rem`;
export const scale = (size: number) => horizontalCoefficient * size;
export const verticalScale = (size: number) => verticalCoefficient * size;
export const moderateScale = (size: number, factor = 0.5) => size + ( scale(size) - size ) * factor;
