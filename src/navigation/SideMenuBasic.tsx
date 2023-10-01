import React from 'react';
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import Icon from 'react-native-vector-icons/Ionicons';

import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';

const Drawer = createDrawerNavigator();

export const SideMenuBasic = () => {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={() => ({
        drawerType: width >= 768 ? 'permanent' : 'front',
      })}>
      <Drawer.Screen
        name="StackNavigator"
        options={{ title: 'Home' }}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{ title: 'Settings' }}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};
