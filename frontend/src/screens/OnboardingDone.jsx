/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Box } from 'reflexbox';
import Imploder from '../components/Imploder';
import ArrowCTA from '../components/ArrowCTA';


class OnboardingDone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Box className="bg-white onboarding-done-view" auto flex column>
        <Imploder circleClassName="green-imploder" />
        <Box auto flex column align="center" justify="center">
          <Box className="inner animated fadeInUp">
            <i className="fa fa-check-circle" />
            <div className="title">All done!</div>
            <div>I'll keep track of your finances in the background to make sure you're on track with your savings.
            </div>
          </Box>
        </Box>
        <Box>
          <ArrowCTA text="Let's go!" />
        </Box>
      </Box>
    );
  }
}

export default withRouter(OnboardingDone);
