import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { navigationRef, onStateChange } from '@services';
import { Wrapper } from '@components';
import { useState } from '@hooks'
import { connect } from 'react-redux';
import { TGlobalState } from '@types';
import i18next from 'i18next';
import { initial } from '@reducers/_additional';
import SplashScreen from 'react-native-splash-screen';
import { Dispatch } from 'redux';
import ProfileStackNavigator from './stacks/Admin/AdminProfileStackNavigator';
import HomeStackNavigator from './stacks/Admin/AdminHomeStackNavigator';
import WallStackNavigator from './stacks/Admin/AdminWallStackNavigator';
import AuthStackNavigator from './stacks/AuthStackNavigator';
import { theme } from './options';
import EStyleSheet from 'react-native-extended-stylesheet';
import { colors } from '@constants';
import { AdminTabNavigator } from './stacks/Admin/AdminTabNavigator';

const RootStack = createStackNavigator();


export const forFade = ({ current, closing }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});



const AppNavigator: React.FC<TProps> = ({ appGlobalState, profile, dispatch, theme }) => {
  useEffect(() => {
    EStyleSheet.build({
      ...theme
    });
  }, [theme])

  useEffect(() => {
    i18next.changeLanguage(appGlobalState.lang);
    dispatch(initial());
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer ref={navigationRef} onStateChange={onStateChange}>
      <Wrapper>
        <RootStack.Navigator headerMode="none" screenOptions={{
          gestureEnabled: false,
          cardStyle: {
            backgroundColor: colors.BLACK,
          },
        }}>
          {
            appGlobalState.access_token && profile ?
              <RootStack.Screen name="TabNavigator" component={AdminTabNavigator} />
              :
              <RootStack.Screen
                name="AuthNavigator" component={AuthStackNavigator} />
          }
        </RootStack.Navigator>
      </Wrapper>
    </NavigationContainer>
  );
};

const mapStateToProps = (state: TGlobalState) => ({
  appGlobalState: state.appGlobalState,
  theme: state.themeReducer.theme,
  _additional: state._additional,
  profile: state.profile,
});

export default connect(mapStateToProps)(AppNavigator);

type TProps = {
  dispatch: Dispatch;
  theme: TGlobalState['themeReducer']['theme']
  appGlobalState: TGlobalState['appGlobalState'];
  _additional: TGlobalState['_additional'];
  profile: TGlobalState['profile']
};
