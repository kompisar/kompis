import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.css';
import './style.less';


const root = Object.assign(document.createElement('div'), { id: 'root' });
document.body.appendChild(root);

ReactDOM.render(<App />, root);
