import React, {useEffect} from 'react';
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

const App = () => {
  useEffect(() => {
    console.log('Store: ', store.getState().loading.show);
  });
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator headerMode="null">
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
        {store.getState().loading.show && <Loading />}
      </Provider>
    </>
  );
};

export default App;
