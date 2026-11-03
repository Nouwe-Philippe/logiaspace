import { useState } from 'react';
import { sendForm, ALERT_MESSAGES } from '../utils/emailjs';
import { useTranslation } from '../context/LanguageContext';

export default function QuoteForm() {
  const [sending, setSending] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    const originalText = btn?.textContent || t('quote.requestAQuoteBtn');

    setSending(true);
    if (btn) {
      btn.disabled = true;
      btn.textContent = t('common.requesting');
    }

    try {
      await sendForm(form, ALERT_MESSAGES.QUOTE_SUCCESS);
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
    <form id="quoteForm" onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col-xl-12">
          <label>
            <input type="text" name="name" className="form-control bg-light border-0" placeholder={t('common.yourName')} style={{ height: 55 }} />
          </label>
        </div>
        <div className="col-12">
          <label>
            <input type="email" name="email" className="form-control bg-light border-0" placeholder={t('common.yourEmail')} style={{ height: 55 }} />
          </label>
        </div>
        <div className="col-12">
          <label>
            <select name="service" className="form-select bg-light border-0" style={{ height: 55 }} defaultValue={t('common.selectAService')}>
              <option>{t('common.selectAService')}</option>
              <option value="1">{t('common.webDevelopment')}</option>
              <option value="2">{t('common.mobileAppDevelopment')}</option>
              <option value="3">{t('common.digitalMarketing')}</option>
            </select>
          </label>
        </div>
        <div className="col-12">
          <label>
            <textarea name="message" className="form-control bg-light border-0" rows={3} placeholder={t('common.message')} />
          </label>
        </div>
        <div className="col-12">
          <button className="btn btn-dark w-100 py-3" type="submit" disabled={sending}>
            {sending ? t('common.requesting') : t('quote.requestAQuoteBtn')}
          </button>
        </div>
      </div>
    </form>
  );
}
