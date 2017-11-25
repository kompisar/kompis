import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'semantic-ui-css/semantic.css';

import App from './App';
import './style.less';


const root = Object.assign(document.createElement('div'), { id: 'root' });
document.body.appendChild(root);

const render = () => {
  ReactDOM.render(<AppContainer><App /></AppContainer>, root);
};

render();

if (module.hot) {
  module.hot.accept('./App', render);
}
