import { sayHello } from './test';
import './assets/scss/site.scss';

const message = document.querySelector('#message');

const initApp = () => {
  const msg = sayHello('Michael');
  message.innerHTML = msg;
};

document.addEventListener('DOMContentLoaded', initApp);
