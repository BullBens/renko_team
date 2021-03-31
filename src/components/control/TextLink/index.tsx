import React, {FC, useMemo} from 'react';
import {Text, TouchableOpacity} from '@components';

import styles from './styles';
import {TextProps} from 'react-native';

type TProps = TextProps & {
  onPress: () => void;
  text: string;
  borderColor?: string;
  disabled: boolean;
};

const TextLink: FC<TProps> = ({onPress, text, borderColor, disabled, ...textProps}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, borderColor ? {borderBottomColor: borderColor} : null]}
      onPress={onPress}
    >
      <Text {...textProps}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TextLink;
