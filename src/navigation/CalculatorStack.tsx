import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CalculatorScreen from '../screens/CalculatorScreen';

const Stack = createNativeStackNavigator();

export default function CalculatorStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CalculadoraMain" component={CalculatorScreen} options={{ title: 'Calculadora',headerShown: false }} />
    </Stack.Navigator>
  );
}