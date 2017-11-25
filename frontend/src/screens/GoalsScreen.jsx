import React from 'react';
import { Box, Flex } from 'reflexbox';
import { withRouter } from 'react-router-dom';
import MainNav from '../components/MainNav';
import doot from '../img/doot.gif';

const GoalsScreen = withRouter(({ history }) => (
  <Flex flex auto column className="bg-dark">
    <MainNav active="goals" />
    <Box style={{ margin: '2em', textAlign: 'center' }}>
      <p>ghouls and skullingtons???</p>
      <img src={doot} style={{ width: '100%' }} />
    </Box>
  </Flex>
));

export default GoalsScreen;
