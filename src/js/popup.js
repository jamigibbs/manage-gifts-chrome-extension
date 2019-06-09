import '../css/popup.css';
import Greeting from './popup/greeting';
import React from 'react';
import { render } from 'react-dom';

render(
  <Greeting />,
  window.document.getElementById('app-container')
);
