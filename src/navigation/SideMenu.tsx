import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { SettingsScreen } from '../screens/SettingsScreen';
// import { StackNavigator } from './StackNavigator';
import { colors, styles } from '../theme/appTheme';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const SideMenu = () => {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={props => <MenuContent {...props} />}
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}>
      <Drawer.Screen
        options={{ headerShown: false }}
        name="TabNavigator"
        component={Tabs}
      />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuContent = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
          }}
          style={styles.avatar}
        />
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="boat-outline" size={20} color={colors.black} />
          <Text
            style={styles.menuText}
            onPress={() => navigation.navigate('StackNavigator')}>
            Stack Navigation
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton}>
          <Icon name="boat-outline" size={20} color={colors.black} />
          <Text
            style={styles.menuText}
            onPress={() => navigation.navigate('SettingsScreen')}>
            Settings
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
