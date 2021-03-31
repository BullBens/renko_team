import React from 'react';
import { StyleProp, ViewStyle, TextStyle, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Text } from '@components';
import styles from './styles';
import { colors } from '@constants';
import { useTranslation } from 'react-i18next';
import { TGlobalState } from '@types';
import { connect } from 'react-redux';

const UsualButton: React.FC<TProps> = ({ onPress, title, loading, disabled, buttonStyle, theme, titleStyle, subTitle }) => {
  const { t } = useTranslation();
  return (
    <TouchableOpacity
      disabled={loading || disabled}
      style={[styles.loginButton, buttonStyle, { borderColor: disabled ? theme.$PRIMARY_COLOR_DARK : theme.$PRIMARY_COLOR }]}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator size={'small'} animating={true} color={colors.BLACK} />
      ) : (
        <>
          <Text style={[styles.loginText, titleStyle, disabled && styles.loginTextDisabled]}>
            {title ? t(title) : ''}
          </Text>
          {subTitle && <Text style={[styles.subTitle, disabled && styles.subTitleTextDisabled]}>{t(subTitle)}</Text>}
        </>
      )}
    </TouchableOpacity>
  );
};

UsualButton.defaultProps = {
  onPress: () => console.warn('Fill in onPress method'),
  title: 'Fill in Title',
  loading: false,
  buttonStyle: {},
  titleStyle: {},
};

const mapStateToProps = (state: TGlobalState) => ({
  theme: state.themeReducer.theme
})

export default connect(mapStateToProps)(UsualButton);

type TProps = {
  onPress?: () => void;
  theme: TGlobalState['themeReducer']['theme']
  title?: string;
  subTitle?: string;
  buttonStyle?: StyleProp<ViewStyle>;
  disabledButtonStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  loading?: boolean;
  disabled?: boolean;
};
