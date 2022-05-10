import React from 'react'
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { theme } from '../../theme'
import { styles } from './styles'

interface ButtomProps extends TouchableOpacityProps {
  isLoading: boolean
}

export function Buttom({ isLoading, ...rest }: ButtomProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      {isLoading ? (
        <ActivityIndicator color={theme.colors.text_on_brand_color} />
      ) : (
        <Text style={styles.title}>Enviar feedback</Text>
      )}
    </TouchableOpacity>
  )
}
