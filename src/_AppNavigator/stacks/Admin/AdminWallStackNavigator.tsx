import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Wall } from '@screens';
import { TGlobalState } from '@types';
import { connect } from "react-redux";
import { headerStyle } from '../../options';
import { fonts } from '@constants';

type TProps = {
    theme: TGlobalState['themeReducer']['theme']
}

const FeedStack = createStackNavigator();

const AdminWallStackNavigator: React.FC<TProps> = ({ theme }) => {
    return (
        <FeedStack.Navigator screenOptions={{
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
        </FeedStack.Navigator>
    );
};

const mapStateToProps = (state: TGlobalState) => ({
    theme: state.themeReducer.theme
})


export default connect(mapStateToProps)(AdminWallStackNavigator)