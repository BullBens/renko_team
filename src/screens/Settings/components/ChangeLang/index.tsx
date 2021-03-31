import React from 'react';
import { RadioButton, View } from '@components';
import styles from './styles';
import { TGlobalState } from '@types';

type TProps = {
  lang: string;
  onPress: (val: TGlobalState['appGlobalState']['lang']) => void;
};

const ChangeLang: React.FC<TProps> = ({ lang, onPress }) => {
  return (
    <View style={styles.container}>
      <RadioButton active={lang === 'ru'} title={'Русский'} onPress={() => onPress('ru')} />
      <RadioButton active={lang === 'ua'} title={'Украинский'} onPress={() => onPress('ua')} />
      <RadioButton active={lang === 'en'} title={'Английский'} onPress={() => onPress('en')} />

    </View>
  );
};

export default ChangeLang;
