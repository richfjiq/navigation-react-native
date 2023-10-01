import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';

import { styles } from '../theme/appTheme';

export const Page2Screen = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'Hello World',
      headerBackTitle: 'Back',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page2Screen</Text>

      <Button
        title="Go to page 3."
        onPress={() =>
          navigator.dispatch(CommonActions.navigate('Page3Screen'))
        }
      />
    </View>
  );
};
