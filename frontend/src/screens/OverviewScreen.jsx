import React from 'react';
import { Box, Flex } from 'reflexbox';
import { withRouter } from 'react-router-dom';
import MainNav from '../components/MainNav';
import reapfield from '../img/reapfield.png';

const OverviewScreen = withRouter(({ history }) => (
  <Flex flex auto column className="bg-white">
    <MainNav active="overview" />
    <Box style={{margin: '2em', textAlign: 'center'}}>
      this view is now overwatch view
      <img src={reapfield} style={{ width: '100%' }} />
    </Box>
  </Flex>
));

export default OverviewScreen;
