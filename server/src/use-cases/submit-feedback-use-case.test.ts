import { SubmitFeedbackUseCase } from './submit-feedback-use-case'

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

const submitFeeback = new SubmitFeedbackUseCase({ create: createFeedbackSpy }, { sendMail: sendMailSpy })

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(
      submitFeeback.execute({
        type: 'BUG',
        comment: 'Sample comment',
        screenshot: 'data:image/png;base64test.jpg',
      })
    ).resolves.not.toThrow()

    expect(createFeedbackSpy).toBeCalled()
    expect(sendMailSpy).toBeCalled()
  })

  it('should not be able to submit a feedback without type', async () => {
    await expect(
      submitFeeback.execute({
        type: '',
        comment: 'Sample comment',
        screenshot: 'data:image/png;base64test.jpg',
      })
    ).rejects.toThrow()
  })

  it('should not be able to submit a feedback without type', async () => {
    await expect(
      submitFeeback.execute({
        type: '',
        comment: 'Sample comment',
        screenshot: 'data:image/png;base64test.jpg',
      })
    ).rejects.toThrow()
  })

  it('should not be able to submit a feedback without comment', async () => {
    await expect(
      submitFeeback.execute({
        type: 'IDEA',
        comment: '',
        screenshot: 'data:image/png;base64test.jpg',
      })
    ).rejects.toThrow()
  })
  it('should not be able to submit a feedback with an invalid screenshot', async () => {
    await expect(
      submitFeeback.execute({
        type: 'IDEA',
        comment: 'A nice idea',
        screenshot: 'ihasdfhasdfjioasdfjiofasdjsdf',
      })
    ).rejects.toThrow()
  })
})
