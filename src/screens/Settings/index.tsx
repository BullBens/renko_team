import React from 'react';
import { useTranslation } from '@hooks';
import { View, Platform, Alert, Image, TouchableOpacity, Text, UsualButton } from '@components';
import { eTheme, TGlobalState } from '@types';
import { connect } from 'react-redux';
import styles from './styles';
import ImagePicker, { Image as CropImageType } from 'react-native-image-crop-picker';
import { httpPost } from '@services';
import FormData from 'form-data';
import { setProfile } from '@reducers/profile';
import ChangeLang from './components/ChangeLang';
import { changeLang } from '@reducers/appGlobalState';
import { colors, metrics, themeOptions, urls } from '@constants';
import images from '@images';
import { changeTheme } from '@reducers/themeReducer';

type TProps = {
  dispatch: any;
  appGlobalState: TGlobalState['appGlobalState'];
  profile: TGlobalState['profile'];
};

const Settings: React.FC<TProps> = ({ dispatch, profile, appGlobalState }) => {
  // Settings screen data.
  const { t } = useTranslation();
  const { lang } = appGlobalState;

  let selectPhotoProfile = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      mediaType: 'photo',
      cropperCircleOverlay: true,
      compressImageQuality: 0.8,
      cropperChooseText: t('button.title.choose'),
      cropperCancelText: t('button.title.cancel'),
      cropping: true
    }).then(val => uploadAvatar(val)).catch(err => {
      // ToDo
    })
  };

  const uploadAvatar = (img: CropImageType) => {
    const data = new FormData();
    data.append('image', {
      name: profile._id,
      type: img.mime,
      uri: Platform.OS === 'android' ? img.path : img.path.replace('file://', ''),
    });
    httpPost(urls.UPLOAD_PROFILE_IMAGE, data)
      .then((res) => {
        console.log(res)
        profile.avatar = res.data.data;
        dispatch(setProfile(profile));
      })
      .catch((err) => {
        Alert.alert('Error', JSON.stringify(err));
      });
  }

  const changeAppTheme = (label) => {
    dispatch(changeTheme(label))
  }

  const renderPalette = (theme: { value: string, label: eTheme }) => (
    <TouchableOpacity key={theme.label} onPress={() => changeAppTheme(theme.label)}>
      <View style={[styles.themeIcon, { backgroundColor: theme.value }]} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Image
          onLoad={(val) => console.log(val)}
          source={profile.avatar ? { uri: profile.avatar } : images.ONE}
          style={styles.avatar}
        />
        <TouchableOpacity onPress={selectPhotoProfile} style={{ marginVertical: metrics.pts_24 }}>
          <Text style={{ color: colors.WHITE }}>{t('Изменить фотографию')}</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center' }}>
        <ChangeLang lang={lang} onPress={(val) => dispatch(changeLang(val))} />
        <View style={styles.themeButtonsWrap}>{themeOptions.map(renderPalette)}</View>
      </View>
      <UsualButton title = {'button.title.save'}/>
    </View>
  );
};

const mapStateToProps = (state: TGlobalState) => ({
  profile: state.profile,
  appGlobalState: state.appGlobalState,
});

export default connect(mapStateToProps)(Settings);
