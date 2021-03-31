import * as React from 'react';
import { Text, Animated } from '@components';
import { useMemo } from '@hooks'
import { View } from 'react-native';
import { connect } from 'react-redux';
import { TGlobalState } from '@types';
import images from '@images';
import ListItem from './components/ListItem';
import styles from './styles';
import { navigate } from '@services';
import { Dispatch } from 'redux';
import { logOut } from '@reducers/profile';


const Profile: React.FC<TProps> = ({ profile, dispatch, theme }) => {
  console.log(profile);
  
  const parallaxHeaderHeight = 170;
  const headerHeight = 100;
  const headerDiff = parallaxHeaderHeight - headerHeight;
  const scrollY = new Animated.Value(0);

  const animBackgroundImageTranslateY = scrollY.interpolate({
    inputRange: [-1, 0, headerDiff, headerDiff + 1],
    outputRange: [0, 0, -headerDiff, -headerDiff],
  });
  const animBackgroundImageScale = scrollY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [1.005, 1, 1],
  });
  const animProfileImageTranslateY = scrollY.interpolate({
    inputRange: [-1, 0, headerDiff, headerDiff + 1],
    outputRange: [0, 0, headerDiff / 2, headerDiff / 2],
  });
  const animProfileImageTranslateX = scrollY.interpolate({
    inputRange: [-1, 0, headerDiff, headerDiff + 1],
    outputRange: [0, 0, -headerDiff / 2, -headerDiff / 2],
  });
  const animProfileImageScaleY = scrollY.interpolate({
    inputRange: [-1, 0, headerDiff, headerDiff + 1],
    outputRange: [1.005, 1, 0.5, 0.5],
  });
  const animProfileImageScaleX = scrollY.interpolate({
    inputRange: [-1, 0, headerDiff, headerDiff + 1],
    outputRange: [1.005, 1, 0.5, 0.5],
  });

  const userLogOut = () => {
    dispatch(logOut())
  }

  const { borderColor, color } = useMemo(() => {
    return {
      borderColor: theme.$PRIMARY_COLOR_DARK,
      color: theme.$PRIMARY_COLOR
    }

  }, [theme])

  return (
    <View>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
        scrollEventThrottle={1}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
      >
        <ListItem borderColor={borderColor} color={color} title={'Настройки'} onPress={() => navigate('Settings')} />
        <ListItem borderColor={borderColor} color={color} title={'Друзья'} onPress={() => navigate('Friends')} />
        <ListItem borderColor={borderColor} color={color} title={'Посты'} onPress={() => navigate('Posts')} />
        <ListItem borderColor={borderColor} color={color} title={'Squad'} onPress={() => navigate('Group')} />
        <ListItem borderColor={borderColor} color={color} title={'Магазин'} onPress={() => navigate('Shop')} />
        <ListItem borderColor={borderColor} color={color} title={'Новости'} />
        <ListItem borderColor={borderColor} color={color} onPress={userLogOut} title={'Exit'} />
      </Animated.ScrollView>
      <Animated.Image
        source={images.FIVE}
        style={[
          styles.backgroundImage,
          { transform: [{ translateY: animBackgroundImageTranslateY }, { scale: animBackgroundImageScale }] },
        ]}
      />
      <Animated.View
        style={[
          styles.profileView,
          { transform: [{ translateY: animBackgroundImageTranslateY }, { scale: animBackgroundImageScale }] },
        ]}
      >
        <Animated.Image
          source={profile.avatar ? { uri: profile.avatar } : images.FOUR}
          style={[
            styles.profilePhoto,
            {
              transform: [
                { translateY: animProfileImageTranslateY },
                { translateX: animProfileImageTranslateX },
                { scaleX: animProfileImageScaleX },
                { scaleY: animProfileImageScaleY },
              ],
            },
          ]}
        />
        <View
          style={styles.userInfoView}
        >
          <Text style={styles.userInfo}>{profile.email}</Text>
        </View>
      </Animated.View>
    </View>
  );
};

type TProps = {
  dispatch: Dispatch;
  profile: TGlobalState['profile'];
  theme: TGlobalState['themeReducer']['theme']
};

const mapStateToProps = (state: TGlobalState) => ({
  profile: state.profile,
  theme: state.themeReducer.theme
});

export default connect(mapStateToProps)(Profile);
