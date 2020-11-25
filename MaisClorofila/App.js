import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

// Screens
import Login from './src/screens/Login';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <NavigationContainer>
        <Stack.Navigator headerMode="null">
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
