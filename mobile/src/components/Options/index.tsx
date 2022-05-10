import React from 'react'
import { Text, View } from 'react-native'
import { feedbackTypes } from '../../utils/feedbackTypes'
import { Copyrights } from '../Copyrights'
import { Option } from '../Option'
import { FeedbackType } from '../Widget'
import { styles } from './styles'

interface OptionsProps {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void
}

export function Options({ onFeedbackTypeChanged }: OptionsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Deixe se feedback </Text>
      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <Option
            key={key}
            title={value.title}
            image={value.image}
            onPress={() => onFeedbackTypeChanged(key as FeedbackType)}
          />
        ))}
      </View>
      <Copyrights />
    </View>
  )
}
