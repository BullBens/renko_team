import React from 'react';
import {StyleSheet, ActivityIndicator, View} from 'react-native';
import {connect} from 'react-redux';
import {animation} from '../../../services/animation';
import {ios} from '../../../constants';
import { TGlobalState } from '@types';

const Loader: React.FC<TProps> = ({children}) => {
  ios ? animation() : null;
  return (
    <View style={{flex: 1}}>
      {children}
      {false && (
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'rgba(0,0,0,0.48)',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ActivityIndicator size={'large'} color={'#FFFFFF'} />
        </View>
      )}
    </View>
  );
};
const mapStateToProps = (state: TGlobalState) => ({
});
export default connect(mapStateToProps)(Loader);

type TProps = {
};
