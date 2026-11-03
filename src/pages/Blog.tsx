import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import BlogCard from '../components/BlogCard';
import ProjectCard from '../components/ProjectCard';
import { useTranslation } from '../context/LanguageContext';

const blogs = [
  {
    id: 1,
    titleKey: 'blog.howToBuild',
    categoryKey: 'blog.webDevelopment',
    author: 'Logia Space Team',
    date: '12 Mar, 2026',
    image: '/img/blog-1.jpg',
    excerptKey: 'blog.howToBuildExcerpt',
  },
  {
    id: 2,
    titleKey: 'blog.whyStartup',
    categoryKey: 'blog.digitalStrategy',
    author: 'Logia Space Team',
    date: '05 Mar, 2026',
    image: '/img/blog-2.jpg',
    excerptKey: 'blog.whyStartupExcerpt',
  },
  {
    id: 3,
    titleKey: 'blog.choosingTech',
    categoryKey: 'blog.technology',
    author: 'Logia Space Team',
    date: '26 Feb, 2026',
    image: '/img/blog-3.jpg',
    excerptKey: 'blog.choosingTechExcerpt',
  },
];

const projects = [
  {
    id: 1,
    title: 'ExpoPrepa',
    type: 'Web App',
    group: 'market',
    link: 'https://expoprepa.com',
    image: '',
    description:
      'ExpoPrepa – Votre partenaire pour réussir vos examens ! Une application idéale pour vous accompagner dans votre parcours d\'apprentissage et maximiser vos chances de réussite. Grâce à une multitude de simulations de tests, entraînez-vous dans des conditions proches des examens réels, évaluez votre niveau, identifiez vos points faibles et progressez à votre rythme. Avec ExpoPrepa, abordez vos examens avec confiance.',
  },
  {
    id: 2,
    title: 'ETS COMPLEX BUSINESS CENTER',
    type: 'Website',
    group: 'client',
    link: 'https://etscomplexgroup.com',
    image: '',
    description:
      'ETS Complex Business Center accompagne les administrations, entreprises et organisations avec des fournitures, équipements et services pensés pour leurs exigences quotidiennes.',
  },
  {
    id: 3,
    title: 'VicktyKoff',
    type: 'Website',
    group: 'client',
    link: 'https://vicktykof.com',
    image: '',
    description: "Salon de coiffure proposant ses services au client.",
  },
];

export default function Blog() {
  const [active, setActive] = useState('all');
  const { t, language } = useTranslation();
  const categories = ['all', 'Web Development', 'Digital Strategy', 'Technology'];

  return (
    <main>
      <PageHeader title={t('blog.ourBlog')} breadcrumb={t('navbar.blog')} />
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
            <h5 className="fw-bold text-primary text-uppercase">{t('blog.ourBlog')}</h5>
            <h1 className="mb-0">{t('blog.insights')}</h1>
          </div>
          <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.2s">
            {categories.map((cat) => {
              const catKey = cat === 'all' ? 'blog.all' : cat === 'Web Development' ? 'blog.webDevelopment' : cat === 'Digital Strategy' ? 'blog.digitalStrategy' : 'blog.technology';
              return (
                <button
                  key={cat}
                  className={`btn btn-outline-primary me-2 mb-2 ${active === cat ? 'bg-primary text-white border-primary' : ''}`}
                  onClick={() => setActive(cat)}
                >
                  {t(catKey)}
                </button>
              );
            })}
          </div>
          <div className="row g-5">
            {blogs
              .filter((b) => active === 'all' || b.categoryKey === `blog.${catToKey(active)}`)
              .map((blog, i) => (
                <BlogCard
                  key={blog.id}
                  title={t(blog.titleKey)}
                  category={t(blog.categoryKey)}
                  author={blog.author}
                  date={blog.date}
                  image={blog.image}
                  excerpt={t(blog.excerptKey)}
                  delay={`${0.3 * (i + 1)}s`}
                />
              ))}
          </div>

          {/* Our Projects Start */}
          <div className="wow fadeInUp" data-wow-delay="0.5s">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 700 }}>
              <h5 className="fw-bold text-primary text-uppercase">{t('blog.ourProjects')}</h5>
              <h1 className="mb-0">{t('blog.solutionsWeBuild')}</h1>
            </div>

            <div className="mb-5">
              <h3 className="mb-4 text-dark fw-bold">{t('blog.availablePublic')}</h3>
              <div className="row g-4">
                {projects
                  .filter((p) => p.group === 'market')
                  .map((p, i) => (
                    <ProjectCard key={p.id} {...p} delay={`${0.6 * (i + 1)}s`} />
                  ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-dark fw-bold">{t('blog.clientProjects')}</h3>
              <div className="row g-4">
                {projects
                  .filter((p) => p.group === 'client')
                  .map((p, i) => (
                    <ProjectCard key={p.id} {...p} delay={`${0.6 * (i + 1)}s`} />
                  ))}
              </div>
            </div>
          </div>
          {/* Our Projects End */}
        </div>
      </div>
    </main>
  );
}

function catToKey(cat: string): string {
  if (cat === 'Web Development') return 'webDevelopment';
  if (cat === 'Digital Strategy') return 'digitalStrategy';
  if (cat === 'Technology') return 'technology';
  return 'all';
}
