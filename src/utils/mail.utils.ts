import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const email = process.env.EMAIL_USER;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: process.env.EMAIL_PASS,
  },
} as SMTPTransport.Options);

type SendEmailDto = {
    subject: string;
    message: string;
}

export const sendMail = async (dto: SendEmailDto) => {
    const { subject, message } = dto;

    return await transporter.sendMail({
      from: email,
      to: email,
      subject,
      html: message,
      text: message,
    });

}