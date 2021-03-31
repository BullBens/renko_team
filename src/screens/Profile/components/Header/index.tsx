import React from 'react'
import { View, Image, Text } from '@components'
import styles from './styles'
import images from '@images'
import { colors, fonts } from '@constants'

type TProps = {}

const Header: React.FC<TProps> = ({ }) => {
	return <View style={styles.container}>

		<View style={styles.photoAndNiknameView}>
			<Image source={images.FOUR} style={styles.profilePhoto} />
		</View>
		<View style={{ flex: 1, paddingHorizontal: 16 }}>
			<Text style={styles.userName}>BullBens</Text>
			<View style={{ marginTop: 8 }}>
				<Text style={{ color: colors.WHITE, fontSize: 14, fontFamily: fonts.GILROY_REGULAR_NORMAL }}>12.02.1998</Text>
				<Text style={{ color: colors.WHITE, fontSize: 14, fontFamily: fonts.GILROY_REGULAR_NORMAL }}>Харьков</Text>
			</View>
		</View>
	</View>
}

export default Header

