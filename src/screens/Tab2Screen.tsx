import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

export const Tab2Screen = () => {
  useEffect(() => {
    console.log('Tab2Screen effect');
  }, []);

  return (
    <View>
      <Text>Tab2 Screen</Text>
    </View>
  );
};
