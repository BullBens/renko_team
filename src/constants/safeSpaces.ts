import { initialWindowSafeAreaInsets } from 'react-native-safe-area-context';

export const top = initialWindowSafeAreaInsets?.top || 20;
console.log("const top" + top)
export const bottom = initialWindowSafeAreaInsets?.bottom || 0;
console.log("const bottom" + bottom)
