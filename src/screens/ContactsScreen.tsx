import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';

import { styles } from '../theme/appTheme';

export const ContactsScreen = () => {
  const {
    signIn,
    authState: { isLoggedIn },
  } = useContext(AuthContext);

  return (
    <View style={[styles.globalMargin, styles.marginTop]}>
      <Text style={styles.title}>Contacts Screen</Text>

      {!isLoggedIn && <Button title="Sign In" onPress={signIn} />}
    </View>
  );
};
