import { StyleSheet } from 'react-native'
import { colors, metrics, fonts } from '@constants'

export default StyleSheet.create({
	container: {
		flexDirection: 'row',
		// alignItems: 'center'
	},
	profilePhoto: {
		width: metrics.WIDTH_WINDOW / 3,
		height: metrics.WIDTH_WINDOW / 3,
		borderRadius: metrics.WIDTH_WINDOW / 3,
		borderWidth: metrics.pts_4,
		borderColor: colors.WHITE
	},
	userName: {
		fontFamily: fonts.CRAZY_METRO,
		fontSize: metrics.pts_24,
		color: colors.RED,
	},
	photoAndNiknameView: {
		paddingHorizontal: metrics.pts_16,
		// flex: 1,
		borderRightColor: colors.DARK_RED,
		borderRightWidth: 1,
		// backgroundColor: 'white',
		alignItems: 'center'
	}
})
