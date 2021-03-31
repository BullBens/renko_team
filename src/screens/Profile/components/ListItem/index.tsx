import React from 'react';
import { useTranslation } from '@hooks';
import { View, Text, TouchableOpacity } from '@components';
import styles from './styles';

type TProps = {
  onPress?: () => void;
  title: string;
  color: string;
  borderColor: string
};

const ListItem: React.FC<TProps> = ({ title, onPress, borderColor, color }) => {
  const { t } = useTranslation()
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, { borderBottomColor: 'black' }]}>
        <Text style={[styles.title, { color: color }]}>{t(title)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
