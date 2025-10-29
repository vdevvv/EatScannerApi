import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as sgMail from '@sendgrid/mail';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);

  constructor(private readonly configService: ConfigService) {
    // Initialize SendGrid with API key
    const sendGridApiKey = this.configService.get<string>('SENDGRID_API_KEY');
    if (sendGridApiKey) {
      sgMail.setApiKey(sendGridApiKey);
    }
  }

  async sendVerificationCode(
    email: string,
    code: string,
    type: 'email_verification' | 'password_reset',
  ) {
    const sendGridApiKey = this.configService.get<string>('SENDGRID_API_KEY');

    if (!sendGridApiKey) {
      // Fallback to console logging if SendGrid is not configured
      this.logger.warn(
        'SendGrid API key not configured, logging to console instead',
      );
      console.log(`\n📧 Email to: ${email}`);
      console.log(`📧 Type: ${type}`);
      console.log(`📧 Verification Code: ${code}`);
      console.log(`📧 This code expires in 10 minutes\n`);
      return true;
    }

    try {
      const subject =
        type === 'email_verification'
          ? 'Verify your email address - UberProject'
          : 'Reset your password - UberProject';

      const htmlContent = this.getEmailTemplate(code, type);
      const textContent = this.getTextTemplate(code, type);

      const msg = {
        to: email,
        from:
          this.configService.get<string>('SENDGRID_FROM_EMAIL') ||
          'noreply@uberproject.com',
        subject,
        text: textContent,
        html: htmlContent,
      };

      await sgMail.send(msg);
      this.logger.log(`Verification email sent successfully to ${email}`);
      return true;
    } catch (error) {
      this.logger.error(`Failed to send email to ${email}:`, error);

      // Fallback to console logging on error
      console.log(`\n📧 Email to: ${email}`);
      console.log(`📧 Type: ${type}`);
      console.log(`📧 Verification Code: ${code}`);
      console.log(`📧 This code expires in 10 minutes\n`);

      return true; // Return true to not break the authentication flow
    }
  }

  private getEmailTemplate(
    code: string,
    type: 'email_verification' | 'password_reset',
  ): string {
    const title =
      type === 'email_verification'
        ? 'Verify Your Email'
        : 'Reset Your Password';
    const description =
      type === 'email_verification'
        ? 'Please verify your email address to complete your registration.'
        : 'Use this code to reset your password.';

    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title} - UberProject</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #1a1a1a; color: white; padding: 20px; text-align: center; }
          .content { padding: 30px; background: #f9f9f9; }
          .code { background: #1a1a1a; color: white; font-size: 24px; font-weight: bold; 
                  padding: 15px; text-align: center; margin: 20px 0; border-radius: 5px; }
          .footer { background: #1a1a1a; color: white; padding: 15px; text-align: center; font-size: 12px; }
          .warning { background: #fff3cd; border: 1px solid #ffeaa7; padding: 10px; margin: 15px 0; border-radius: 5px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚗 UberProject</h1>
            <h2>${title}</h2>
          </div>
          <div class="content">
            <p>Hello!</p>
            <p>${description}</p>
            <p>Your verification code is:</p>
            <div class="code">${code}</div>
            <div class="warning">
              <strong>⚠️ Important:</strong> This code will expire in 10 minutes. Do not share this code with anyone.
            </div>
            <p>If you didn't request this code, please ignore this email.</p>
          </div>
          <div class="footer">
            <p>© 2024 UberProject. All rights reserved.</p>
            <p>This is an automated message, please do not reply.</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  private getTextTemplate(
    code: string,
    type: 'email_verification' | 'password_reset',
  ): string {
    const title =
      type === 'email_verification'
        ? 'Verify Your Email'
        : 'Reset Your Password';
    const description =
      type === 'email_verification'
        ? 'Please verify your email address to complete your registration.'
        : 'Use this code to reset your password.';

    return `
${title} - UberProject

Hello!

${description}

Your verification code is: ${code}

⚠️ Important: This code will expire in 10 minutes. Do not share this code with anyone.

If you didn't request this code, please ignore this email.

---
© 2024 UberProject. All rights reserved.
This is an automated message, please do not reply.
    `;
  }
}
