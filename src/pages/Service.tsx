import PageHeader from '../components/PageHeader';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services.json';
import { useTranslation } from '../context/LanguageContext';

export default function Service() {
  const { t } = useTranslation();

  return (
    <main>
      <PageHeader title={t('service.ourServices')} breadcrumb={t('navbar.services')} />
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
            <h5 className="fw-bold text-primary text-uppercase">{t('service.ourServices')}</h5>
            <h1 className="mb-0">{t('service.customSolutions')}</h1>
          </div>
          <div className="row g-5">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
              <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                <h3 className="text-white mb-3">{t('service.callUsForQuote')}</h3>
                <p className="text-white mb-3">{t('service.callUsText')}</p>
                <h2 className="text-white mb-0">+237 676 507 052</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
