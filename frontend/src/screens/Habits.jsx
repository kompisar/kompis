/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Box, Flex } from 'reflexbox';
import { spends } from '../config';
import { formatEUR } from '../utils';
import { typeColors, typeTitles } from '../consts';
import FontAwesome from 'react-fontawesome';
import Backbloder from '../components/Backploder';

class HabeebBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { explode: false };
  }

  handleClick = () => {
    const { type, onNavigate, onNavigateStart } = this.props;
    if (onNavigateStart) {
      onNavigateStart(type);
    }
    this.setState(
      { explode: true },
      () => {
        setTimeout(() => {
          onNavigate(type);
        }, 300);
      },
    );
  };

  render() {
    const { type } = this.props;
    const color = typeColors[type];
    const title = typeTitles[type];
    const typeSpends = spends.filter(s => s.type === this.props.type);
    const total = typeSpends.reduce((acc, s) => acc + s.value, 0);
    return (
      <Backbloder explode={this.state.explode}>
        <div className={`habit-box habit-box-${color}`} onClick={this.handleClick}>
          <div className="title">{title}</div>
          <div className="amount-ctr">
            <span className="amount">{formatEUR(total)}</span>
            <span className="per">&nbsp;/ mo</span>
          </div>
        </div>
      </Backbloder>
    );
  }
}

class HabitsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigating: false,
    };
    this.boxes = {};
  }

  handleNavigate = (type) => {
    const { history } = this.props;
    history.push(`/spending/${type}`);
  };

  render() {
    const clickHandler = () => {
      this.nonessentialBox.handleClick();
    };

    const whereCouldWeSaveBar = (
      <div>
        <Flex
          justify="space-between"
          style={{ margin: '1em', marginTop: '3em', fontSize: '18pt' }}
          onClick={clickHandler}
        >
          <Box>Where could we save</Box>
          <Box><FontAwesome name="arrow-right" className="habit-text" /></Box>
        </Flex>
      </div>
    );

    return (
      <Box auto className="bg-white-logo" style={{ paddingTop: '5em' }}>
        {
          ['essential', 'nonessential', 'saving'].map(type => (
            <HabeebBox
              key={type}
              type={type}
              onNavigate={this.handleNavigate}
              onNavigateStart={() => this.setState({ navigating: true })}
              ref={(box) => {
                this.boxes[type] = box;
              }}
            />
          ))
        }
        {this.state.navigating ? null : whereCouldWeSaveBar}
      </Box>
    );
  }
}

export default withRouter(HabitsScreen);
