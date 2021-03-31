import React from 'react';
import {useCallback, useMemo, useEffect} from '@hooks';
import {View, Text, Animated} from '@components';
import styles from './styles';
import {colors} from '@constants';

const fadeAnimLight = new Animated.Value(0);
const fadeAnimOpacity = new Animated.Value(0);
const CrazyMetroText: React.FC<TProps> = ({one, two, three, vs, anim}) => {
  useEffect(() => {
    if (vs) {
      Animated.timing(fadeAnimOpacity, {
        useNativeDriver: false,
        toValue: 1,
        duration: 3000,
      }).start(() => {
        if (anim) {
          setTimeout(() => {
            Animated.parallel([
              Animated.timing(fadeAnimLight, {
                useNativeDriver: false,
                toValue: 2,
                duration: 2000,
              }),
            ]).start();
          }, 1000);
        }
      });
    }
  }, []);

  const color = fadeAnimLight.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ['rgb(255, 255, 255)', 'rgb(255, 18, 0)', 'rgb(255, 255, 255)'],
  });

  const opacity = fadeAnimOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <View style={styles.container}>
      {one && <Animated.Text style={[styles.number, styles.one, {color: colors.WHITE}]}>1</Animated.Text>}
      {two && <Animated.Text style={[styles.number, styles.two, {color: colors.WHITE}]}>2</Animated.Text>}
      {three && <Animated.Text style={[styles.number, styles.three, {color: colors.WHITE}]}>3</Animated.Text>}
      {vs && (
        <Animated.Text
          style={[
            styles.vs,
            {
              color,
              opacity,
            },
          ]}
        >
          vs
        </Animated.Text>
      )}
    </View>
  );
};

export default CrazyMetroText;

type TProps = {
  fadeAnimOpacity?: Animated.Value;
  anim?: boolean;
  one?: any;
  two?: any;
  three?: any;
  vs?: boolean;
};
