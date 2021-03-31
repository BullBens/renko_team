import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Posts, Profile, Settings } from '@screens';
import { TGlobalState } from '@types';
import { connect } from 'react-redux'
import { headerStyle } from '../../options';
import styles from '../../styles'
import { fonts } from '@constants';
import { useTranslation } from '@hooks';

type TProps = {
    theme: TGlobalState['themeReducer']['theme']
}

const ProfileStack = createStackNavigator();

const AdminProfileStackNavigator: React.FC<TProps> = ({ theme }) => {
    const { t } = useTranslation()
    return (
        <ProfileStack.Navigator
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
            }}>
            <ProfileStack.Screen
                name="Profile"
                options={{
                    title: t('screen.title.profile')
                }}
                component={Profile}

            />
            <ProfileStack.Screen
                name="Settings"
                options={{ title: t('screen.title.settings') }}
                component={Settings}

            />
            <ProfileStack.Screen
                name="Posts"
                options={{ title: t('screen.title.posts') }}
                component={Posts}
            />
        </ProfileStack.Navigator>
    );
};


const mapStateToProps = (state: TGlobalState) => ({
    theme: state.themeReducer.theme
})

export default connect(mapStateToProps)(AdminProfileStackNavigator)