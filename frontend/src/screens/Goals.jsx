/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Box } from 'reflexbox';
import ArrowCTA from '../components/ArrowCTA';
import Imploder from '../components/Imploder';

class GoalsScreen extends React.Component {
  render() {
    return (
      <Box auto flex className="bg-white-logo-dark" style={{ paddingTop: '5em' }} column>
        <Imploder circleClassName="red-imploder" />
      </Box>
    );
  }
}

export default withRouter(GoalsScreen);
