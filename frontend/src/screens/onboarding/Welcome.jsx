import React from 'react';
import { Flex } from 'reflexbox';
import { userFirstName } from '../../config';
import { withRouter } from 'react-router-dom';
import KompisBars from '../../components/KompisBars';

const WelcomeScreen = withRouter(({ history }) => (
  <Flex flex auto align="center" justify="center" column className="bg-white-logo-dark animated fadeIn" onClick={() => history.push('/analyze')}>
    <div style={{ textAlign: 'center', fontSize: '32pt' }}>
      <KompisBars style={{ width: '35vw', display: 'block', margin: 'auto' }} />
      <div style={{marginTop: '5vw'}}>
        Nice to meet you,
        <br />
        {userFirstName}
      </div>
    </div>
  </Flex>
));

export default WelcomeScreen;
