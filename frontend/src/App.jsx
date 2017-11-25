import React from 'react';
import HashRouter from 'react-router-dom/HashRouter';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import { HotKeys } from 'react-hotkeys';
import './styles/style.less';
import Welcome from './screens/onboarding/Welcome';
import AnalyzingScreen from './screens/onboarding/AnalyzingScreen';
import Habits from './screens/onboarding/Habits';
import Budget from './screens/Budget';
import Spending from './screens/onboarding/Spending';
import SpendDetail from './screens/onboarding/SpendDetail';
import Phone from './screens/Phone';
import Goals from './screens/onboarding/Goals';
import OnboardingDone from './screens/onboarding/OnboardingDone';

// We have to save router ref as HashRouter cannot
// be given history={history} like abstract Router could
let router = null;

const globalKeyMap = {
  goToPhoneScreen: '0',
};

const globalKeyHandlers = {
  goToPhoneScreen: () => router.history.push('/phone'),
};

class App extends React.Component {
  render() {
    return (
      <HashRouter
        ref={(routerRef) => {
          router = routerRef;
        }}
      >
        <HotKeys className="global-hotkey-area" keyMap={globalKeyMap} handlers={globalKeyHandlers}>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/analyze" component={AnalyzingScreen} />
            <Route exact path="/result" component={Habits} />
            <Route exact path="/budget" component={Budget} />
            <Route exact path="/spending/:id" component={Spending} />
            <Route exact path="/detail/:id" component={SpendDetail} />
            <Route exact path="/phone" component={Phone} />
            <Route exact path="/onboard-goals" component={Goals} />
            <Route exact path="/onboarding-done" component={OnboardingDone} />
          </Switch>
        </HotKeys>
      </HashRouter>
    );
  }
}

export default App;
