import React from 'react';
import {withRouter} from 'react-router-dom';
import {Flex, Box} from 'reflexbox';
import Rheostat from 'rheostat';
import MainNav from '../components/MainNav';
import KompisBars from '../components/KompisBars';
import {formatEUR} from '../utils';
import {spends} from '../config';
import sortBy from 'lodash/sortBy';
import reverse from 'lodash/reverse';
import take from 'lodash/take';

class BudgetBox extends React.Component {

  constructor(props) {
    super(props);
    const budget = (props.spend.name === 'Shopping') ? props.spend.value - 43 : props.spend.value + 63;
    const max = Math.max(budget, props.spend.value);
    this.state = {
      projected: {
        min: 0,
        max: max,
        values: [max - 41]
      },
      actual: {
        min: 0,
        max: max,
        values: [props.spend.value]
      },
      budget: {
        min: 0,
        max: max,
        values: [budget]
      },
    };
  }

  render() {
    let containerClasses = "habit-box";
    if (this.state.actual.values[0] > this.state.budget.values[0]) {
      containerClasses = `${containerClasses} budget-warning`
    }
    return (
      <Box style={{width: '80%'}} className={containerClasses}>
        <Flex>
          <Box auto className="title">{this.props.spend.name}</Box>
          <Box>
            <span className="budget-actual-value">{formatEUR(this.state.actual.values[0])}</span>
            /
            {formatEUR(this.state.budget.values[0])}
          </Box>
        </Flex>
        <div className="amount-ctr" style={{position: 'relative'}}>
          <Rheostat {...this.state.projected} className="rheostat-projected" />
          <Rheostat {...this.state.actual} className="rheostat-actual" />
          <Rheostat {...this.state.budget} className="rheostat-budget" />
        </div>
      </Box>
    );
  }
};

class BudgetScreen extends React.Component {
  render() {

    const typeSpends = take(reverse(sortBy(spends.filter(s => s.type === 'nonessential'), 'value')), 3);

    return (
      <Flex flex auto column>
        <MainNav active="budget" />
        <Box auto flex column align="center" justify="center">
          <Box style={{
            textAlign: 'center',
            fontSize: '16pt',
            paddingTop: '5pt',
            width: '70%',
            marginBottom: '3pt',
          }}>
            <KompisBars style={{width: '25vw', display: 'block', margin: 'auto'}} />
            <div style={{marginTop: '5pt'}}>
              You are on track for this month but you should slow down your shopping spree.
            </div>
          </Box>
          {typeSpends.map(spend => (
            <BudgetBox spend={spend} key={spend.id} />
          ))}
          <span style={{fontSize: '16pt'}}>
            <i className="fa fa-plus text-purple" style={{paddingRight: '0.35em'}} />
            Add to budget
          </span>
        </Box>
      </Flex>
    );
  }
}

export default withRouter(BudgetScreen);
