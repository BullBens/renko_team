import { ImageBackground, Text, View } from '@components';
import React from 'react';
import { Marker } from 'react-native-maps';
import styles from './styles'

type TProps = {
  item: any,
  key: number
};

function EMarker({ item, key }: any) {
  return (
    <Marker
      key={key}
      // tracksViewChanges={false}
      title={''}
      coordinate={{
        latitude: item.latitude,
        longitude: item.longitude,
      }}
    >
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <ImageBackground source={{ uri: item.uri }} style={styles.imageBackground} resizeMode={'cover'}   >
          </ImageBackground>
          <View style={styles.infoView}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.triangle}></View>
          </View>
        </View>
      </View>
    </Marker>
  );
};

export const EventMarker = React.memo(EMarker);

