import React from 'react';
import { Box, Flex } from 'reflexbox';
import { withRouter } from 'react-router-dom';
import MainNav from '../components/MainNav';
import construct from '../img/construt.gif';

const GoalsScreen = withRouter(({ history }) => (
  <Flex flex auto column className="bg-white">
    <MainNav active="goals" />
    <Box style={{ margin: '2em', textAlign: 'center' }}>
      <img src={construct} style={{ margin: 'auto', maxWidth: '60%' }} />
    </Box>
  </Flex>
));

export default GoalsScreen;
