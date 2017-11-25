/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Box } from 'reflexbox';
import Imploder from '../components/Imploder';
import goals from '../goals';
import DetailCard, { DetailCardButton } from '../components/DetailCard';

const GoalCardAndTitle = ({ goal, onDecision, fadeOut }) => (
  <div className={fadeOut ? 'animated-half-second fadeOut' : 'animated-half-second fadeIn'}>
    <div className="goal-overtext">
      In the next {goal.timeframe}, I'd like to...
    </div>
    <DetailCard
      image={goal.image}
      title={goal.title}
      value={goal.value}
      actions={[
        (<DetailCardButton icon="fa-close" text="No" key="no" onClick={() => onDecision(goal, 'no')} />),
        (<DetailCardButton icon="fa-check" text="Yes" key="yes" onClick={() => onDecision(goal, 'yes')} />),
      ]}
    />
  </div>
);

class GoalsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeOut: false,
      goalIndex: 0,
    };
  }

  onDecision = (goal, decision) => {
    goal.decision = decision;
    this.setState(
      { fadeOut: true },
      () => {
        setTimeout(() => {
          const nextIndex = this.state.goalIndex + 1;
          if (nextIndex >= goals.length) {
            this.props.history.push('/onboarding-done');
            return;
          }
          this.setState({ goalIndex: nextIndex, fadeOut: false });
        }, 550);
      },
    );
  };

  render() {
    const goal = goals[this.state.goalIndex];
    return (
      <Box auto flex className="bg-green-logo-light" style={{ paddingTop: '5em' }} column>
        <Imploder circleClassName="red-imploder" />
        <GoalCardAndTitle fadeOut={this.state.fadeOut} goal={goal} onDecision={this.onDecision} />
      </Box>
    );
  }
}

export default withRouter(GoalsScreen);
