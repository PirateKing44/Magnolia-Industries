import emailjs from '@emailjs/browser';

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

class EmailService {
  private serviceId: string;
  private templateId: string;
  private publicKey: string;

  constructor() {
    // Get EmailJS configuration from environment variables
    this.serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
    this.templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
    this.publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

    // Initialize EmailJS with public key
    if (this.publicKey) {
      emailjs.init(this.publicKey);
    }
  }

  public async sendContactEmail(formData: ContactFormData): Promise<void> {
    if (!this.serviceId || !this.templateId || !this.publicKey) {
      throw new Error(
        'EmailJS is not configured. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your environment variables.'
      );
    }

    // Map subject value to readable text
    const subjectLabels: Record<string, string> = {
      'commodities-buyer': "I'm a Buyer of Fuel/Energy Commodities",
      'commodities-seller': "I'm a Seller of Fuel/Energy Commodities",
      'capital-markets': 'Private Capital Markets Inquiry',
      'partnership': 'Partnership Opportunity',
      'general': 'General Inquiry'
    };

    const subjectText = subjectLabels[formData.subject] || formData.subject;

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company || 'Not provided',
      subject: subjectText,
      message: formData.message,
      to_email: 'allen@magnoliaind.com'
    };

    try {
      await emailjs.send(
        this.serviceId,
        this.templateId,
        templateParams
      );
    } catch (error) {
      console.error('EmailJS Error:', error);
      throw new Error('Failed to send email. Please try again later.');
    }
  }
}

export const emailService = new EmailService();

