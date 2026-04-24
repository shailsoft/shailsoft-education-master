import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { AppProvider } from './context/AppContext.jsx';

import './assets/css/font-awesome.min.css';
import './assets/css/materialize.css';
import './assets/css/bootstrap.css';
import './assets/css/style.css';
import './assets/css/style-mob.css';
import './assets/css/responsive-fixes.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
