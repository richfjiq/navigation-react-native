import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { styles } from '../theme/appTheme';
import { RootStackParams } from '../navigation/StackNavigator';
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'> {}

export const PersonScreen = ({ navigation, route }: Props) => {
  const { changeUsername } = useContext(AuthContext);
  const params = route.params;

  useEffect(() => {
    changeUsername(params.name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
