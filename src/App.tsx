import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {BottomTabsNavigator} from './screens/BottomTabs.navigator';
import {History} from './screens/History.screen';
import {Home} from './screens/Home.screen';
export const App: React.FC = () => {
  return (
    // Navigationcontainer comes at the very top layer
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
};
