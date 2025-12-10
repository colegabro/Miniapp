import React from 'react';  
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importando as telas
import HomeScreen from './src/screens/HomeScreen';
import StateScreen from './src/screens/StateScreen';
import PropsScreen from './src/screens/PropsScreen';
import StyleScreen from './src/screens/StyleScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerStyle: { backgroundColor: '#6200ee' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'RN Lab: Menu' }} />
        <Stack.Screen name="State" component={StateScreen} options={{ title: 'Aula: Hooks (State)' }} />
        <Stack.Screen name="Props" component={PropsScreen} options={{ title: 'Aula: Componentes & Props' }} />
        <Stack.Screen name="Style" component={StyleScreen} options={{ title: 'Aula: Estilização' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}