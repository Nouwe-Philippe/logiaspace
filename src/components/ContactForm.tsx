import { useState } from 'react';
import { sendForm, ALERT_MESSAGES } from '../utils/emailjs';
import { useTranslation } from '../context/LanguageContext';

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    const originalText = btn?.textContent || t('common.sendMessage');

    setSending(true);
    if (btn) {
      btn.disabled = true;
      btn.textContent = t('common.sending');
    }

    try {
      await sendForm(form, ALERT_MESSAGES.SUCCESS);
    } catch {
      /* alert already shown */
    } finally {
      setSending(false);
      if (btn) {
        btn.disabled = false;
        btn.textContent = originalText;
      }
    }
  };

  return (
    <form id="contactForm" onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col-md-6">
          <div className="form-floating">
            <input type="text" id="contact-name" name="name" className="form-control" placeholder={t('common.yourName')} required />
            <label htmlFor="contact-name">{t('common.yourName')}</label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-floating">
            <input type="email" id="contact-email" name="email" className="form-control" placeholder={t('common.yourEmail')} required />
            <label htmlFor="contact-email">{t('common.yourEmail')}</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating">
            <input type="text" id="contact-subject" name="subject" className="form-control" placeholder={t('common.subject')} required />
            <label htmlFor="contact-subject">{t('common.subject')}</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating">
            <textarea id="contact-message" name="message" className="form-control" placeholder={t('common.message')} required />
            <label htmlFor="contact-message">{t('common.message')}</label>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary py-3 px-5" type="submit" disabled={sending}>
            {sending ? t('common.sending') : t('common.sendMessage')}
          </button>
        </div>
      </div>
    </form>
  );
}
