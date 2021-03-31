import { StyleSheet } from 'react-native'
import { colors, fonts, metrics } from '@constants'

export default StyleSheet.create({
	container: {
		width: 150,
		height: 75
	},
	contentContainer: {
		width: '100%',
		height: 50,
		backgroundColor: colors.BLACK
	},
	imageBackground: {
		flex: 1,
		opacity: 1
	},
	infoView: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		margin: 5,
		justifyContent: 'center',
		alignItems: 'center'
	},
	triangle: {
		position: 'absolute',
		top: 45,
		width: 0,
		height: 0,
		backgroundColor: "transparent",
		borderStyle: "solid",
		borderLeftWidth: 10,
		borderRightWidth: 10,
		borderBottomWidth: 20,
		borderLeftColor: "transparent",
		borderRightColor: "transparent",
		borderBottomColor: "black",
		transform: [{ rotate: '180deg' }]
	},
	title: {
		color: 'red',
		fontFamily: fonts.CRAZY_METRO,
		fontSize: 20
	}

})



