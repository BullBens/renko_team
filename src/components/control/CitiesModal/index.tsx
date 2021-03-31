import React from 'react'
import { View, ScrollView, Modal, Text } from '@components'

import styles from './styles'
import { TCities } from 'src/types'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CitiesModal: React.FC<TProps> = ({ isVisible, onSelect, cities }) => {
  const renderItem = (item, index) => (
    <TouchableOpacity key={index} onPress={() => onSelect(item)}>
      <View style={styles.cityItemContainer}>
        <Text style={styles.cityName}>{item.name.ru}</Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <Modal isVisible={isVisible} style={styles.modalContainer}>
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          {
            cities.map(renderItem)
          }
        </ScrollView>
      </View>

    </Modal>
  )
}

export default CitiesModal;

type TProps = {
  isVisible: boolean,
  cities: Array<TCities>,
  onSelect: (city: TCities) => void
}