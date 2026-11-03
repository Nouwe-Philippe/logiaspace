import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import QuoteForm from '../components/QuoteForm';
import { useTranslation } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <main>
      <PageHeader title={t('contact.contactUs')} breadcrumb={t('navbar.contact')} />
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 700 }}>
            <h5 className="fw-bold text-primary text-uppercase">{t('footer.getInTouch')}</h5>
            <h1 className="mb-0">{t('contact.weLoveHear')}</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="d-flex justify-content-center">
                <div className="d-flex flex-column align-items-center text-center mb-4">
                  <div className="bg-primary d-flex align-items-center justify-content-center rounded mb-3" style={{ width: 60, height: 60 }}>
                    <i className="bi bi-geo-alt text-white fs-4"></i>
                  </div>
                  <h4>{t('contact.ourLocation')}</h4>
                  <p className="mb-0">Yaounde, Cameroun</p>
                </div>
              </div>
              <div className="d-flex justify-content-around">
                <div className="d-flex flex-column align-items-center text-center">
                  <div className="bg-primary d-flex align-items-center justify-content-center rounded mb-3" style={{ width: 60, height: 60 }}>
                    <i className="bi bi-envelope-open text-white fs-4"></i>
                  </div>
                  <h4>{t('contact.emailAddress')}</h4>
                  <p className="mb-0">logiaspace@gmail.com</p>
                </div>
                <div className="d-flex flex-column align-items-center text-center">
                  <div className="bg-primary d-flex align-items-center justify-content-center rounded mb-3" style={{ width: 60, height: 60 }}>
                    <i className="bi bi-telephone text-white fs-4"></i>
                  </div>
                  <h4>{t('contact.phoneNumber')}</h4>
                  <p className="mb-0">+237 676 507 052</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="wow fadeInUp" data-wow-delay="0.2s">
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="row g-5 mt-5">
            <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.4s">
              <div className="section-title position-relative pb-3 mb-5">
                <h5 className="fw-bold text-primary text-uppercase">{t('quote.requestAQuote')}</h5>
                <h1 className="mb-0">{t('quote.freeQuoteTitle')}</h1>
              </div>
              <div className="row gx-3">
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                  <h5 className="mb-4"><i className="fa fa-reply text-primary me-3"></i>{t('quote.reply24h')}</h5>
                </div>
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                  <h5 className="mb-4"><i className="fa fa-phone-alt text-primary me-3"></i>{t('quote.telephoneSupport')}</h5>
                </div>
              </div>
              <p className="mb-4">{t('quote.quoteText')}</p>
              <div className="d-flex align-items-center mt-2 wow zoomIn" data-wow-delay="0.6s">
                <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{ width: 60, height: 60 }}>
                  <i className="fa fa-phone-alt text-white"></i>
                </div>
                <div className="ps-4">
                  <h5 className="mb-2">{t('quote.callQuestions')}</h5>
                  <h4 className="text-primary mb-0">+237 676 507 052 XXX</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="bg-primary rounded h-100 d-flex align-items-center p-5 wow zoomIn" data-wow-delay="0.9s">
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
