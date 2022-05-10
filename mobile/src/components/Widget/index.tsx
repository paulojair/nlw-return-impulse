import BottomSheet, { TouchableWithoutFeedback } from '@gorhom/bottom-sheet'
import { ChatCenteredDots } from 'phosphor-react-native'
import React, { useRef, useState } from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, TouchableOpacity, View } from 'react-native'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import { theme } from '../../theme'
import { feedbackTypes } from '../../utils/feedbackTypes'
import { Form } from '../Form'
import { Options } from '../Options'
import { Success } from '../Success'
import { styles } from './styles'

export type FeedbackType = keyof typeof feedbackTypes

function Widget() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)
  const bottomSheetRef = useRef<BottomSheet>(null)

  function handleOpen() {
    bottomSheetRef.current?.expand()
  }

  function handleRestartFeedback() {
    setFeedbackType(null)
    setFeedbackSent(false)
  }

  function handleFeedbackSent() {
    setFeedbackSent(true)
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={styles.button} onPress={handleOpen}>
            <ChatCenteredDots size={24} weight={'bold'} color={theme.colors.text_on_brand_color} />
          </TouchableOpacity>
          <BottomSheet
            ref={bottomSheetRef}
            snapPoints={[1, 280]}
            backgroundStyle={styles.modal}
            handleIndicatorStyle={styles.indicator}
          >
            {feedbackSent ? (
              <Success onSendAnotherFeedback={handleRestartFeedback} />
            ) : (
              <>
                {feedbackType ? (
                  <Form
                    feedbackType={feedbackType}
                    onFeedbackCanceled={handleRestartFeedback}
                    onFeedbackSent={handleFeedbackSent}
                  ></Form>
                ) : (
                  <Options onFeedbackTypeChanged={setFeedbackType} />
                )}
              </>
            )}
          </BottomSheet>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default gestureHandlerRootHOC(Widget)
