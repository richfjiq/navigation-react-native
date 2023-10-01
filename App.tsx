import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
// import { SideMenuBasic } from './src/navigation/SideMenuBasic';
import { SideMenu } from './src/navigation/SideMenu';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <SideMenu />
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({ children }: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
