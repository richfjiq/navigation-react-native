import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export const AlbumsScreen = () => {
  const {
    authState: { isLoggedIn },
    logout,
  } = useContext(AuthContext);

  return (
    <View>
      <Text>Albums Screen</Text>

      {isLoggedIn && <Button title="Log Out" onPress={logout} />}
    </View>
  );
};
