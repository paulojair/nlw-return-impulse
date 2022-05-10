import { useState } from 'react'
import bugImgUrl from '../../images/bug.svg'
import ideaImgUrl from '../../images/idea.svg'
import thoughtImgUrl from '../../images/thought.svg'
import { FeedbackContentStep } from './Steps/FeedbackContentStep'
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep'
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep'

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImgUrl,
      alt: 'Imagem de um inseto',
    },
  },
  IDEA: {
    title: 'Idéia',
    image: {
      source: ideaImgUrl,
      alt: 'Imagem de uma lâmpada',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImgUrl,
      alt: 'Imagem de um balão de pensamento',
    },
  },
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  const [feedbackSent, setFeedbackSent] = useState(false)
  function handleRestartFeedback() {
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
      {feedbackSent ? (
        <FeedbackSuccessStep handleRestartFeedback={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              handleRestartFeedback={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className='text-xs text-neutral-400'>
        Feito com ♥ pela{' '}
        <a className='underline underline-offset-1' href='https://rocketseat.com.br'>
          Rocketseat
        </a>
      </footer>
    </div>
  )
}
