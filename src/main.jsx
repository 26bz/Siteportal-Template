/*
 * Site Portal Template
 * Copyright (C) 2025 26bz (https://26bz.online/)
 * Licensed under GNU GPLv3 or later. See LICENSE file.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
