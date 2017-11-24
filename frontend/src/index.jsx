import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = Object.assign(document.createElement('main'));
document.body.appendChild(root);

ReactDOM.render(<App />, root);
