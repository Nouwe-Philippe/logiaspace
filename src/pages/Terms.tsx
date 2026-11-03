import PageHeader from '../components/PageHeader';
import { useTranslation } from '../context/LanguageContext';

export default function Terms() {
  const { t, language } = useTranslation();

  return (
    <main>
      <PageHeader title={t('pages.termsOfService')} breadcrumb={t('pages.termsOfService')} />
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="bg-light rounded p-5 wow fadeInUp" data-wow-delay="0.2s">
                <h2 className="mb-4 text-primary">{t('pages.termsOfService')}</h2>
                <p className="mb-4">
                  {language === 'fr'
                    ? "Bienvenue sur le site web de LogiaSpace. En accédant à ce site, vous acceptez d'être lié par les présentes conditions d'utilisation."
                    : "Welcome to the LogiaSpace website. By accessing this site, you agree to be bound by these terms of use."
                  }
                </p>
                <p className="mb-4">
                  {language === 'fr'
                    ? "Tous les contenus de ce site (textes, images, logos, designs) sont la propriété de LogiaSpace et sont protégés par les lois sur le droit d'auteur."
                    : "All content on this site (texts, images, logos, designs) is the property of LogiaSpace and is protected by copyright laws."
                  }
                </p>
                <p className="mb-4">
                  {language === 'fr'
                    ? "LogiaSpace ne peut être tenu responsable des dommages directs ou indirects résultant de l'utilisation de ce site ou de l'impossibilité de l'utiliser."
                    : "LogiaSpace cannot be held liable for direct or indirect damages resulting from the use of this site or the inability to use it."
                  }
                </p>
                <p className="mb-4">
                  {language === 'fr'
                    ? "Ces conditions sont régies par les lois en vigueur au Cameroun. Tout litige sera traité par les tribunaux compétents de Yaoundé."
                    : "These terms are governed by the laws in force in Cameroon. Any dispute will be handled by the competent courts of Yaoundé."
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
