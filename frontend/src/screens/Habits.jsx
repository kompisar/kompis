/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Box } from 'reflexbox';
import { spends } from '../config';
import { formatEUR } from '../utils';
import { typeColors, typeTitles } from '../consts';

const HabitBox = ({ type }) => {
  const color = typeColors[type];
  const title = typeTitles[type];
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
        <HabitBox type="essential" />
        <HabitBox type="nonessential" />
        <HabitBox type="saving" />
      </Box>
    );
  }
}

export default withRouter(HabitsScreen);
