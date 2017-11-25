/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Box } from 'reflexbox';
import Imploder from '../components/Imploder';
import goals from '../goals';
import DetailCard from '../components/DetailCard';

class GoalsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goalIndex: 0,
    };

  }

  render() {
    const goal = goals[this.state.goalIndex];
    return (
      <Box auto flex className="bg-green-logo-light" style={{ paddingTop: '5em' }} column>
        <Imploder circleClassName="red-imploder" />
        <div className="goal-overtext">
          In the next {goal.timeframe}, I'd like to...
        </div>
        <DetailCard
          image={goal.image}
          title={goal.title}
          value={goal.value}
        />

      </Box>
    );
  }
}

export default withRouter(GoalsScreen);
