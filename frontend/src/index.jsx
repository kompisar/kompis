import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import HashRouter from 'react-router-dom/HashRouter';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import {HotKeys} from 'react-hotkeys';
import Welcome from './screens/Welcome';
import Phone from './screens/Phone';
import AnalyzingScreen from './screens/AnalyzingScreen';
import Habits from './screens/Habits';
import './styles/style.less';
import Budget from './screens/Budget';
import Spending from './screens/Spending';
import SpendDetail from './screens/SpendDetail';


const root = Object.assign(document.createElement('div'), {id: 'root'});
document.body.appendChild(root);
const viewportMetaTag = Object.assign(document.createElement('meta'), {
  name: 'viewport',
  content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
});
document.head.appendChild(viewportMetaTag);

// We have to save router ref as HashRouter cannot
// be given history={history} like abstract Router could
let router = null;

const globalKeyMap = {
  'goToPhoneScreen': '0',
};

const globalKeyHandlers = {
  'goToPhoneScreen': () => router.history.push('/phone'),
};

const render = () => {
  const comp = (
    <AppContainer>
      <HashRouter ref={routerRef => router = routerRef}>
        <HotKeys className="global-hotkey-area" keyMap={globalKeyMap} handlers={globalKeyHandlers}>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/analyze" component={AnalyzingScreen} />
            <Route exact path="/result" component={Habits} />
            <Route exact path="/budget" component={Budget} />
            <Route exact path="/spending/:id" component={Spending} />
            <Route exact path="/detail/:id" component={SpendDetail} />
            <Route exact path="/phone" component={Phone} />
          </Switch>
        </HotKeys>
      </HashRouter>
    </AppContainer>
  );
  ReactDOM.render(comp, root);
};

render();

if (module.hot) {
  module.hot.accept('./App', render);
}
