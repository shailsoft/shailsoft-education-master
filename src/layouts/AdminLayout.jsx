import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AdminTopbar from '../components/admin/AdminTopbar.jsx';
import AdminSidebar from '../components/admin/AdminSidebar.jsx';

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const toggle = (next) =>
    setSidebarOpen((cur) => (typeof next === 'boolean' ? next : !cur));

  return (
    <>
      <AdminTopbar onToggleSidebar={toggle} />
      <div className="container-fluid sb2">
        <div className="row">
          <AdminSidebar open={sidebarOpen} />
          <div className="sb2-2">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
