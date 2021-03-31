import React from 'react';
import { useCallback, useMemo } from '@hooks';
import { View, ActivityIndicator, SafeAreaView, ErrorModal } from '@components';
import styles from './styles';
import { connect } from 'react-redux';
import { TGlobalState } from '@types';
import Modal from 'react-native-modal';
import { colors } from '@constants';

const Wrapper: React.FC<TProps> = ({ children }) => {

  return (
    <View style={styles.container}>
      <ErrorModal />
      {children}
      {/* <Modal isVisible={loader}>
        <ActivityIndicator color={colors.complimentary_purple_625AA4} size="large" />
      </Modal> */}
    </View>
  );
};

const mapStateToProps = (state: TGlobalState) => ({
  theme: state.themeReducer.theme,
});

export default connect(mapStateToProps)(Wrapper);

type TProps = {
  children: any;
};
