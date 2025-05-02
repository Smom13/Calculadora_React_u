import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InfoScreen from '../screens/InfoScreen';
import WebScreen from '../screens/WebScreen';

const Stack = createNativeStackNavigator();

export default function InfoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="InformacionMain" component={InfoScreen} options={{ title: 'Información',headerShown: false }} />
      <Stack.Screen name="Web" component={WebScreen} />
    </Stack.Navigator>
  );
}