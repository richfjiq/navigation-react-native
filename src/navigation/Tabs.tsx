import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { Tab1Screen } from '../screens/Tab1Screen';
// import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';
import { Platform } from 'react-native';
import { TopTapNavigator } from './TopTapNavigator';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{ backgroundColor: colors.primary }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon({ color }) {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'logo-react';
              break;
            case 'Tab2Screen':
              iconName = 'game-controller-outline';
              break;
            case 'StackNavigator':
              iconName = 'musical-notes-outline';
              break;
          }
          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      <BottomTabAndroid.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
        }}
        component={Tab1Screen}
      />
      <BottomTabAndroid.Screen
        name="Tab2Screen"
        options={{ title: 'Tab2' }}
        component={TopTapNavigator}
      />
      <BottomTabAndroid.Screen
        name="StackNavigator"
        options={{ title: 'Stack' }}
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
};

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: colors.white,
      }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon({ color }) {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'logo-react';
              break;
            case 'Tab2Screen':
              iconName = 'game-controller-outline';
              break;
            case 'StackNavigator':
              iconName = 'musical-notes-outline';
              break;
          }
          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      <BottomTabIOS.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
        }}
        component={Tab1Screen}
      />
      <BottomTabIOS.Screen
        name="Tab2Screen"
        options={{ title: 'Tab2', headerShown: false }}
        component={TopTapNavigator}
      />
      <BottomTabIOS.Screen
        name="StackNavigator"
        options={{ title: 'Stack', headerShown: false }}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};
