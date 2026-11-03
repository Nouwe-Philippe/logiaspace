import PageHeader from '../components/PageHeader';
import { useTranslation } from '../context/LanguageContext';

export default function Privacy() {
  const { t, language } = useTranslation();

  return (
    <main>
      <PageHeader title={t('pages.privacyPolicy')} breadcrumb={t('pages.privacyPolicy')} />
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="bg-light rounded p-5 wow fadeInUp" data-wow-delay="0.2s">
                <h2 className="mb-4 text-primary">{t('pages.privacyPolicy')}</h2>
                <p className="mb-4">
                  {language === 'fr'
                    ? "Chez LogiaSpace, nous respectons votre vie privée. Cette politique explique comment nous collectons, utilisons et protégeons vos données personnelles lorsque vous visitez notre site web."
                    : "At LogiaSpace, we respect your privacy. This policy explains how we collect, use, and protect your personal information when you visit our website."
                  }
                </p>
                <p className="mb-4">
                  {language === 'fr'
                    ? "Nous collectons uniquement les informations que vous nous fournissez volontairement (nom, email, message) via nos formulaires de contact. Ces informations ne sont jamais vendues ni partagées avec des tiers."
                    : "We only collect information you voluntarily provide (name, email, message) through our contact forms. This information is never sold or shared with third parties."
                  }
                </p>
                <p className="mb-4">
                  {language === 'fr'
                    ? "Conformément aux réglementations applicables, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez-nous à logiaspace@gmail.com."
                    : "In accordance with applicable regulations, you have the right to access, rectify, and delete your data. To exercise these rights, contact us at logiaspace@gmail.com."
                  }
                </p>
                <hr className="mb-4" />
                <p className="text-muted small">
                  {language === 'fr'
                    ? "Dernière mise à jour : Novembre 2026"
                    : "Last updated: November 2026"
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
