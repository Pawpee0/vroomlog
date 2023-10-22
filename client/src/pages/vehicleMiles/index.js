import React from 'react';
import '../../styles/inputs.css';
import '../../styles/components.css';
import '../../styles/style.css';

import {createRoot} from 'react-dom/client';


import App from './App.jsx';

const root = createRoot(document.getElementById('app'));

root.render(
  <App/>
)