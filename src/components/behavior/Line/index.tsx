import * as React from 'react';
import {useCallback, useMemo} from '@hooks';
import {View} from '@components';
import styles from './styles';
import {colors} from '@constants';

type TProps = {
  hidden?: boolean;
  active: boolean;
};

const Line: React.FC<TProps> = ({hidden, active}) => {
  return hidden ? null : (
    <View style={[styles.container, {backgroundColor: active ? colors.RED : colors.WHITE}]}>{/* content */}</View>
  );
};

export default Line;
