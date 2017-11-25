import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import Router from 'react-router-dom/HashRouter';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Welcome from './screens/Phone';
import './style.less';


const root = Object.assign(document.createElement('div'), {id: 'root'});
document.body.appendChild(root);
const viewportMetaTag = Object.assign(document.createElement('meta'), {
  name: 'viewport',
  content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
});
document.head.appendChild(viewportMetaTag);

const render = () => {
  const comp = (
    <AppContainer>
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
        </Switch>
      </Router>
    </AppContainer>
  );
  ReactDOM.render(comp, root);
};

render();

if (module.hot) {
  module.hot.accept('./App', render);
}
