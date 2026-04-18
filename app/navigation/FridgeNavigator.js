import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { View } from 'react-native';

import IngredientScreen from '../screens/IngredientScreen';
import FridgeScreen from '../screens/FridgeScreen';
import Icon from '../components/Icon';
import AddIngredientScreen from '../screens/AddIngredientScreen';
import { commonRoutes } from './SharedNavigator';

const Stack = createStackNavigator();

const FridgeNavigator = ({navigation}) => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Fridge" 
            component={FridgeScreen}
            options={{
                title: "Fridge",
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
        <Stack.Screen name="IngredientScreen" component={IngredientScreen} options={{title:"Ingredient",}}/>
        <Stack.Screen name="AddIngredientScreen" component={AddIngredientScreen} options={{title:"Add Ingredient",}}/>
    </Stack.Navigator>
)

export default FridgeNavigator;