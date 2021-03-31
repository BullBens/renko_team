import { scale } from '@helpers';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		position: 'absolute',
		bottom: 35,
		left: 0
	},
	carouselView: {
		borderTopWidth: 1,
		borderBottomWidth: 1,
		width: scale(70),
		height: scale(210),
	}
})



