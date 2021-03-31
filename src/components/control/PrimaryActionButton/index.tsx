import React from 'react'
import { Text, TouchableOpacity } from '@components'
import styles from './styles'

type TProps = {
  title: string,
  onPress: () => void
}

const PrimaryActionButton: React.FC<TProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default PrimaryActionButton;

