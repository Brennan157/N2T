import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from '../screens/ProfileScreen';
import FridgeNavigator from './FridgeNavigator';
import { commonRoutes } from './SharedNavigator'; 
import AccountNavigator from './AccountNavigator';

const Stack = createStackNavigator();

const ParentFridgeNavigator = () => (
    <Stack.Navigator>

        <Stack.Screen 
            name={commonRoutes.fridgeMain} 
            options={{ headerShown: false }} 
            component={FridgeNavigator} 
        />
        
        <Stack.Screen 
            name={commonRoutes.account} 
            options={{ headerShown: false }} 
            component={AccountNavigator} 
        />
    </Stack.Navigator>
);

export default ParentFridgeNavigator;