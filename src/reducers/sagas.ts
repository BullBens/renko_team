import { all } from 'redux-saga/effects';
// ADD IMPORT
import { watchAppGlobalState } from './appGlobalState';
import { watchProfile } from './profile';
import { watchAdditional } from './_additional';
import { watch_theme } from './themeReducer';

export default function* rootSaga() {
  yield all([
    watchAppGlobalState(),
    watchProfile(),
    watchAdditional(),
    watch_theme()
  ]);
}
