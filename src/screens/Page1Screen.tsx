import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerScreenProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors, styles } from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> {}

export const Page1Screen = ({ navigation }: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={styles.menuIcon}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu-outline" size={25} color={colors.primary} />
        </TouchableOpacity>
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page1Screen</Text>
      <Button
        title="Go to page 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />

      <Text style={styles.subTitle}>Navigate with arguments.</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.bigButton, styles.buttonColorPurple]}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 1,
              name: 'Peter',
            })
          }>
          <Icon name="man-outline" size={35} color={colors.white} />
          <Text style={styles.bigButtonText}>Peter</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.bigButton, styles.buttonColorOrange]}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 2,
              name: 'Maria',
            })
          }>
          <Icon name="woman-outline" size={35} color={colors.white} />
          <Text style={styles.bigButtonText}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
