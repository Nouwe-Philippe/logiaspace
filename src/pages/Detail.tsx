import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { useTranslation } from '../context/LanguageContext';

const detailEn = {
  title: 'How to Build a Professional Business Website',
  category: 'Web Development',
  author: 'Logia Space Team',
  date: '12 Mar, 2026',
  image: '/img/blog-1.jpg',
  content: `
    <p>Building a professional business website is one of the most important steps you can take to establish your brand online. In today's digital world, your website is often the first impression potential customers have of your business.</p>
    <h3 class="mt-4 mb-3">1. Define Your Goals</h3>
    <p>Before you start designing or developing, clearly define what you want your website to achieve. Are you looking to generate sales, capture leads, or simply provide information about your services?</p>
    <h3 class="mt-4 mb-3">2. Choose the Right Platform</h3>
    <p>Select a platform that aligns with your technical skills and business needs. Whether it's a CMS like WordPress, a website builder, or a custom React application, the right choice makes all the difference.</p>
    <h3 class="mt-4 mb-3">3. Focus on User Experience</h3>
    <p>A professional website must be fast, mobile-responsive, and easy to navigate. Users should find what they're looking for within seconds.</p>
    <h3 class="mt-4 mb-3">4. Optimize for SEO</h3>
    <p>Implement SEO best practices including proper meta tags, heading structure, image optimization, and quality content to improve your search engine visibility.</p>
    <h3 class="mt-4 mb-3">5. Launch and Maintain</h3>
    <p>Once your website is live, monitor its performance, gather user feedback, and keep content updated to maintain relevance and security.</p>
  `,
};

const detailFr = {
  title: 'Comment créer un site web professionnel pour entreprise',
  category: 'Développement web',
  author: 'Logia Space Team',
  date: '12 Mar, 2026',
  image: '/img/blog-1.jpg',
  content: `
    <p>Créer un site web professionnel pour entreprise est l\'une des étapes les plus importantes pour établir votre marque en ligne. Dans le monde numérique d\'aujourd\'hui, votre site web est souvent la première impression que les clients potentiels ont de votre entreprise.</p>
    <h3 class="mt-4 mb-3">1. Définir vos objectifs</h3>
    <p>Avant de commencer à concevoir ou développer, définissez clairement ce que vous voulez que votre site web accomplisse. Cherchez-vous à générer des ventes, capter des leads, ou simplement fournir des informations sur vos services ?</p>
    <h3 class="mt-4 mb-3">2. Choisir la bonne plateforme</h3>
    <p>Sélectionnez une plateforme alignée avec vos compétences techniques et les besoins de votre entreprise. Qu\'il s\'agisse d\'un CMS comme WordPress, un constructeur de site web, ou une application React personnalisée, le bon choix fait toute la différence.</p>
    <h3 class="mt-4 mb-3">3. Se concentrer sur l\'expérience utilisateur</h3>
    <p>Un site web professionnel doit être rapide, adaptable aux mobiles et facile à naviguer. Les utilisateurs doivent trouver ce qu\'ils cherchent en quelques secondes.</p>
    <h3 class="mt-4 mb-3">4. Optimiser pour le référencement (SEO)</h3>
    <p>Mettez en œuvre les meilleures pratiques SEO incluant les balises meta appropriées, la structure des titres, l\'optimisation des images et un contenu de qualité pour améliorer votre visibilité sur les moteurs de recherche.</p>
    <h3 class="mt-4 mb-3">5. Lancer et maintenir</h3>
    <p>Une fois votre site en ligne, surveillez ses performances, recueillez les retours utilisateurs et tenez le contenu à jour pour maintenir la pertinence et la sécurité.</p>
  `,
};

export default function Detail() {
  const { t, language } = useTranslation();
  const detail = language === 'fr' ? detailFr : detailEn;

  return (
    <main>
      <PageHeader title={t('detail.blogDetail')} parent={t('navbar.blog')} parentTo="/blog" breadcrumb={t('detail.blogDetail')} />
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-8">
              <div className="blog-item bg-light rounded overflow-hidden wow fadeInUp" data-wow-delay="0.2s">
                <div className="blog-img position-relative overflow-hidden">
                  <img className="img-fluid" src={detail.image} alt={detail.title} />
                  <Link className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" to="/blog">
                    {detail.category}
                  </Link>
                </div>
                <div className="p-4">
                  <div className="d-flex mb-3">
                    <small className="me-3">
                      <i className="far fa-user text-primary me-2"></i>{detail.author}
                    </small>
                    <small>
                      <i className="far fa-calendar-alt text-primary me-2"></i>{detail.date}
                    </small>
                  </div>
                  <h1 className="mb-3">{detail.title}</h1>
                  <div className="blog-content" dangerouslySetInnerHTML={{ __html: detail.content }} />
                  <div className="mt-4">
                    <Link to="/blog" className="btn btn-primary me-2">
                      <i className="bi bi-arrow-left me-2"></i>{t('detail.backToBlog')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-light rounded p-4 wow fadeInUp" data-wow-delay="0.4s">
                <h4 className="text-primary text-uppercase mb-4">{t('detail.relatedPosts')}</h4>
                <div className="row g-3">
                  <div className="col-6">
                    <div className="bg-white rounded p-3 h-100 shadow-sm">
                      <img src="/img/blog-2.jpg" alt="" className="img-fluid rounded mb-3" />
                      <h5 className="mb-2">{t('blog.whyStartup')}</h5>
                      <small className="text-muted">05 Mar, 2026</small>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="bg-white rounded p-3 h-100 shadow-sm">
                      <img src="/img/blog-3.jpg" alt="" className="img-fluid rounded mb-3" />
                      <h5 className="mb-2">{t('blog.choosingTech')}</h5>
                      <small className="text-muted">26 Feb, 2026</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
