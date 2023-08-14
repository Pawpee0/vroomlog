import React from 'react';
import '../../style.css';
import {createRoot} from 'react-dom/client';

import MainHeader from '../../components/MainHeader.jsx';
import Miles from './Miles.jsx';
import Reminders from './Reminders.jsx';

const root = createRoot(document.getElementById('app'));

root.render(
  <MainHeader>
    <div className='flexRow center' style={{'maxWidth': '700px', 'width': '100%', 'justifyContent': 'space-around'}}>
      <Miles/>
      <Reminders/>
    </div>
  </MainHeader>
)