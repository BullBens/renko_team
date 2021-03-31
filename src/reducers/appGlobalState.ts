import { takeLatest, put } from 'redux-saga/effects';
import i18next from 'i18next';
import { TGlobalState, TLang } from '@types';
import { languages } from '@constants';

const RESET_APP_GLOBAL_STATE = '[appGlobalState] RESET_APP_GLOBAL_STATE';
const CHANGE_LANG = '[appGlobalState] CHANGE_LANG';
const SET_LANG = '[appGlobalState] SET_LANG';
const SET_TOKEN = '[appGlobalState] SET_TOKEN';
const SET_ON_BOARDING = '[appGlobalState] SET_ON_BOARDING';

const initialstate: TGlobalState['appGlobalState'] = {
  onBoarding: true,
  lang: 'ru',
  access_token: '',
  type: null
};

export default (state = initialstate, action: any) => {
  switch (action.type) {
    case SET_LANG:
      return Object.assign({}, { ...state, lang: action.lang });
    case SET_TOKEN:
      return Object.assign({}, { ...state, access_token: action.token });
    case SET_ON_BOARDING:
      return Object.assign({}, { ...state, onBoarding: action.onBoarding });
    case RESET_APP_GLOBAL_STATE:
      return initialstate;
    default:
      return state;
  }
};

export const changeLang = (lang: TLang) => ({ lang, type: CHANGE_LANG });
export const setOnBoarding = (onBoarding: boolean) => ({ onBoarding, type: SET_ON_BOARDING });
export const setLang = (lang: TLang) => ({ lang, type: SET_LANG });
export const setToken = (token: string) => ({ token, type: SET_TOKEN });

export const resetAppGlobalState = () => ({ type: RESET_APP_GLOBAL_STATE });

export function* watchAppGlobalState() {
  yield takeLatest(CHANGE_LANG, changeLangAsync);
}

export function* changeLangAsync(data: any) {
  const { lang } = data;
  console.log(lang)
  yield i18next.changeLanguage(lang);
  yield put(setLang(lang));
}
