import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AdminTabBar } from '@components'
import AdminProfileStackNavigator from "./AdminProfileStackNavigator";
import AdminHomeStackNavigator from "./AdminHomeStackNavigator";
import AdminWallStackNavigator from "./AdminWallStackNavigator";

const TabStack = createBottomTabNavigator();
export const AdminTabNavigator: React.FC = () => {
    const renderTab = (props: any) => <AdminTabBar {...props} />;
    return (
        <TabStack.Navigator initialRouteName={"Home"} tabBar={renderTab} tabBarOptions={{ keyboardHidesTabBar: true }}>
            <TabStack.Screen name={'Profile'} component={AdminProfileStackNavigator} />
            <TabStack.Screen name={'Home'} component={AdminHomeStackNavigator} />
            <TabStack.Screen name={'Wall'} component={AdminWallStackNavigator} />
        </TabStack.Navigator>
    );
};