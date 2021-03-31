const SET_CHANGE_CITY = '[modalController] SET_CHANGE_CITY';
const SET_ACCEPT_CITY = '[modalController] SET_ACCEPT_CITY';
const SET_IMPORTANT = '[modalController] SET_IMPORTANT';
const SET_STILL_WAITING = '[modalController] SET_STILL_WAITING';
const RESET_MODAL_CONTROLLER = '[modalController] RESET_MODAL_CONTROLLER';

const initialstate = {
  changeCity: false,
  acceptCity: false,
  important: false,
  stillWaiting: false,
};

export default (state = initialstate, action: any) => {
  switch (action.type) {
    case SET_CHANGE_CITY:
      return Object.assign({}, {...state, changeCity: action.data});
    case SET_ACCEPT_CITY:
      return Object.assign({}, {...state, acceptCity: action.data});
    case SET_IMPORTANT:
      return Object.assign({}, {...state, important: action.data});
    case SET_STILL_WAITING:
      return Object.assign({}, {...state, stillWaiting: action.data});
    case RESET_MODAL_CONTROLLER:
      return initialstate;
    default:
      return state;
  }
};

export const setImportant = (data: boolean | any) => ({data, type: SET_IMPORTANT});
export const setStillWaiting = (data: boolean | any) => ({data, type: SET_STILL_WAITING});
export const setChangeCity = (data: boolean) => ({data, type: SET_CHANGE_CITY});
export const setAcceptCity = (data: boolean) => ({data, type: SET_ACCEPT_CITY});
export const resetModalController = () => ({type: RESET_MODAL_CONTROLLER});
