import React from 'react';
import { Flex } from 'reflexbox';
import { userFirstName } from '../config';
import { withRouter } from 'react-router-dom';

const WelcomeScreen = withRouter(({ history }) => (
  <Flex flex auto align="center" justify="center" column className="welcome" onClick={() => history.push('/oi')}>
    <div style={{ textAlign: 'center', fontSize: '48pt' }}>
      Welcome
      <br />
      {userFirstName}!
    </div>
  </Flex>
));

export default WelcomeScreen;
