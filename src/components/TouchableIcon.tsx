import React, { FC, useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';
import { colors } from '../theme/appTheme';

interface Props {
  iconName: string;
}

export const TouchableIcon: FC<Props> = ({ iconName }) => {
  const { changeFavoriteIcon } = useContext(AuthContext);

  return (
    <TouchableOpacity onPress={() => changeFavoriteIcon(iconName)}>
      <Icon name={iconName} size={50} color={colors.primary} />
    </TouchableOpacity>
  );
};
