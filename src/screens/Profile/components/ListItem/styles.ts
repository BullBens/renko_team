import { StyleSheet } from 'react-native'
import { colors, fonts, metrics } from '@constants'

export default StyleSheet.create({
	container: {
		width: (metrics.WIDTH_WINDOW),
		justifyContent: 'center',
		paddingVertical: metrics.pts_24,
		alignItems: 'center',
		// paddingLeft: metrics.pts_16,
		borderBottomWidth: 2,
	},
	title: {
		color: colors.WHITE,
		fontSize: metrics.pts_20,
		fontFamily: fonts.GILROY_REGULAR_NORMAL
	}
})



