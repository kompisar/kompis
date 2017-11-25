/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Box } from 'reflexbox';
import * as config from '../config';

const HabitBox = ({ title, amount, color }) => {
  const formattedAmount = parseFloat(amount).toLocaleString('en', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    currency: 'EUR',
    style: 'currency',
  });
  return (
    <div className={`habit-box habit-box-${color}`}>
      <div className="title">{title}</div>
      <div className="amount-ctr">
        <span className="amount">{formattedAmount}</span>
        <span className="per">&nbsp;/ mo</span>
      </div>
    </div>
  );
};


class HabitsScreen extends React.Component {
  render() {
    return (
      <Box auto className="bg-white-logo">
        <HabitBox title="Essential Spending" amount={config.essentialSpend} color="blue" />
        <HabitBox title="Non-Essential Spending" amount={config.nonEssentialSpend} color="red" />
        <HabitBox title="Saving & Investing" amount={config.savingSpend} color="green" />
      </Box>
    );
  }
}

export default withRouter(HabitsScreen);
