import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Flex } from 'reflexbox';
import Icon from '../img/launcher-icon.svg';


const LauncherScreen = withRouter(({ history }) => (
  <Flex flex auto column className="launcher-screen" align="center">
    <Link to="/welcome" className="launcher-icon">
      <img src={Icon} />
      <span>Kompis</span>
    </Link>
  </Flex>
));

export default LauncherScreen;
