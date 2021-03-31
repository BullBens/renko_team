import React, { useEffect } from 'react';
import { useTranslation } from '@hooks';
import {
  ScrollView,
  ScrollBoard,
  TopMusic,
  BigBoard,
  CardScrollBoard,
  CardBoard,
  SnapCarousel,
  View,
  Image,
} from '@components';
import { TScreenParams, TGlobalState } from '@types';
import { connect } from 'react-redux';
import { colors, metrics } from '@constants';
import { useNavigation } from '@react-navigation/native';

const music1 = [
  {
    image: 'https://i1.wp.com/sova.ponominalu.ru/wp-content/uploads/2019/12/bmth.jpg?fit=1548%2C1024&ssl=1',
    title: 'Happy Song',
    author: 'Bring Me The Horizon',
  },
  {
    image: 'https://static.ukrinform.com/photos/2017_07/thumb_files/630_360_1500723460-6759.jpg',
    title: 'In The End',
    author: 'Linkin Park',
  },
  {
    image: 'https://avatars.yandex.net/get-music-content/98892/e9084a4c.p.1529749/m1000x1000',
    title: 'Demons Are A Girl`s Best Friend',
    author: 'Powerwolf',
  },
];
const music2 = [
  {
    image: 'https://media.hardwiredmagazine.com/2017/12/red-hot-chili-peppers-band-promo-2017.jpg',
    title: 'Californication',
    author: 'Red Hot Chili Peppers',
  },
  {
    image: 'https://img.gazeta.ru/files3/594/12857594/upload-19910101_gaf_u55_001-pic4_zoom-1500x1500-90193.jpg',
    title: 'Listen To Your Heart',
    author: 'Roxette',
  },
  {
    image: 'https://i.ytimg.com/vi/aCyGvGEtOwc/maxresdefault.jpg',
    title: 'Ignorance',
    author: 'Paramore',
  },
];

type TProps = TScreenParams['Menu'] & {};

const Wall: React.FC<TProps> = ({ }) => {
  // Menu screen data.
  const { t } = useTranslation();
  const { navigate } = useNavigation()

  // useEffect(() => {
  //   httpGet('https://www.instagram.com/renko_street/?__a=1').then(res => {
  //   // httpGet('https://api.instagram.com/v1/users/search?q=renko_street&access_token=IGQVJWMm1mWFZALalB0T0xVUU1ra1EwdGpDcVlBbVNzWXByOUd6bVc2MzRDUi1tdXJxalM5alNrX3dxdkpGaWlVMTNqV0pxeXQwc1B4TDJRczJFazE2akg0SGNZAZAExsV0xYOGdiSGhZAQ0JGMUJMYWFqcQZDZD').then(res => {
  //   // httpGet('https://graph.instagram.com/me/media?access_token=IGQVJWMm1mWFZALalB0T0xVUU1ra1EwdGpDcVlBbVNzWXByOUd6bVc2MzRDUi1tdXJxalM5alNrX3dxdkpGaWlVMTNqV0pxeXQwc1B4TDJRczJFazE2akg0SGNZAZAExsV0xYOGdiSGhZAQ0JGMUJMYWFqcQZDZD').then(res => {
  //   // httpGet('https://api.instagram.com/v1/users/renko_street/media/recent?access_token=IGQVJWMm1mWFZALalB0T0xVUU1ra1EwdGpDcVlBbVNzWXByOUd6bVc2MzRDUi1tdXJxalM5alNrX3dxdkpGaWlVMTNqV0pxeXQwc1B4TDJRczJFazE2akg0SGNZAZAExsV0xYOGdiSGhZAQ0JGMUJMYWFqcQZDZD').then(res => {
  //     debugger
  //   }).catch(err => {
  //     debugger
  //   })
  // }, [])

  const toShop = () => {
    navigate('Shop')
  };

  const renderItem = ({ item, index }) => <View key={index} style={{ width: metrics.WIDTH_WINDOW, height: 200, backgroundColor: 'red' }}>
    <Image source={{ uri: item.image }} style={{ flex: 1 }} />
  </View>

  return (
    <View style={{}}>
      <SnapCarousel
        data={music1}
        horizontal
        windowSize={metrics.WIDTH_WINDOW}
        sliderHeight={200}
        sliderWidth={metrics.WIDTH_WINDOW}
        itemHeight={200}
        itemWidth={metrics.WIDTH_WINDOW}
        renderItem={renderItem}
      />
    </View>
  );
};

const mapStateToProps = (state: TGlobalState) => ({});

export default connect(mapStateToProps)(Wall);
