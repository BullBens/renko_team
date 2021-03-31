import React, { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { useTranslation } from '@hooks';
import { View, Icon } from '@components';
import styles from './styles';
import { connect } from 'react-redux';
import { TGlobalState } from '@types';

type TProps = {
  navigation: any;
  state: any;
  theme: TGlobalState['themeReducer']['theme']
};

const AdminTabBar: React.FC<TProps> = ({ navigation, state, theme }) => {
  const { t } = useTranslation();

  const generalIndex: number = state?.index || 0;

  const jump = useCallback((routeName: string) => () => navigation.jumpTo(routeName), []);

  return (
    <View style={styles.container}>
      <TouchableOpacity disabled={generalIndex === 0} style={styles.eachScreen} onPress={jump('Profile')}>
        <Icon name={'Profile'} color={generalIndex === 0 ? theme.$PRIMARY_COLOR : theme.$PRIMARY_COLOR_DARK} size={28} />
        {/* <Text style={[styles.text, generalIndex === 0 && styles.textActive]}>{t('Profile')}</Text> */}
      </TouchableOpacity>
      <TouchableOpacity disabled={generalIndex === 1} style={styles.eachScreen} onPress={jump('Home')}>
        <Icon name={'Live'} color={generalIndex === 1 ? theme.$PRIMARY_COLOR : theme.$PRIMARY_COLOR_DARK} size={28} />
        {/* <Text style={[styles.text, generalIndex === 1 && styles.textActive]}>{t('Home')}</Text> */}
      </TouchableOpacity>
      <TouchableOpacity disabled={generalIndex === 2} style={styles.eachScreen} onPress={jump('Wall')}>
        <Icon name={'Arena'} color={generalIndex === 2 ? theme.$PRIMARY_COLOR : theme.$PRIMARY_COLOR_DARK} size={28} />
        {/* <Text style={[styles.text, generalIndex === 2 && styles.textActive]}>{t('Menu')}</Text>  */}
      </TouchableOpacity>
    </View>
  );
};


const mapStateToProps = (state: TGlobalState) => ({
  theme: state.themeReducer.theme,
});

export default connect(mapStateToProps)(AdminTabBar);
