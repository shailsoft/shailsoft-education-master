import { Routes, Route, Navigate } from 'react-router-dom';
import UserLayout from './layouts/UserLayout.jsx';
import AdminLayout from './layouts/AdminLayout.jsx';
import { userRoutes } from './routes/userRoutes.jsx';
import { adminRoutes } from './routes/adminRoutes.jsx';
import AdminLogin from './pages/admin/AdminLogin.jsx';
import AdminForgot from './pages/admin/AdminForgot.jsx';
import NotFound from './pages/user/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      {/* Admin auth pages — no layout wrapper */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/forgot" element={<AdminForgot />} />

      {/* Admin panel with AdminLayout */}
      <Route path="/admin" element={<AdminLayout />}>
        {adminRoutes.map(({ path, element, index }) =>
          index ? (
            <Route key="admin-index" index element={element} />
          ) : (
            <Route key={path} path={path} element={element} />
          )
        )}
      </Route>

      {/* User website with UserLayout */}
      <Route path="/" element={<UserLayout />}>
        {userRoutes.map(({ path, element, index }) =>
          index ? (
            <Route key="user-index" index element={element} />
          ) : (
            <Route key={path} path={path} element={element} />
          )
        )}
      </Route>

      {/* Fallbacks */}
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
