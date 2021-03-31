import * as React from 'react';
import { useEffect, useState, useMemo, useTranslation } from '@hooks';
import { View, Animated, UsualButton, TextLink, Platform, KeyboardAvoidingView, SafeAreaView, Text, SnapCarousel } from '@components';
import styles from './styles';
import { strings, metrics, colors } from '@constants';
import { connect } from 'react-redux';
import { TAuthRequest, TGlobalState } from '@types';
import { TextInput } from 'react-native-gesture-handler';
import { Dispatch } from 'redux';
import { useNavigation } from '@react-navigation/native';
import { logIn } from '@reducers/profile';
import { typeAccount } from './utils';

const Login: React.FC<TProps> = ({ dispatch, theme }) => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();
  const [login, setLogin] = useState<TAuthRequest['login']>('');
  const [password, setPassword] = useState<TAuthRequest['password']>('');
  const fadeAnimAppName = new Animated.Value(0);

  const fadeAnimSocialAuthView = new Animated.Value(0);

  useEffect(() => {
    showAppName();
    showSocialAuthView();
    return () => { };
  }, []);

  const showAppName = () => {
    Animated.timing(fadeAnimAppName, {
      useNativeDriver: true,
      toValue: 1,
      duration: 1500,
    }).start();
  };

  const showSocialAuthView = () => {
    Animated.timing(fadeAnimSocialAuthView, {
      useNativeDriver: true,
      toValue: 1,
      duration: 1500,
    }).start();
  };

  const toRegistration = () => {
    navigate('Registration')
  };

  const logInProfile = () => {
    debugger

    dispatch(logIn(login, password));
  };

  const checkValidEmail = useMemo(() => {
    // return validateEmail(email);
    return login.length > 0
  }, [login]);

  const checkValidPassword = useMemo(() => {
    return password.length > 5;
  }, [password]);

  const colorEmailTextInput = useMemo(() => {
    if (login.length > 0) {
      return colors.WHITE;
    } else {
      return colors.GRAY;
    }
  }, [login]);

  const colorPasswordTextInput = useMemo(() => {
    if (password.length > 0) {
      return colors.WHITE;
    } else {
      return colors.GRAY;
    }
  }, [password]);


  const renderItem = ({ item, index }) => <View style={{ height: 50, alignItems: 'center', justifyContent: 'center' }} key={index}>
    <Text style={styles.titleTypeAccount}>{item.title}</Text>
  </View>


  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container} contentContainerStyle={{ alignItems: 'center' }} behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <View style={styles.textInputView}>
          <Animated.Text style={[styles.title, { color: theme.$PRIMARY_COLOR }]}>{strings.APP_NAME}</Animated.Text>
          <TextInput
            onChangeText={setLogin}
            style={[styles.textInput, { borderBottomColor: colorEmailTextInput }]}
            placeholder="Login"
            selectionColor={colors.WHITE}
            value={login}
            dataDetectorTypes="address"
            keyboardType="email-address"
            placeholderTextColor={colors.GRAY}
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            style={[styles.textInput, { borderBottomColor: colorPasswordTextInput }]}
            placeholder="Пароль"
            placeholderTextColor={colors.GRAY}
            textContentType="password"
            secureTextEntry={true}
          />

        </View>

        <View style={{ width: '100%', height: 50, alignItems: 'center', justifyContent: 'center' }}>
          <SnapCarousel
            renderItem={renderItem}
            horizontal
            data={typeAccount}
            itemWidth={100}
            itemHeight={100}
            windowSize={200}
            sliderHeight={100}
            sliderWidth={metrics.WIDTH_WINDOW}
          />
        </View>

        <UsualButton
          onPress={logInProfile}
          disabled={!checkValidEmail || !checkValidPassword}
          loading={false}
          title={t('Log in')}
          buttonStyle={{ marginVertical: metrics.pts_16, borderColor: theme.$PRIMARY_COLOR }}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

type TProps = {
  dispatch: Dispatch;
  theme: TGlobalState['themeReducer']['theme']
};

const mapStateToProps = (state: TGlobalState) => ({
  theme: state.themeReducer.theme
});

export default connect(mapStateToProps)(Login);
