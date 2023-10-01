import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { colors } from '../theme/appTheme';

const Tab = createMaterialTopTabNavigator();

export const TopTapNavigator = () => {
  const { top: paddingTop } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{ paddingTop }}
      sceneContainerStyle={{ backgroundColor: colors.white }}
      screenOptions={({ route }) => ({
        tabBarIcon({ color }) {
          let iconName: string = '';

          switch (route.name) {
            case 'Chat':
              iconName = 'chatbubbles-outline';
              break;
            case 'Contacts':
              iconName = 'people-circle-outline';
              break;
            case 'Albums':
              iconName = 'albums-outline';
              break;
          }
          return <Icon name={iconName} size={20} color={color} />;
        },
        tabBarPressColor: colors.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
        tabBarStyle: {
          borderTopColor: colors.primary,
          shadowColor: 'transparent',
          elevation: 0,
        },
      })}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};
