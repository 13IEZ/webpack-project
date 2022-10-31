import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import ErrorBoundary from './error/ErrorBoundary';

const container = document.getElementById('app');
const root = createRoot(container as Element);

const app = (
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
root.render(app);
