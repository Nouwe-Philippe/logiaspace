import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import QuoteForm from '../components/QuoteForm';
import ServiceCard from '../components/ServiceCard';
import TeamCard from '../components/TeamCard';
import BlogCard from '../components/BlogCard';
import { services } from '../data/services.json';
import { team } from '../data/team.json';
import { testimonials } from '../data/testimonials.json';
import { initOwlCarousels, initCounterUp, destroyOwl } from '../utils/initJqLibs';
import { useTranslation } from '../context/LanguageContext';

export default function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      initCounterUp();
      initOwlCarousels();
    });
    return () => {
      cancelAnimationFrame(raf);
      destroyOwl('.testimonial-carousel');
      destroyOwl('.vendor-carousel');
    };
  }, []);

  return (
    <main>
      {/* Facts Start */}
      <div className="container-fluid facts py-5 pt-lg-0">
        <div className="container py-5 pt-lg-0">
          <div className="row gx-0">
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
              <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{ height: 150 }}>
                <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{ width: 60, height: 60 }}>
                  <i className="fa fa-users text-primary"></i>
                </div>
                <div className="ps-4">
                  <h5 className="text-white mb-0">{t('home.happyClients')}</h5>
                  <h1 className="text-white mb-0" data-toggle="counter-up">12</h1>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
              <div className="bg-light shadow d-flex align-items-center justify-content-center p-4" style={{ height: 150 }}>
                <div className="bg-primary d-flex align-items-center justify-content-center rounded mb-2" style={{ width: 60, height: 60 }}>
                  <i className="fa fa-check text-white"></i>
                </div>
                <div className="ps-4">
                  <h5 className="text-primary mb-0">{t('home.projectsDone')}</h5>
                  <h1 className="mb-0" data-toggle="counter-up">12</h1>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
              <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{ height: 150 }}>
                <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{ width: 60, height: 60 }}>
                  <i className="fa fa-award text-primary"></i>
                </div>
                <div className="ps-4">
                  <h5 className="text-white mb-0">{t('home.winAwards')}</h5>
                  <h1 className="text-white mb-0" data-toggle="counter-up">3</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Facts End */}

      {/* About Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="section-title position-relative pb-3 mb-5">
                <h5 className="fw-bold text-primary text-uppercase">{t('home.aboutUs')}</h5>
                <h1 className="mb-0">{t('home.aboutTitle')}</h1>
              </div>
              <p className="mb-4">{t('home.aboutText')}</p>
              <div className="row g-0 mb-3">
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                  <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>{t('home.awardWinning')}</h5>
                  <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>{t('home.professionalStaff')}</h5>
                </div>
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                  <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>{t('home.support247')}</h5>
                  <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>{t('home.fairPrices')}</h5>
                </div>
              </div>
              <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
                <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{ width: 60, height: 60 }}>
                  <i className="fa fa-phone-alt text-white"></i>
                </div>
                <div className="ps-4">
                  <h5 className="mb-2">{t('home.callQuestion')}</h5>
                  <h4 className="text-primary mb-0">+237 676 507 052</h4>
                </div>
              </div>
              <Link to="/quote" className="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">
                {t('home.requestAQuote')}
              </Link>
            </div>
            <div className="col-lg-5" style={{ minHeight: 500 }}>
              <div className="position-relative h-100">
                <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="/img/about.jpeg" style={{ objectFit: 'cover' }} alt={t('home.aboutUs')} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Features Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
            <h5 className="fw-bold text-primary text-uppercase">{t('home.whyChooseUs')}</h5>
            <h1 className="mb-0">{t('home.growBusiness')}</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4">
              <div className="row g-5">
                <div className="col-12 wow zoomIn" data-wow-delay="0.2s">
                  <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                    <i className="fa fa-cubes text-white"></i>
                  </div>
                  <h4>{t('home.bestInIndustry')}</h4>
                  <p className="mb-0">{t('home.bestInIndustryText')}</p>
                </div>
                <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
                  <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                    <i className="fa fa-award text-white"></i>
                  </div>
                  <h4>{t('home.awardWinningTitle')}</h4>
                  <p className="mb-0">{t('home.awardWinningText')}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.9s" style={{ minHeight: 350 }}>
              <div className="position-relative h-100">
                <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s" src="/img/feature.jpeg" style={{ objectFit: 'cover' }} alt={t('home.whyChooseUs')} />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row g-5">
                <div className="col-12 wow zoomIn" data-wow-delay="0.4s">
                  <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                    <i className="fa fa-users-cog text-white"></i>
                  </div>
                  <h4>{t('home.professionalStaffTitle')}</h4>
                  <p className="mb-0">{t('home.professionalStaffText')}</p>
                </div>
                <div className="col-12 wow zoomIn" data-wow-delay="0.8s">
                  <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                    <i className="fa fa-phone-alt text-white"></i>
                  </div>
                  <h4>{t('home.support247Title')}</h4>
                  <p className="mb-0">{t('home.support247Text')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features End */}

      {/* Service Start */}
      <section className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
            <h5 className="fw-bold text-primary text-uppercase">{t('home.ourServices')}</h5>
            <h1 className="mb-0">{t('home.customSolutions')}</h1>
          </div>
          <div className="row g-5">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
              <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                <h3 className="text-white mb-3">{t('home.callUsForQuote')}</h3>
                <p className="text-white mb-3">{t('home.callUsText')}</p>
                <h2 className="text-white mb-0">+237 676 507 052</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service End */}

      {/* Quote Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="section-title position-relative pb-3 mb-5">
                <h5 className="fw-bold text-primary text-uppercase">{t('home.requestAQuoteSection')}</h5>
                <h1 className="mb-0">{t('home.freeQuoteTitle')}</h1>
              </div>
              <div className="row gx-3">
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                  <h5 className="mb-4"><i className="fa fa-reply text-primary me-3"></i>{t('home.reply24h')}</h5>
                </div>
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                  <h5 className="mb-4"><i className="fa fa-phone-alt text-primary me-3"></i>{t('home.telephoneSupport')}</h5>
                </div>
              </div>
              <p className="mb-4">{t('home.quoteText')}</p>
              <div className="d-flex align-items-center mt-2 wow zoomIn" data-wow-delay="0.6s">
                <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{ width: 60, height: 60 }}>
                  <i className="fa fa-phone-alt text-white"></i>
                </div>
                <div className="ps-4">
                  <h5 className="mb-2">{t('home.callQuestions')}</h5>
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
      {/* Quote End */}

      {/* Testimonial Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-4 mx-auto" style={{ maxWidth: 600 }}>
            <h5 className="fw-bold text-primary text-uppercase">{t('home.testimonials')}</h5>
            <h1 className="mb-0">{t('home.clientsSay')}</h1>
          </div>
          <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.6s">
            {testimonials.map((t) => (
              <div key={t.id} className="testimonial-item bg-light my-4">
                <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                  <img className="img-fluid rounded" src={t.image} alt={t.name} style={{ width: 60, height: 60 }} />
                  <div className="ps-4">
                    <h4 className="text-primary mb-1">{t.name}</h4>
                    <small className="text-uppercase">{t.role}</small>
                  </div>
                </div>
                <div className="pt-4 pb-5 px-5">{t.comment}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Testimonial End */}

      {/* Team Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
            <h5 className="fw-bold text-primary text-uppercase">{t('home.teamMembers')}</h5>
            <h1 className="mb-0">{t('home.professionalStuffs')}</h1>
          </div>
          <div className="row g-5">
            {team.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
      {/* Team End */}

      {/* Blog Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
            <h5 className="fw-bold text-primary text-uppercase">{t('home.ourBlog')}</h5>
            <h1 className="mb-0">{t('home.insights')}</h1>
          </div>
          <div className="row g-5">
            <BlogCard
              title={t('blog.howToBuild')}
              category={t('blog.webDevelopment')}
              author="Logia Space Team"
              date="12 Mar, 2026"
              image="/img/blog-1.jpg"
              excerpt={t('blog.howToBuildExcerpt')}
              delay="0.3s"
            />
            <BlogCard
              title={t('blog.whyStartup')}
              category={t('blog.digitalStrategy')}
              author="Logia Space Team"
              date="05 Mar, 2026"
              image="/img/blog-2.jpg"
              excerpt={t('blog.whyStartupExcerpt')}
              delay="0.6s"
            />
            <BlogCard
              title={t('blog.choosingTech')}
              category={t('blog.technology')}
              author="Logia Space Team"
              date="26 Feb, 2026"
              image="/img/blog-3.jpg"
              excerpt={t('blog.choosingTechExcerpt')}
              delay="0.9s"
            />
          </div>
        </div>
      </div>
      {/* Blog End */}

      {/* Vendor Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5 mb-5">
          <div className="bg-white">
            <div className="owl-carousel vendor-carousel">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <img key={i} src={`/img/vendor-${i}.jpg`} alt="" />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Vendor End */}
    </main>
  );
}
