//Import from react/react-native
import React from 'react';
import { Text, Button } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//Components
import AppNavigator from './app/navigation/AppNavigator';
import AppContainer from './app/components/AppContainer';
import colours from './app/config/colours';

//Navigation
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';

const Tweets = ({ navigation }) => (
  <AppContainer>
    <Text>Tweets</Text>
    <Button
      title="View Tweet"
      onPress={ () => navigation.navigate("TweetDetails", {id: 1})}
    />
  </AppContainer>
);

const TweetDetails = ({ route }) => (
  <AppContainer>
    <Text>Tweet Details {route.params.id}</Text>
  </AppContainer>
)

const Stack = createStackNavigator ();
const StackNaviagtor = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: colours.primary},
      headerTintColor: "white",
    }}>

    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen 
      name="TweetDetails" 
      component={TweetDetails}
      options={({route}) => ({title: route.params.id})} 
    />
  </Stack.Navigator>
)


export default function App() {

  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer theme={navigationTheme}>
            <AppNavigator/>
          </NavigationContainer>
      </GestureHandlerRootView>  
  );
}
