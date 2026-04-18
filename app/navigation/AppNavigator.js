import React from "react";
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import colours from "../config/colours";
import NewMealButton from "./NewMealButton";

import NewMealPlanScreen from "../screens/NewMealPlanScreen";
import ParentRecipeNavigator from "./ParentRecipeNavigator";
import ParentFridgeNavigator from "./ParentFridgeNavigator";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      //tabBarActiveBackgroundColor: colours.primary,
      tabBarActiveTintColor: colours.primary,
      tabBarInactiveBackgroundColor: colours.white,
      tabBarInactiveTintColor: colours.medium,
    }}>

    <Tab.Screen 
      name="Home" 
      component={ParentRecipeNavigator} 
      options={{
        headerShown: false, 
        tabBarIcon: ({size, color}) => <Ionicons 
        name="home" 
        size={size} 
        color={color}/>}} 
    />

    <Tab.Screen 
      name="NewMeal" 
      component={NewMealPlanScreen} 
      options={({ navigation }) =>({
        title:"New Meal Plan",
        presentation: "modal",
        tabBarButton: () => <NewMealButton onPress={() => navigation.navigate("NewMeal")} />,
        tabBarIcon: ({size, color}) => <MaterialCommunityIcons 
        name="plus-circle" 
        size={size} 
        color={color}/>})}
      />

    <Tab.Screen 
      name="Fridge" 
      component={ParentFridgeNavigator} 
      options={{
        headerShown: false, 
        tabBarIcon: ({size, color}) => <MaterialCommunityIcons 
  r     name="fridge" 
        size={size} 
        color={color}/>}}
      />

  </Tab.Navigator>

)

export default AppNavigator;