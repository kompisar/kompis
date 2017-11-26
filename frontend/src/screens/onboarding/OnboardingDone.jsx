/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Box } from 'reflexbox';
import Imploder from '../../components/Imploder';
import ArrowCTA from '../../components/ArrowCTA';
import ParticleVerse from '../../components/Particleverse';


class OnboardingDone extends React.Component {
  render() {
    return (
      <Box className="bg-white onboarding-done-view" auto flex column>
        <Imploder circleClassName="green-imploder" />
        <ParticleVerse component={() => <i className="fa fa-euro" />} />
        <Box auto flex column align="center" justify="center">
          <Box className="inner animated fadeInUp">
            <i className="fa fa-check-circle" />
            <div className="title">All done!</div>
            <div class="text">
              I'll keep an eye on your finances in the background to make sure you're on track with your savings.
            </div>
          </Box>
        </Box>
        <Box>
          <ArrowCTA text="Let's go!" onClick={() => this.props.history.push('/overview')} />
        </Box>
      </Box>
    );
  }
}

export default withRouter(OnboardingDone);
