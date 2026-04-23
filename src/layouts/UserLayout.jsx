import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import MobileMenu from '../components/user/MobileMenu.jsx';
import TopBar from '../components/user/TopBar.jsx';
import Header from '../components/user/Header.jsx';
import SearchBar from '../components/user/SearchBar.jsx';
import Footer from '../components/user/Footer.jsx';
import AuthModal from '../components/user/AuthModal.jsx';
import SocialFloat from '../components/user/SocialFloat.jsx';

export default function UserLayout() {
  const [authMode, setAuthMode] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <MobileMenu onOpenAuth={setAuthMode} />
      <section>
        <TopBar onOpenAuth={setAuthMode} />
        <Header />
        <SearchBar />
      </section>

      <main>
        <Outlet />
      </main>

      <Footer />
      <AuthModal mode={authMode} setMode={setAuthMode} />
      <SocialFloat />
    </>
  );
}
