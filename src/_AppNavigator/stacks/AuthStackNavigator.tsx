import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '@screens';
import { connect } from 'react-redux';
import { headerStyle } from '../options';
import { TGlobalState } from '@types';
import { forFade } from '../AppNavigator';
import { fonts } from '@constants';
import { useTranslation } from '@hooks';

type TProps = {
  theme: TGlobalState['themeReducer']['theme']
}

const AuthStack = createStackNavigator();

const AuthStackNavigator: React.FC<TProps> = ({ theme }) => {

  const { t } = useTranslation()

  return (
    <AuthStack.Navigator screenOptions={{
      headerTitleAlign: 'center',
      cardStyle: {
        backgroundColor: theme.$PRIMARY_BACKGROUND_COLOR
      },
    }} >
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{
          title: t('screen.title.login'),
          // cardStyleInterpolator: forFade,
          headerShown: false,
          // ...headerStyle,
        }}
      />
    </AuthStack.Navigator>
  );
};

const mapStateToProps = (state: TGlobalState) => ({
  theme: state.themeReducer.theme
})

export default connect(mapStateToProps)(AuthStackNavigator)

