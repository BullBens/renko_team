import { Platform } from 'react-native';
import { TouchableOpacity as guesterTouchableOpacity } from 'react-native-gesture-handler';
import { TouchableOpacity as reactTouchableOpacity } from 'react-native';

export { default as Loader } from './behavior/Loader';
export { default as CitiesModal } from './control/CitiesModal'
// export {default as ViderScrollBoard} from './container/CardScrollBoard';
export { default as PrimaryActionButton } from './control/PrimaryActionButton';
export {
  ActivityIndicator,
  Alert,
  Platform,
  StyleSheet,
  Animated,
  Keyboard,
  FlatList,
  SectionList,
  ScrollView,
  Easing,
  ImageBackground,
  SafeAreaView,
  RefreshControl,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export const TouchableOpacity = Platform.OS === 'ios' ? reactTouchableOpacity : guesterTouchableOpacity;

export { default as LottieView } from 'lottie-react-native';
export { default as SnapCarousel } from 'react-native-snap-carousel';
export { default as Swipeout } from 'react-native-swipeout';
export { default as LinearGradient } from 'react-native-linear-gradient'
// export { default as MaskedView } from '@react-native-masked-view/masked-view'

//BEHAVIOR
export { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
export { default as Line } from './behavior/Line';

//CONTROL
export { default as UsualButton } from './control/UsualButton';
export { default as TextLink } from './control/TextLink';
export { default as RadioButton } from './control/RadioButton';
export { default as AdminTabBar } from './control/AdminTabBar';

// MODULES
export { default as Modal } from 'react-native-modal';
export { default as Image } from 'react-native-fast-image';

// TYPOGRAPHY
export { default as UsualTextInput } from './typography/UsualTextInput';
export { default as CrazyMetroText } from './typography/CrazyMetroText';
export { default as Text } from './typography/Text';
export { default as Icon } from './typography/Icon';

// DATAVIEW

// LAYOUT
export { default as KeyboardAvoidingView } from './layout/KeyboardAvoidingView';
export { default as Wrapper } from './layout/Wrapper'

// MARKERS
export { EventMarker } from './marker/EventMarker'

// MODALS
export { default as ErrorModal } from './modal/ErrorModal'
// export { default as ModalName } './modal/fileName'

// ITEMS
// export {default as } 