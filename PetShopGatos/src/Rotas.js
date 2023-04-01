import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Servicos from './telas/Serviços';
import Carrinho from './telas/Carrinho';

import { cores } from './estilos';

const Tab = createBottomTabNavigator();

export default function Rotas() {
  return <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: cores.roxo,
        inactiveTintColor: cores.claro,
        activeBackgroundColor: cores.roxo,
        inactiveBackgroundColor: cores.laranja,
        style: {
          height: 70,
        },
        labelStyle: {
          width: '100%',
          flex: 3,
          fontWeight: 'bold',
          fontSize: 16,
          lineHeight: 21,
          marginTop: 5,
          paddingTop: 10,
          backgroundColor: cores.laranja 
        },
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen name="Serviços" component={Servicos} />
      <Tab.Screen name="Carrinho" component={Carrinho} />
    </Tab.Navigator>
  </NavigationContainer>
}
