/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Box } from 'reflexbox';
import { spends } from '../../config';
import { formatEUR } from '../../utils';
import { typeColors, typeTitles } from '../../consts';
import Backbloder from '../../components/Backploder';
import ArrowCTA from '../../components/ArrowCTA';

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
    const totalSpends = spends.reduce((acc, s) => acc + s.value, 0);

    const totalRatio = total / totalSpends;
    const extraClass = totalRatio > 0.40 ? '-larger' : totalRatio < 0.10 ? '-smaller' : '';
    return (
      <Backbloder explode={this.state.explode}>
        <div className={`habit-box habit-box-${color}`} onClick={this.handleClick}>
          <div className={"title" + extraClass}>{title}</div>
          <div className="amount-ctr">
            <span className={"amount" + extraClass}>{formatEUR(total)}</span>
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
      this.boxes.nonessential.handleClick();
    };

    const whereCouldWeSaveBar = (
      <ArrowCTA text="Where could we save" onClick={clickHandler} />
    );

    return (
      <Box auto flex className="bg-white-logo-dark" style={{ paddingTop: '5em' }} column>
        <Box auto>
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
        </Box>
        <Box>
          {this.state.navigating ? null : whereCouldWeSaveBar}
        </Box>
      </Box>
    );
  }
}

export default withRouter(HabitsScreen);
