import { MailAdapter, SendMailData } from '../mail-adapter'
import nodemailer from 'nodemailer'

export const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '306c3b5d3e65a5',
    pass: 'bee0da5ae06f8b',
  },
})

export class NodeMailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Paulo Jair <paulo@bridge.ufsc.br>',
      subject,
      html: body,
    })
  }
}
