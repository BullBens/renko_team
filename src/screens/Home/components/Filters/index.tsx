import React from 'react'
import { useCallback, useMemo } from '@hooks'
import { Icon, SnapCarousel, TouchableOpacity, View, } from '@components'
import styles from './styles'
import { data } from './utils'
import { colors, metrics } from '@constants'
import LinearGradient from 'react-native-linear-gradient'
import { scale } from '@helpers'
// import Carousel from '@khanshamshad32/carousel';


type TProps = {
	primaryColor: string
}

const Filters: React.FC<TProps> = ({ primaryColor }) => {

	const renderItem = ({ item, index }) => {
		return <View>
			<TouchableOpacity key={index} style={{ width: scale(70), height: scale(70), borderRadius: scale(70), justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
				<Icon name={item.icon} size={40} color={primaryColor} />
			</TouchableOpacity>
		</View>
	}

	return <View style={styles.container}>
		<View style={[styles.carouselView, { borderColor: `${primaryColor}30` }]}>
			<SnapCarousel
				layout={'default'}
				firstItem={0}
				inactiveSlideOpacity={0.3}
				vertical
				inactiveSlideShift={0.5}
				inactiveSlideScale={0.6}
				sliderWidth={scale(70)}
				sliderHeight={scale(210)}
				itemWidth={scale(70)}
				itemHeight={scale(70)}
				data={data}
				renderItem={renderItem} />
		</View>
	</View>


}

export default Filters

