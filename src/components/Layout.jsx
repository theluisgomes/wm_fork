import { Outlet } from 'react-router-dom';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import { useScrollAnimations } from '../hooks/useScrollAnimations.js';

export default function Layout() {
  useScrollAnimations();

  return (
    <>
      <Nav />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
