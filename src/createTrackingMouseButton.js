'use strict';

import { createBtn } from './utils.js';

const trackingMousePosition = (e) => {
  console.log(`MousePosition ${e.clientX} | ${e.clientY}`);
};

export default () => {
  const btn = createBtn('MousePosition', 'mousePosition');
  let state = false;
  btn.addEventListener('click', () => {
    state = !state;
    console.debug(`set MousePositionTracker to ${state}`);
    if (state) {
      document.addEventListener('mousemove', trackingMousePosition);
    } else {
      document.removeEventListener('mousemove', trackingMousePosition);
    }
  });
  return btn;
};
