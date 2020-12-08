import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Redux
import { Provider } from 'react-redux';
import store from './src/store';

// Screens
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';

// Components
import Loading from './src/components/Loading';
import ModalAlert from './src/components/ModalAlert';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator headerMode="null">
            <Stack.Screen name="Login" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Navigator>
        </NavigationContainer>
        <Loading />
        <ModalAlert />
      </Provider>
    </>
  );
};

export default App;
