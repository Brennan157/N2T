import React from 'react'
import Icon from '../components/Icon';
import { createStackNavigator } from "@react-navigation/stack";
import { View } from 'react-native';
import { commonRoutes } from './SharedNavigator';


import HomeScreen from '../screens/HomeScreen';
import RecipeScreen from '../screens/RecipeScreen';

const Stack = createStackNavigator();

const RecipeNavigator = ({navigation}) => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Recipes" 
            component={HomeScreen}
            options={{
                title: "Recipe",
                presentation: "modal",
                headerRight: () => (
                    <View style={{ marginRight: 10 }}>
                        <Icon 
                            onPress={() => navigation.navigate(commonRoutes.account)} 
                            name="account"
                        />
                    </View>
                ),
            }}

        />
        <Stack.Screen 
            name="RecipeScreen" 
            component={RecipeScreen} 
            options={{
                title:"Recipe",
                headerRight: () => (
                    <View style={{ marginRight: 10 }}>
                        <Icon
                            name="trash-can-outline"
                        />
                    </View>
                ),
            }}/>
    </Stack.Navigator>
)

export default RecipeNavigator;