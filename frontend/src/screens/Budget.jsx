import React from 'react';
import {withRouter} from 'react-router-dom';
import {Flex, Box} from 'reflexbox';
import Rheostat from 'rheostat';
import MainNav from '../components/MainNav';
import KompisBars from '../components/KompisBars';
import {formatEUR} from '../utils';

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
          <Rheostat {...this.state.projected} className="rheostat-projected" disabled />
          <Rheostat {...this.state.actual} className="rheostat-actual" disabled />
          <Rheostat {...this.state.budget} className="rheostat-budget" disabled />
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
        <Box style={{
          textAlign: 'center',
          fontSize: '16pt',
          paddingTop: '10pt',
          marginLeft: '15%',
          width: '70%',
          marginBottom: '-30pt'
        }}>
          <KompisBars style={{width: '25vw', display: 'block', margin: 'auto'}} />
          <div style={{marginTop: '5pt'}}>
            You are on track for this month but you should slow down your shopping spree.
          </div>
        </Box>
        <Box auto flex column align="center" justify="center">
          <BudgetBox title="Shopping" />
          <BudgetBox title="Eating Out" />
          <BudgetBox title="Movies" />
        </Box>
      </Flex>
    );
  }
}

export default withRouter(BudgetScreen);
