import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Redux
import {Provider} from 'react-redux';
import store from './src/store';

const Stack = createStackNavigator();

// Screens
import Login from './src/screens/Login';

// Components
import Loading from './src/components/Loading';
import ModalAlert from './src/components/ModalAlert';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator headerMode="null">
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
        <Loading />
        <ModalAlert />
      </Provider>
    </>
  );
};

export default App;
