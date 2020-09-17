import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../modules/home/views';
import Details from '../../modules/details/views';

import { appURLS } from '../../utils/constans';
import { RootStackTypes } from '../../utils/Types';

const Stack = createStackNavigator<RootStackTypes>();

export const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={appURLS.HOME} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={appURLS.HOME} component={Home} />
        <Stack.Screen name={appURLS.DETAILS} component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
