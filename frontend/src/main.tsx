import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProviders } from './app/providers/AppProviders';
import { AppRouter } from './app/router/AppRouter';
import { attachFrontendClickLogging } from './lib/actionLogger';
import './styles/global.css';

const cleanupTelemetry = attachFrontendClickLogging();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProviders>
      <AppRouter />
    </AppProviders>
  </React.StrictMode>
);

window.addEventListener('beforeunload', cleanupTelemetry);
