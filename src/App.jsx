import { Route, Routes, useLocation } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import Layout from './components/Layout.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Portfolio = lazy(() => import('./pages/Portfolio.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return undefined;
    }

    const id = decodeURIComponent(hash.slice(1));
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'instant', block: 'start' });
        return true;
      }
      return false;
    };

    if (!tryScroll()) {
      const t1 = window.setTimeout(tryScroll, 120);
      const t2 = window.setTimeout(tryScroll, 400);
      return () => {
        window.clearTimeout(t1);
        window.clearTimeout(t2);
      };
    }
    return undefined;
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="sobre" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contato" element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
