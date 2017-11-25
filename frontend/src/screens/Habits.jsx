/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Box } from 'reflexbox';
import { spends } from '../config';
import { formatEUR } from '../utils';
import { typeColors, typeTitles } from '../consts';
import Backbloder from '../components/Backploder';

class HabitBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      explode: false,
    }
  }

  render() {
    const { type, history } = this.props;
    const clickHandler = () => {
      this.setState({ explode: true });
      setTimeout(() => history.push(`/spending/${type}`), 300);
    };

    const color = typeColors[type];
    const title = typeTitles[type];
    const typeSpends = spends.filter(s => s.type === this.props.type);
    const total = typeSpends.reduce((acc, s) => acc + s.value, 0);
    return (
      <Backbloder explode={this.state.explode}>
        <div className={`habit-box habit-box-${color}`} onClick={clickHandler}>
          <div className="title">{title}</div>
          <div className="amount-ctr">
            <span className="amount">{formatEUR(total)}</span>
            <span className="per">&nbsp;/ mo</span>
          </div>
        </div>
      </Backbloder>
    );
  }
};

const HabeebBox = withRouter(HabitBox);

class HabitsScreen extends React.Component {
  render() {
    return (
      <Box auto className="bg-white-logo">
        <HabeebBox type="essential" />
        <HabeebBox type="nonessential" />
        <HabeebBox type="saving" />
      </Box >
    );
  }
}

export default withRouter(HabitsScreen);
