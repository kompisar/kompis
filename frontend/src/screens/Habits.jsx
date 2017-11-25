/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Box, Flex } from 'reflexbox';
import { spends } from '../config';
import { formatEUR } from '../utils';
import { typeColors, typeTitles } from '../consts';
import FontAwesome from 'react-fontawesome';
import Backbloder from '../components/Backploder';
import KompisBars from '../components/KompisBars';

class HabitBox extends React.Component {
  render() {
    const { type, explode } = this.props;
    const color = typeColors[type];
    const title = typeTitles[type];
    const typeSpends = spends.filter(s => s.type === this.props.type);
    const total = typeSpends.reduce((acc, s) => acc + s.value, 0);
    return (
      <Backbloder explode={this.props.explode}>
        <div className={`habit-box habit-box-${color}`}>
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
  constructor(props) {
    super(props);
    this.state = {
      explode: false,
    }
  }

  render() {
    const { history } = this.props;
    const clickHandler = () => {
      this.setState({ explode: true });
      setTimeout(() => history.push(`/spending/nonessential`), 300);
    };

    return (
      <Box auto className="bg-white-logo" style={{ 'padding-top': '5em' }}>
        <HabeebBox type="essential" explode={false} />
        <HabeebBox type="nonessential" explode={this.state.explode} />
        <HabeebBox type="saving" explode={false} />
        {this.state.explode ? null : (
          <div>
            <Flex justify="space-between" style={{ margin: '1em', 'margin-top': '3em', 'font-size': '18pt' }} onClick={clickHandler}>
              <Box>Where could we save</Box>
              <Box><FontAwesome name="arrow-right" className="habit-text" /></Box>
            </Flex>
          </div>
        )}
      </Box >
    );
  }
}

export default withRouter(HabitsScreen);
