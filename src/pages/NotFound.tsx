import PageHeader from '../components/PageHeader';
import { useTranslation } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <main>
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="error-text">
                <h1 className="display-1 fw-bold text-primary">404</h1>
                <h3 className="mb-4">{t('common.pageNotFound')}</h3>
                <p className="text-muted mb-5">
                  {t('common.pageNotFoundText')}
                </p>
                <Link to="/" className="btn btn-primary px-5 py-3">
                  <i className="bi bi-house-door me-2"></i>{t('common.backToHome')}
                </Link>
                <Link to="/contact" className="btn btn-outline-primary px-5 py-3 ms-3">
                  <i className="bi bi-envelope me-2"></i>{t('contact.contactUs')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
