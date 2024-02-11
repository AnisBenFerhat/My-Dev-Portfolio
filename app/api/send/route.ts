import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email, message } = req.body;

    console.log('Sending email:', { email, message });

    const { data, error } = await resend.emails.send({
      from: email,
      to: 'abenf.dev@gmail.com',
      subject: 'My Portfolio - Contact Form',
      text: message,
    });

    if (error) {
      console.error('Error sending email:', error);
      return res.status(400).json({ error: 'Failed to send email' });
    }

    console.log('Email sent successfully:', data);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Internal server error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
