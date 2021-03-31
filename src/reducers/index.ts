import {combineReducers} from 'redux'

export default combineReducers({
  _additional: require('./_additional').default,
  modalController: require('./modalController').default,
  profile: require('./profile').default,
  appGlobalState: require('./appGlobalState').default,
  themeReducer: require('./themeReducer').default,
  // ADD NEW REDUCER
});
