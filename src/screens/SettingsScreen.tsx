import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { AuthContext } from '../context/AuthContext';
import { colors, styles } from '../theme/appTheme';

export const SettingsScreen = () => {
  const { authState } = useContext(AuthContext);

  return (
    <View style={[styles.marginTop, styles.globalMargin]}>
      <Text style={styles.title}>Settings Screen</Text>

      <Text>{JSON.stringify(authState, null, 4)}</Text>

      {authState.favoriteIcon && (
        <Icon name={authState.favoriteIcon} size={50} color={colors.primary} />
      )}
    </View>
  );
};
