import React from 'react';
import {StackActions, DrawerActions, NavigationState} from '@react-navigation/routers';
import {NavigationContainerRef} from '@react-navigation/core';
import {parseRoute} from '@helpers';

export let currentRouteName: string = '';

export const navigationRef: React.RefObject<NavigationContainerRef> = React.createRef();
export const onStateChange: TOnStateChange = (state) => {
  currentRouteName = parseRoute(state);
};

export function navigate(name: string, params?: any) {
  navigationRef?.current?.navigate(name, params);
}
export function goBack() {
  navigationRef?.current?.goBack();
}
export function reset(name: string, params?: any) {
  navigationRef?.current?.reset({routes: [{name, params}]});
}
export function push(name: string, params?: any) {
  navigationRef?.current?.dispatch(StackActions.push(name, params));
}
export function pop() {
  navigationRef?.current?.dispatch(StackActions.pop());
}
export function popToTop() {
  navigationRef?.current?.dispatch(StackActions.popToTop());
}
export function toggleDrawer() {
  navigationRef?.current?.dispatch(DrawerActions.toggleDrawer());
}

type TOnStateChange = ((state: NavigationState | undefined) => void) | undefined;
