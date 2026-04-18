import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from '../screens/ProfileScreen';
import RecipeNavigator from './RecipeNaviator';
import { commonRoutes } from './SharedNavigator';
import AccountNavigator from './AccountNavigator';

const Stack = createStackNavigator();

const ParentRecipeNavigator = () => (
    <Stack.Navigator>

        <Stack.Screen 
            name={commonRoutes.home} 
            options={{ headerShown: false }} 
            component={RecipeNavigator}
        />

        <Stack.Screen 
            name={commonRoutes.account} 
            options={{ headerShown: false }} 
            component={AccountNavigator}
        />
    </Stack.Navigator>
)

export default ParentRecipeNavigator;