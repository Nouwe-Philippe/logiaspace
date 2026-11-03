import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Spinner from './components/Spinner';
import SearchModal from './components/SearchModal';
import { initJqLibs } from './utils/initJqLibs';
import { LanguageProvider } from './context/LanguageContext';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function InitLibs() {
  const { pathname } = useLocation();
  useEffect(() => {
    const raf = requestAnimationFrame(() => initJqLibs());
    return () => cancelAnimationFrame(raf);
  }, [pathname]);
  return null;
}

function App() {
  const [spinnerShow, setSpinnerShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setSpinnerShow(false), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <LanguageProvider>
      <Router>
      <Spinner show={spinnerShow} />
      <Navbar />
      <SearchModal />
      <ScrollToTop />
      <InitLibs />
      <Routes>
        <Route path="/" element={<><Carousel /><Home /></>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <BackToTop />
      </Router>
    </LanguageProvider>
  );
}

export default App;
