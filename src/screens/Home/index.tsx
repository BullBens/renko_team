import React from 'react';
import { useTranslation, useState, useEffect, useRef } from '@hooks';
import { View, TouchableOpacity, Text, Icon } from '@components';
import { TGlobalState, TPostResponse } from '@types';
import { connect } from 'react-redux';
import styles from './styles';
import MapView, { PROVIDER_GOOGLE, Region, } from 'react-native-maps';
import { customMapStyle, colors, metrics } from '@constants';
import { animation } from '@helpers';
import { navigate } from '@services';

type TProps = {
  dispatch: any;
  posts: TGlobalState['posts']
  theme: TGlobalState['themeReducer']['theme']
};


const Main: React.FC<TProps> = ({ dispatch, posts, theme }) => {
  const { t } = useTranslation();
  const refMapView = useRef<MapView>(null);
  const [selectedPost, setSelectedPost] = useState<TPostResponse>();
  const [selectLocation, setSelectLocation] = useState(false)
  const [region, setRegion] = useState<Region>()
  const [{ post, isVisible }, setPost] = useState<{ post: null | TPostResponse, isVisible: boolean }>({ post: null, isVisible: false })

  useEffect(() => {
    if (selectedPost) {
      const region = {
        latitude: Number(selectedPost.latitude),
        longitude: Number(selectedPost.longitude),
        latitudeDelta: 3.0722,
        longitudeDelta: 3.0221,
      };
      refMapView?.current?.animateToRegion(region);
    }
  }, [selectedPost]);



  const handleOnCreatePress = () => {
    navigate('CreatePost', { region })
    setSelectLocation(false)
  }

  const onPressPostMarker = (post: TPostResponse) => {
    setPost({ post, isVisible: true })
  }

  const onClosePostModal = () => {
    console.log('asd');
    setPost({ post: null, isVisible: false })
  }

  // const renderEvents = useMemo(() => {
  //   return posts.map((item) => (<PostMarker onPress={onPressPostMarker} messageColor={theme.$PRIMARY_COLOR} item={item} key={item._id} />))
  // }, [posts, theme])

  animation();
  return (
    <View style={styles.container}>

      <MapView
        provider={PROVIDER_GOOGLE}
        ref={refMapView}
        // liteMode={true}

        loadingBackgroundColor={colors.BLACK}
        loadingIndicatorColor={colors.RED}
        moveOnMarkerPress={true}
        camera={{
          center: {
            latitude: 50.005715,
            longitude: 36.229183,
          },
          pitch: 65,
          heading: 0,

          // Only on iOS MapKit, in meters. The property is ignored by Google Maps.
          altitude: 1,

          // Only when using Google Maps.
          zoom: 18
        }}
        showsUserLocation={true}
        showsCompass={false}
        loadingEnabled={true}
        rotateEnabled={true}
        customMapStyle={customMapStyle}
        onRegionChangeComplete={setRegion}
        style={styles.mapView}
      >
        {/* {
          !selectLocation && renderEvents
        } */}

      </MapView>
      {
        selectLocation &&
        <>
          <View style={styles.markerFixed}>
            <Icon name={'pin'} size={48} color={theme.$PRIMARY_COLOR} />
          </View>
          <TouchableOpacity onPress={handleOnCreatePress} style={[styles.createPostBtn, { backgroundColor: theme.$PRIMARY_COLOR_DARK }]}>
            <Text style={styles.createPostTitle}>{t('Создать')}</Text>
          </TouchableOpacity >
        </>
      }
      <TouchableOpacity
        onPress={() => setSelectLocation(!selectLocation)}
        style={[styles.plusBtn, {
          transform: [{
            rotate: selectLocation ? '45deg' : '0deg'
          }]
        }]}
      >
        <Icon name="plus" size={metrics.pts_24} color={theme.$PRIMARY_COLOR} />
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state: TGlobalState) => ({
  posts: state.posts,
  theme: state.themeReducer.theme
});

export default connect(mapStateToProps)(Main);
