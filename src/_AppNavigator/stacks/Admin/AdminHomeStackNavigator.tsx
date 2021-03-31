import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { CreatePost, Home } from '@screens';
import { connect } from 'react-redux';
import { headerStyle } from '../../options';
import { TGlobalState } from '@types';
import { fonts } from '@constants';
import { useTranslation } from '@hooks';

type TProps = {
    theme: TGlobalState['themeReducer']['theme']
}

const HomeStack = createStackNavigator();

const AdminHomeStackNavigator: React.FC<TProps> = ({ theme }) => {

    const {t} = useTranslation()

    return (
        <HomeStack.Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: theme.$PRIMARY_BACKGROUND_COLOR
                },
                headerStyle: {
                    backgroundColor: theme.$PRIMARY_BACKGROUND_COLOR,
                    shadowColor: 'transparent'
                },
                headerTitleStyle: {
                    fontSize: 22,
                    fontFamily: fonts.GILROY_REGULAR_NORMAL,
                    color: theme.$PRIMARY_COLOR,
                    letterSpacing: 1,
                },
                headerBackTitleStyle: {
                    fontFamily: fonts.GILROY_REGULAR_NORMAL,
                    fontSize: 20,
                    color: theme.$PRIMARY_COLOR
                },
                headerTintColor: theme.$PRIMARY_COLOR
            }}
        >
            <HomeStack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <HomeStack.Screen
                name="CreatePost"
                component={CreatePost}
                options={{
                    title: t('screen.title.create_post')
                }}
            />
        </HomeStack.Navigator>
    );
};

const mapStateToProps = (state: TGlobalState) => ({
    theme: state.themeReducer.theme
})


export default connect(mapStateToProps)(AdminHomeStackNavigator)