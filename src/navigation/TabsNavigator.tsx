import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalculatorStack from './CalculatorStack';
import InfoStack from './InfoStack';

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Calculadora" component={CalculatorStack} />
      <Tab.Screen name="Informacion" component={InfoStack} />
    </Tab.Navigator>
  );
}
