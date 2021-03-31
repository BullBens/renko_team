// USES FOR GLOBAL NOT PERSISTED ITEMS
import EStyleSheet from 'react-native-extended-stylesheet';
import { blackAndPurpleTheme, blackAndRedTheme, whiteAndGoldTheme } from '@constants';
import { eTheme } from '@types';
import { put, takeLatest } from 'redux-saga/effects';

const SET_THEME = '[theme] SET_THEME';
const CHANGE_THEME = '[theme] CHANGE_THEME';

const initialstate = {
  theme: blackAndRedTheme,
};

export default (state = initialstate, action: any) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme: action.theme };
    default:
      return state;
  }
};

export const setTheme = (theme: any) => ({ type: SET_THEME, theme });
export const changeTheme = (data: any) => ({ data, type: CHANGE_THEME });

export function* watch_theme() {
  yield takeLatest(CHANGE_THEME, changeThemeAsync);
}

export function* changeThemeAsync(data: any) {
  try {
    if (data.data !== EStyleSheet.value('$THEME')) {
      const theme =
        data.data === eTheme.black_and_red ? blackAndRedTheme :
          data.data === eTheme.black_and_purple ? blackAndPurpleTheme :
            whiteAndGoldTheme
      yield put(setTheme(theme));
    }
  } catch (err) {
    console.log('error change theme', err);
  }
}
