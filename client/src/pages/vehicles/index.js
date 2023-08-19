import React from 'react';
import '../../styles/style.css';
import { createRoot } from 'react-dom/client';

import MainHeader from '../../components/MainHeader.jsx';
import List from './list.jsx'


// Render your React component instead
const root = createRoot(document.getElementById('app'));

root.render(
  <MainHeader>
     <List/>
  </MainHeader>

);