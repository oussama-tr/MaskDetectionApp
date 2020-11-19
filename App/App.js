import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SplashScreen, HomeScreen, LoadingScreen } from './Containers/';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <>
            <Stack.Screen name="Splash" component={SplashScreen}  options={{headerShown: false}} />
            <Stack.Screen name="Home" component={HomeScreen}  options={{headerShown: false}} />
            <Stack.Screen name="Loading" component={LoadingScreen}  options={{headerShown: false}} />
          </>
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
