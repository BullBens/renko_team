import { resetModalController } from './modalController';
import { setToken } from './appGlobalState';
import { TGlobalState } from '@types';
import { profileAsync, resetProfile } from './profile';
import { put, call, select, all, takeLatest } from 'redux-saga/effects';

const LOG_OUT = '[_additional] LOG_OUT';
const LOG_IN = '[_additional] LOG_IN';
const INITIAL = '[_additional] INITIAL';
const SET_ON_BOARDING = '[_additional] SET_ON_BOARDING';
const SET_FIRST_REQUEST = '[_additional] SET_FIRST_REQUEST';
const SET_LOADER = '[_additional] SET_LOADER';
const RESET_ADDITIONAL = '[_additional] RESET_ADDITIONAL';
const SET_ERROR = '[_additional] SET_ERROR'

const initialstate: TGlobalState['_additional'] = {
  loader: false,
  error: null,
  firstRequest: false,
};

export default (state = initialstate, action: any) => {
  switch (action.type) {
    case SET_LOADER:
      return Object.assign({}, { ...state, loader: action.loader });
    case SET_FIRST_REQUEST:
      return Object.assign({}, { ...state, firstRequest: action.firstRequest });
    case SET_ERROR:
      return Object.assign({}, { ...state, error: action.error });
    case RESET_ADDITIONAL:
      return initialstate;
    default:
      return state;
  }
};

export const setLoader = (loader: boolean) => ({ loader, type: SET_LOADER });
export const setError = (error: TGlobalState['_additional']['error']) => ({ error, type: SET_ERROR });
export const setOnBoarding = (onBoarding: boolean) => ({ onBoarding, type: SET_ON_BOARDING });
export const setFirstRequest = (firstRequest: boolean) => ({ firstRequest, type: SET_FIRST_REQUEST });
export const initial = () => ({ type: INITIAL });

export function* watchAdditional() {
  yield takeLatest(LOG_OUT, logOutAsync);
  yield takeLatest(LOG_IN, logInAsync);
  yield takeLatest(INITIAL, initialAsync);
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
export function* registrationAsync() {
  try {
    yield put(resetModalController());
    yield put(setToken(''));
    yield put(setFirstRequest(false));
  } catch (error) {
    console.log('logOutAsyncError', error);
  }
}

export function* logInAsync() {
  try {
    yield all([call(profileAsync)]);
    yield put(setFirstRequest(true));
    yield put(setLoader(false));
  } catch (e) {
    yield put(setLoader(false));
    console.log(e, 'logInAsync');
  }
}

export function* initialAsync() {
  const { onBoarding, access_token } = yield select((state) => state.appGlobalState);
  try {
    if (onBoarding) {
      yield put(setLoader(false));
    } else if (access_token) {
      yield call(logInAsync);
    } else {
      yield put(setLoader(false));
    }
  } catch (e) {
    console.log(e, 'initialAsync');
    yield put(initial());
  }
}