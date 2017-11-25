import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Welcome from './screens/Welcome';
import './style.less';


const root = Object.assign(document.createElement('div'), { id: 'root' });
document.body.appendChild(root);
const viewportMetaTag = Object.assign(document.createElement('meta'), {
  name: 'viewport',
  content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
});
document.head.appendChild(viewportMetaTag);

const render = () => {
  const comp = (
    <AppContainer>
      <Welcome />
    </AppContainer>
  );
  ReactDOM.render(comp, root);
};

render();

if (module.hot) {
  module.hot.accept('./App', render);
}
