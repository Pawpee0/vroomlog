import React from 'react';
import '../../style.css';
import {createRoot} from 'react-dom/client';

import MainHeader from '../../components/MainHeader.jsx';


const root = createRoot(document.getElementById('app'));

root.render(
  <MainHeader>
    <h1>hello</h1>
  </MainHeader>
)