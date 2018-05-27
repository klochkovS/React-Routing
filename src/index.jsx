import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';

render(
  <div>
    <Counter stars="3" /><br />
    <Counter stars="7" />
  </div>,
  document.querySelector('.root'),
);
