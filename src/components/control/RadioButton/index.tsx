import React from 'react';
import { useTranslation } from '@hooks';
import { TouchableOpacity, Text } from '@components';
import styles from './styles';
import { TGlobalState } from '@types';
import { connect } from 'react-redux';

type TProps = {
  title: string;
  onPress: () => void;
  active: boolean;
  disable?: boolean;
  theme: TGlobalState['themeReducer']['theme']
};

const RadioButton: React.FC<TProps> = ({ title, onPress, active, disable = false, theme }) => {
  const { t } = useTranslation();
  return (
    <TouchableOpacity
      style={[styles.button, { borderBottomColor: active ? theme.$PRIMARY_COLOR : theme.$PRIMARY_COLOR_DARK }]}
      disabled={disable}
      onPress={onPress}
    >
      <Text style={[styles.text, active ? styles.activeText : styles.inactiveText]}>{t(title)}</Text>
    </TouchableOpacity>
  );
};

const mapStateToProps = (state: TGlobalState) => ({
  theme: state.themeReducer.theme
})

export default connect(mapStateToProps)(RadioButton);
