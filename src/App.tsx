import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {BottomTabsNavigator} from './screens/BottomTabs.navigator';
import {AppProvider} from './App.provider';
export const App: React.FC = () => {
  return (
    <AppProvider>
      {/* Navigationcontainer comes at the very top layer */}
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </AppProvider>
  );
};
