import React from 'react';
import { useEffect, useCallback, useMemo, useTranslation, useState } from '@hooks';
import { View, Text, Alert, ActivityIndicator } from '@components';
import { TScreenParams, TGlobalState } from '@types';
import { connect } from 'react-redux';
import styles from './styles';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { httpPost } from '@services';
import { urls } from '@constants';

type TProps = {};

const QrCodeScanner: React.FC<TProps> = ({ }) => {
  // QrCodeScanner screen data.
  const { t } = useTranslation();
  const [loader, setLoader] = useState(false);

  const onReadQRCode = (code: string) => {
    setLoader(true);
    httpPost(urls.ADD_TO_FRIEND_LIST, { code })
      .then((res) => {
        Alert.alert(t('Поздравляем'), `Пользователь ${res.data.login} теперь ваш друг`);
        setLoader(false);
      })
      .catch((err) => {
        Alert.alert('Упс...', 'Ошибка при добавлении пользователя в друзья');
        setLoader(false);
      });
  };

  return (
    <View style={styles.container}>
      {/* {loader ? <InfiniteLoader /> : <QRCodeScanner onRead={(val) => onReadQRCode(val.data)} />} */}
    </View>
  );
};

const mapStateToProps = (state: TGlobalState) => ({});

export default connect(mapStateToProps)(QrCodeScanner);
