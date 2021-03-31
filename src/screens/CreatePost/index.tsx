import React, { useMemo } from 'react';
import { useTranslation, useState } from '@hooks';
import { TextInput, UsualButton, SafeAreaView, Alert, Text, Platform, Image, View, KeyboardAvoidingView } from '@components';
import { TScreenParams, TGlobalState } from '@types';
import { connect } from 'react-redux';
import styles from './styles';
import { colors, urls } from '@constants';
import { goBack, httpPost } from '@services';
import FormData from 'form-data';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Region } from 'react-native-maps';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImagePicker, { Image as CropImageType } from 'react-native-image-crop-picker';

type TProps = {
  profile: TGlobalState['profile'];
  theme: TGlobalState['themeReducer']['theme']
  posts: TGlobalState['posts']
  dispatch: any
};

const CreatePost: React.FC<TProps> = ({ profile, theme, posts, dispatch }) => {
  // CreatePost screen data.
  const { t } = useTranslation();
  const { goBack } = useNavigation()
  const { params }: any = useRoute();
  const region: Region = params?.region;
  const [loading, setLoading] = useState<boolean>(false);
  const [images, setImages] = useState<CropImageType[]>([]);
  const [message, setMessage] = useState<string>('');
  const [typeWhom, setTypeWhom] = useState(['friends'])

  const createPost = () => {
    setLoading(true);
    const location: { latitude: number; longitude: number } = { latitude: region.latitude, longitude: region.longitude };
    const formData = new FormData();
    images.forEach((image) => {
      formData.append('image', {
        name: profile._id,
        type: image.path,
        uri: Platform.OS === 'android' ? image.path : image.path.replace('file://', ''),
      });
    })
    for (var key in region) {
      formData.append(key, location[key]);
    }
    formData.append('message', message)
    httpPost(urls.CREATE_POST, formData)
      .then((res) => {
        setLoading(false);
        Alert.alert('Успешно', 'Пост создан');
        goBack()
      })
      .catch((err) => {
        Alert.alert('Ошибка', 'Упс...');
        setLoading(false);
      });
  };

  let selectPhoto = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      mediaType: 'photo',
      cropping: true,
      compressImageQuality: 0.8,
      cropperChooseText: t('button.title.choose'),
      cropperCancelText: t('button.title.cancel'),
    }).then(val => {
      setImages([...images, val])
    }).catch(err => {
    })
  };

  const colorWhomTypeFriends = useMemo(() => {
    return typeWhom.includes('friends') ? theme.$PRIMARY_COLOR : theme.$PRIMARY_COLOR_DARK
  }, [typeWhom])
  const colorWhomTypeGroup = useMemo(() => {
    return typeWhom.includes('group') ? theme.$PRIMARY_COLOR : theme.$PRIMARY_COLOR_DARK
  }, [typeWhom])

  const toggleTypeFriends = () => {
    const index = typeWhom.indexOf('friends')
    if (index === -1) {
      setTypeWhom([...typeWhom, 'friends'])
    } else {
      typeWhom.splice(index, 1)
      setTypeWhom([...typeWhom])
    }
  }
  const toggleTypeGroup = () => {
    const index = typeWhom.indexOf('group')
    if (index === -1) {
      setTypeWhom([...typeWhom, 'group'])
    } else {
      typeWhom.splice(index, 1)
      setTypeWhom([...typeWhom])
    }
  }

  const renderPhoto = (item, index) => (
    <Image key={index} source={{ uri: item.path }} style={{ width: 50, height: 50, backgroundColor: 'green', marginRight: 10 }} />
  )

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <View style={styles.head}>
          {
            images?.length < 3 ?
              <TouchableOpacity
                onPress={selectPhoto}
                style={[styles.imageContainer, { borderColor: theme.$PRIMARY_COLOR }]}
              >
                <Text style={styles.titleImage}>{t('Загрузить фото')}</Text>
              </TouchableOpacity> : null
          }
          <View style={styles.typeWhomView}>
            <TouchableOpacity onPress={toggleTypeFriends}>
              <Text style={[styles.titleTypeWhom, { color: colorWhomTypeFriends }]}>{t('Friends')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleTypeGroup}>
              <Text style={[styles.titleTypeWhom, { color: colorWhomTypeGroup }]}>{t('Group')}</Text>
            </TouchableOpacity>
          </View>
        </View>
        {
          images.length ?
            <View style={{ width: '100%', height: 50, flexDirection: 'row', }}>
              {
                images?.map(renderPhoto)
              }
            </View> : null
        }
        <TextInput
          onChangeText={setMessage}
          placeholderTextColor={colors.GRAY}
          returnKeyType={'next'}
          placeholder={t('Напиши тут свой пост...')}
          multiline
          defaultValue={message}
          style={styles.message}
        />
        <UsualButton loading={loading} disabled={message.length == 0} onPress={createPost} title={"button.title.create"} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state: TGlobalState) => ({
  profile: state.profile,
  posts: state.posts,
  theme: state.themeReducer.theme
});

export default connect(mapStateToProps)(CreatePost);
