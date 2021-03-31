import React from 'react';
import { useTranslation, useMemo } from '@hooks';
import { View, Modal, Text, LottieView, Icon } from '@components';
import { TScreenParams, TGlobalState } from '@types';
import { connect } from 'react-redux';
import styles from './styles';
import { setError } from '@reducers/_additional';
import { colors } from '@constants';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';





type TProps = {
  error: TGlobalState['_additional']['error']
  theme: TGlobalState['themeReducer']['theme']
  dispatch: any
};

const ErrorModal: React.FC<TProps> = ({ error, dispatch, theme }) => {
  // Loader screen data.
  const { t } = useTranslation();

  const message = useMemo(() => {
    if (typeof error === 'string') {
      return error
    }
    else if (typeof error === 'object' && !!error) {
      return Object.values(error).join(",")
    } else {
      return ''
    }
  }, [error])

  const cancelModal = () => {

    dispatch(setError(null))
  }

  return (
    <Modal
      backdropOpacity={0.8}
      animationInTiming={700}
      animationOutTiming={700}
      useNativeDriver={true}

      backdropTransitionOutTiming={0}
      backdropColor={'black'}
      isVisible={!!error}
      animationIn={'shake'}
      // animationIn={'pulse'}
      animationOut={'zoomOut'}
      hideModalContentWhileAnimating={true}
      onSwipeComplete={cancelModal}
      onBackButtonPress={cancelModal}
      style={{}}
      onBackdropPress={cancelModal}
    >

      <View style={[styles.container, { borderColor: theme.$PRIMARY_COLOR_DARK, margin: 0, }]}>
        <View style={{ width: '100%', alignItems: 'flex-end' }}>
          <TouchableWithoutFeedback onPress={() => cancelModal()} style={{ width: 24, height: 24, }}>
            <View>
              <Icon name={'cancel'} size={24} color={colors.RED} />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={{ height: 100, width: '100%' }}>
          <LottieView source={require('../../../assets/animations/error-animation.json')} autoPlay loop />
        </View>
        <Text style={{ color: 'white', fontSize: 18 }}>{t(message)}</Text>
      </View>
    </Modal >
  );
};

const mapStateToProps = (state: TGlobalState) => ({
  error: state._additional.error,
  theme: state.themeReducer.theme
});

export default connect(mapStateToProps)(ErrorModal);
