import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Page3Screen = ({ navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page3Screen</Text>

      <Button title="Back" onPress={() => navigation.pop()} />

      <Button title="Back to page 1" onPress={() => navigation.popToTop()} />
    </View>
  );
};
