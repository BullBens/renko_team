import React from 'react';
import { useEffect, useCallback, useMemo, useTranslation, useState } from '@hooks';
import { View, Text, Modal } from '@components';
import { TScreenParams, TGlobalState } from '@types';
import { connect } from 'react-redux';
import styles from './styles';
import LottieView from 'lottie-react-native';

type TProps = TScreenParams['Loader'] & {};

const Loader: React.FC<TProps> = ({ }) => {
  // Loader screen data.
  const { t } = useTranslation();

  return (
    <Modal isVisible={false} animationIn={'fadeIn'}>
      <View style={styles.container}>
        <LottieView
          source={require('../../assets/animations/loading-animation.json')}
          loop
          autoPlay
          style={styles.content}
        />
      </View>
    </Modal>
  );
};

const mapStateToProps = (state: TGlobalState) => ({
});

export default connect(mapStateToProps)(Loader);
