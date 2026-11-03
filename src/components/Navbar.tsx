import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from '../context/LanguageContext';

const blogDropdownItems = [
  { to: '/blog', labelKey: 'navbar.blogGrid' },
  { to: '/detail', labelKey: 'navbar.blogDetail' },
];

const pagesDropdownItems = [
  { to: '/privacy', labelKey: 'pages.privacyPolicy' },
  { to: '/terms', labelKey: 'pages.termsOfService' },
];

const socialLinks = [
  { icon: 'fab fa-twitter', href: '', label: 'Twitter' },
  { icon: 'fab fa-facebook-f', href: 'https://www.facebook.com/share/1Gqwz6LZHa/?mibextid=wwXIfr', label: 'Facebook' },
  { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/logia-space-7407893a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', label: 'LinkedIn' },
  { icon: 'fab fa-instagram', href: 'https://www.instagram.com/logiaspace?igsh=MjdlbDdpajIxaHdj&utm_source=qr', label: 'Instagram' },
  { icon: 'fab fa-youtube', href: '', label: 'YouTube' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 45);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdown = (e: React.MouseEvent) => {
    if (window.innerWidth >= 992) {
      const el = e.currentTarget;
      el.classList.toggle('show');
      el.setAttribute('aria-expanded', el.classList.contains('show').toString());
    }
  };

  return (
    <>
      {/* Topbar */}
      <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
              <small className="me-3 text-light"><i className="fa fa-map-marker-alt me-2"></i>Yaounde, Cameroun</small>
              <small className="me-3 text-light"><i className="fa fa-phone-alt me-2"></i>+237 676 507 052</small>
              <small className="text-light"><i className="fa fa-envelope-open me-2"></i>logiaspace@gmail.com</small>
              {/* Language Selector */}
              <div className="dropdown d-inline-block ms-3 position-static">
                <button
                  className="btn btn-sm border border-light bg-transparent text-light d-flex align-items-center gap-2 px-2 py-1 rounded-pill"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-globe text-warning"></i>
                  <span className="d-none d-sm-inline small fw-medium">{language === 'fr' ? t('common.french') : t('common.english')}</span>
                  <i className="fa fa-chevron-down text-light opacity-50 fs-6"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-end border-0 shadow-lg rounded-2 overflow-hidden p-0 mt-2" style={{ minWidth: '180px', backgroundColor: '#1a1a1a' }}>
                  {[
                    { code: 'en', label: t('common.english'), flag: '🇺🇸' },
                    { code: 'fr', label: t('common.french'), flag: '🇫🇷' },
                  ].map((lng) => {
                    const isActive = language === lng.code;
                    return (
                      <button
                        key={lng.code}
                        className={`dropdown-item d-flex align-items-center justify-content-between py-3 px-3 border-0 bg-transparent text-white text-decoration-none ${isActive ? 'bg-primary' : ''} transition`}
                        onClick={() => setLanguage(lng.code as 'en' | 'fr')}
                      >
                        <span className="d-flex align-items-center gap-3">
                          <span className="fs-4">{lng.flag}</span>
                          <span className="small fw-medium">{lng.label}</span>
                        </span>
                        {isActive && <i className="fa fa-check text-white fs-6"></i>}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                  href={s.href}
                  aria-label={s.label}
                >
                  <i className={`${s.icon} fw-normal`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="container-fluid position-relative p-0">
        <nav
          className={`navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0 ${isScrolled ? 'sticky-top shadow-sm' : ''}`}
        >
          <NavLink to="/" className="navbar-brand p-0" end>
            <img src="/img/logo.png" alt="logiaspace" style={{ height: 75 }} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className={`collapse navbar-collapse${isOpen ? ' show' : ''}`} id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              {[
                { to: '/', labelKey: 'navbar.home' },
                { to: '/about', labelKey: 'navbar.about' },
                { to: '/services', labelKey: 'navbar.services' },
              ].map((link, i) => (
                <NavLink
                  key={i}
                  to={link.to}
                  className={({ isActive }) => `nav-item nav-link${isActive ? ' active' : ''}`}
                  onClick={() => setIsOpen(false)}
                  end={link.to === '/'}
                >
                  {t(link.labelKey)}
                </NavLink>
              ))}
              <div className="nav-item dropdown" onMouseEnter={handleDropdown} onMouseLeave={handleDropdown}>
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  {t('navbar.blog')}
                </a>
                <div className="dropdown-menu m-0">
                  {blogDropdownItems.map((item, i) => (
                    <NavLink key={i} to={item.to} className="dropdown-item" onClick={() => setIsOpen(false)}>
                      {t(item.labelKey)}
                    </NavLink>
                  ))}
                </div>
              </div>
              <div className="nav-item dropdown" onMouseEnter={handleDropdown} onMouseLeave={handleDropdown}>
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  {t('navbar.pages')}
                </a>
                <div className="dropdown-menu m-0">
                  {pagesDropdownItems.map((item, i) => (
                    <NavLink key={i} to={item.to} className="dropdown-item" onClick={() => setIsOpen(false)}>
                      {t(item.labelKey)}
                    </NavLink>
                  ))}
                </div>
              </div>
              <NavLink
                to="/contact"
                className={({ isActive }) => `nav-item nav-link nav-contact${isActive ? ' active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {t('navbar.contact')}
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
