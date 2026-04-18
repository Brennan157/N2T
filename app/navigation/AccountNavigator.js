import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from '../screens/ProfileScreen';
import AboutScreen from '../screens/AboutScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import PrefrencesScreen from '../screens/PrefrencesScreen';
import { commonRoutes } from './SharedNavigator';

export const accountRoutes = {
  account: 'ProfileScreen',
  ...commonRoutes,
};

const Stack = createStackNavigator();


const AccountNavigator = () => (
    <Stack.Navigator>

        <Stack.Screen 
            name="Profile" 
            component={ProfileScreen}
        />
        <Stack.Screen 
            name="EditProfileScreen" 
            component={EditProfileScreen}
            options={{title:"Edit Profile",}}
        />
        <Stack.Screen 
            name="PrefrencesScreen" 
            component={PrefrencesScreen}
            options={{title:"Prefrences",}}
        />
        <Stack.Screen 
            name="AboutScreen" 
            component={AboutScreen}
            options={{title:"About",}}
        />

    </Stack.Navigator>
)

export default AccountNavigator;