import { takeLatest, put, call } from 'redux-saga/effects';
import { httpGet, httpPost } from '@services';
import { urls } from '@constants';
import { setToken } from './appGlobalState';
import { setError, setFirstRequest, setLoader } from './_additional';
import { PROFILE } from './__proto__';
import { Alert } from 'react-native';
import { TProfile } from '@types';
import { resetModalController } from './modalController';


const LOGIN = '[profile] LOGIN';
const LOG_OUT = '[profile] LOG_OUT'
const GET_PROFILE = '[profile] GET_PROFILE';
const SET_PROFILE = '[profile] SET_PROFILE';
const RESET_PROFILE = '[profile] RESET_PROFILE';
const UPDATE_PROFILE = '[profile] UPDATE_PROFILE';

const initialstate = PROFILE();

export default (state = initialstate, action: any) => {
  switch (action.type) {
    case SET_PROFILE:
      return Object.assign({}, { ...state, ...action.profile });
    case UPDATE_PROFILE:
      return Object.assign({}, { ...state, photo: action.photo });
    case RESET_PROFILE:
      return initialstate;
    default:
      return state;
  }
};

export const setProfile = (profile: TProfile) => ({ profile, type: SET_PROFILE });
export const resetProfile = () => ({ type: RESET_PROFILE });
export const updateProfilePhoto = (photo: string) => ({ photo, type: UPDATE_PROFILE });
export const logIn = (login: string, password: string) => ({ login, password, type: LOGIN });
export const logOut = () => ({ type: LOG_OUT });

export function* watchProfile() {
  yield takeLatest(LOGIN, logInAsync);
  yield takeLatest(LOG_OUT, logOutAsync);
}

export function* logInAsync(action: { login: string, password: string } | any) {
  const { login, password } = action;
  yield put(setLoader(true));
  try {
    const { data } = yield call(() => httpPost(urls.PROFILE_LOGIN, { login, password }));
    if (data.error) {
      yield put(setError(data.message))
      return
    }
    const { access_token, user }: { access_token: string; user: TProfile } = data.data;
    yield put(setToken(access_token));
    yield put(setProfile(user));
    yield put(setLoader(false));
  } catch (err) {
    yield put(setLoader(false));
  }
}



export function* profileAsync() {
  try {
    const { data } = yield call(() => httpGet(urls.GET_PROFILE));
    const profile: TProfile = data.data
    yield put(setProfile(PROFILE(profile)));
  } catch (e) {
    yield put(resetProfile());
    yield put(setToken(''));
    throw e;
  }

}
export function* logOutAsync() {
  try {
    yield put(resetProfile())
    yield put(resetModalController());
    yield put(setToken(''));
    yield put(setFirstRequest(false));
  } catch (error) {
    console.log('logOutAsyncError', error);
  }
}
