import React from 'react';
import {withRouter} from 'react-router-dom';
import {Flex, Box} from 'reflexbox';
import Rheostat from 'rheostat';
import {formatEUR} from '../utils';
import MainNav from '../components/MainNav';

class BudgetBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      projected: {
        min: 0,
        max: 100,
        values: [35]
      },
      actual: {
        min: 0,
        max: 100,
        values: [25]
      },
      budget: {
        min: 0,
        max: 100,
        values: [100]
      },
    };
  }

  render() {
    return (
      <Box style={{width: '80%'}} className="habit-box">
        <Flex>
          <Box auto className="title">{this.props.title}</Box>
          <Box>
            <span className="budget-actual-value">{formatEUR(this.state.actual.values[0])}</span>
            /
            {formatEUR(this.state.budget.values[0])}
          </Box>
        </Flex>
        <div className="amount-ctr" style={{position: 'relative'}}>
          <Rheostat {...this.state.projected} className="rheostat-projected" disable />
          <Rheostat {...this.state.actual} className="rheostat-actual" disable />
          <Rheostat {...this.state.budget} className="rheostat-budget" disable />
        </div>
      </Box>
    );
  }
};

class BudgetScreen extends React.Component {
  render() {
    return (
      <Flex flex auto column>
        <MainNav active="budget" />
        <Box auto flex column align="center" justify="center">
          <BudgetBox title="Eating Out" />
          <BudgetBox title="Movies" />
          <BudgetBox title="Shopping" />
        </Box>
      </Flex>
    );
  }
}

export default withRouter(BudgetScreen);
