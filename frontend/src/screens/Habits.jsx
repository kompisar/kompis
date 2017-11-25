/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Box } from 'reflexbox';
import { spends } from '../config';
import { formatEUR } from '../utils';

const HabitBox = ({ title, type, color }) => {
  const typeSpends = spends.filter(s => s.type === type);
  const total = typeSpends.reduce((acc, s) => acc + s.value, 0);
  return (
    <div className={`habit-box habit-box-${color}`}>
      <div className="title">{title}</div>
      <div className="amount-ctr">
        <span className="amount">{formatEUR(total)}</span>
        <span className="per">&nbsp;/ mo</span>
      </div>
    </div>
  );
};


class HabitsScreen extends React.Component {
  render() {
    return (
      <Box auto className="bg-white-logo">
        <HabitBox title="Essential Spending" type="essential" color="blue" />
        <HabitBox title="Non-Essential Spending" type="nonessential" color="red" />
        <HabitBox title="Saving & Investing" type="saving" color="green" />
      </Box>
    );
  }
}

export default withRouter(HabitsScreen);
