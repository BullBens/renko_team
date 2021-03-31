// https://reactjs.org/docs/hooks-reference.html
export {
  useState,
  useEffect,
  useContext,
  useReducer,
  useCallback,
  useMemo,
  useRef,
  useImperativeHandle,
  useLayoutEffect,
  useDebugValue,
} from 'react';

// https://github.com/react-navigation/react-navigation-hooks#docs

export {
  useSafeArea, // const { top, right, bottom, left } = useSafeArea()
} from 'react-native-safe-area-context';

//
export { useBoolean, useNumber, useArray } from 'react-hanger'; // const { value, setValue, toggle, setTrue, setFalse } = useBoolean()

// https://react.i18next.com/latest/usetranslation-hook
export {
  useTranslation, // const { t, i18n } = useTranslation();
} from 'react-i18next';
export { default as usePrevious } from './usePrevious';

export { useNavigation } from '@react-navigation/core'
