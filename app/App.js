import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './src/services/RootNavigationService';

// Redux
import { Provider } from 'react-redux';
import store from './src/store';

// Screens
import Welcome from './src/screens/Welcome';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import Home from './src/screens/Home';
import Group from './src/screens/Group';

// Components
import Loading from './src/components/Loading';
import ModalAlert from './src/components/ModalAlert';
import Header from './src/components/Header';
import Menu from './src/components/Menu';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <Provider store={store}>
        <Header />
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator headerMode="null">
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Group" component={Group} />
          </Stack.Navigator>
        </NavigationContainer>
        <Loading />
        <ModalAlert />
        <Menu />
      </Provider>
    </>
  );
};

export default App;
