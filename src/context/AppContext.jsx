import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext(null);

const STORAGE_KEY = 'shailsoft_auth';

export function AppProvider({ children }) {
  const [auth, setAuth] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : { user: null, role: null };
    } catch {
      return { user: null, role: null };
    }
  });

  const [siteSettings, setSiteSettings] = useState({
    siteName: 'Education Master',
    theme: 'light',
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(auth));
  }, [auth]);

  const login = (user, role = 'user') => setAuth({ user, role });
  const logout = () => setAuth({ user: null, role: null });

  return (
    <AppContext.Provider
      value={{ auth, login, logout, siteSettings, setSiteSettings }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside AppProvider');
  return ctx;
}
