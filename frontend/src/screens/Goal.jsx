import React from 'react';
import { withRouter } from 'react-router-dom';
import { Flex, Box } from 'reflexbox';
import Rheostat from 'rheostat';

class GoalBars extends React.Component {
  constructor(props) {
    super(props);
    const value = 500;
    this.state = {
      min: 0,
      max: 1000,
      months: [
        {
          month: 'november',
          min: 0,
          max: value,
          values: [35],
        },
        {
          month: 'december',
          min: 0,
          max: value,
          values: [85],
        },
        {
          month: 'january',
          min: 0,
          max: value,
          values: [15],
        },
        {
          month: 'february',
          min: 0,
          max: value,
          values: [10],
        },
        {
          month: 'march',
          min: 0,
          max: value,
          values: [125],
        },
        {
          month: 'april',
          min: 0,
          max: value,
          values: [700],
        },
        {
          month: 'may',
          min: 0,
          max: value,
          values: [25],
        },
        {
          month: 'june',
          min: 0,
          max: value,
          values: [100],
        },
        {
          month: 'july',
          min: 0,
          max: value,
          values: [800],
        },
        {
          month: 'august',
          min: 0,
          max: value,
          values: [600],
        },
        {
          month: 'september',
          min: 0,
          max: value,
          values: [500],
        },
      ],
    };
  }

  onChange = (e) => {
    console.log(e);
    this.setState({
      budget: Object.assign({}, this.state.budget, { values: e.values })
    })
  };

  monthToMon(month) {
    return `${month[0].toUpperCase()}${month[1]}${month[2]}`;
  }

  render() {
    return (
      <div style={{ position: 'relative', width: '95%', height: '40%' }} className="habit-box">
        <div style={{ 'margin-bottom': '15px' }}>{this.props.title}</div>
        <div style={{ position: 'absolute', width: '100%', height: '60%' }}>
          {this.state.months.map((m, i) => {
            const percentage = (i / this.state.months.length) * 100 - 10;
            return (
              <div key={m.month}
                style={{ position: 'absolute', left: `${percentage + 5}%`, bottom: 0, height: '100%', transform: 'rotate(180deg)' }}>
                <div style={{ color: 'black', position: 'absolute', left: '-5px', top: '-20px', transform: 'rotate(180deg)' }}>{this.monthToMon(m.month)}</div>
                <Rheostat {...m}
                  orientation="vertical"
                  disabled
                  style={{ background: 'transparent' }} />
              </div>
            );
          })}
          <div style={{ position: 'absolute', left: '50%', right: '50%', height: '100%'  }}>
            <Rheostat min={this.state.min} max={this.state.max} value={500} orientation="vertical"
              onValuesUpdated={(r) => {
                const value = r.values[0];
                const months = this.state.months.map(m => {
                  m.max = value;
                  return m;
                });
                this.setState({ months: months });
              }} />
          </div>
        </div>
      </div>
    );
  }
};

class Goal extends React.Component {
  render() {
    return (
      <Flex flex auto column align="center" justify="center">
        <GoalBars title="OWN MY OWN HOUSE" />
      </Flex>
    );
  }
}

export default withRouter(Goal);
