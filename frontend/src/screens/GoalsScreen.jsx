import React from 'react';
import { Box, Flex } from 'reflexbox';
import { withRouter } from 'react-router-dom';
import MainNav from '../components/MainNav';

const GoalsScreen = withRouter(({ history }) => (
  <Flex flex auto column className="bg-white">
    <MainNav active="goals" />
    <Box style={{ margin: '2em', textAlign: 'center' }}>
      ghouls and skullingtons???
    </Box>
  </Flex>
));

export default GoalsScreen;
