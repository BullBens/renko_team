import {NavigationState, PartialState} from '@react-navigation/native';

export const parseRoute: TParseRoute = (initialState) => {
  if(!initialState?.routes?.length) {
    return "No Screen Name"
  }
  const length = initialState?.routes?.length - 1 || 0;
  const state = initialState?.routes[length]?.state || undefined;
  const name = initialState?.routes[length]?.name || 'No Screen Name';
  if (state) {
    return parseRoute(state);
  }

  return name;
};

type TParseRoute = (state: NavigationState | PartialState<NavigationState> | undefined) => string;
