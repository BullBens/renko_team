import * as React from 'react';
import { useMemo } from '@hooks';
import { LottieView, View } from '@components';
import styles from './styles';
import { eTheme, TGlobalState } from '@types';
import { connect } from 'react-redux';


type TProps = {
    size?: number,
    theme: TGlobalState['themeReducer']['theme']
};

const Loader: React.FC<TProps> = ({ size, theme }) => {

    const source = useMemo(() => {
        return theme.$THEME === eTheme.black_and_red ? require('../../../assets/animations/loading-spinner-red.json') :
            theme.$THEME === eTheme.black_and_purple ? require('../../../assets/animations/loading-spinner-purple.json') :
                require('../../../assets/animations/loading-spinner-gold.json')
    }, [theme])

    return (
        <View style={[styles.container]}>
            <LottieView source={source} autoPlay loop />
        </View >
    );
};

const mapStateToProps = (state: TGlobalState) => ({
    theme: state.themeReducer.theme
})

export default connect(mapStateToProps)(Loader);
