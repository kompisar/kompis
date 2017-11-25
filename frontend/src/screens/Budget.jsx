import React from 'react';
import {withRouter} from 'react-router-dom';
import {Flex, Box} from 'reflexbox';
import Rheostat from 'rheostat';

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
        values: [50]
      },
    };
  }

  onChange = (e) => {
    console.log(e);
    this.setState({
      budget: Object.assign({}, this.state.budget, {values: e.values})
    })
  };

  render() {
    return (
      <Box style={{width: '80%'}} className="habit-box">
        <Flex>
          <Box auto className="title">{this.props.title}</Box>
          <Box>{this.state.actual.values[0]} / {this.state.budget.values[0]}</Box>
        </Flex>
        <div className="amount-ctr" style={{position: 'relative'}}>
          <Rheostat {...this.state.projected} className="rheostat-projected"
                    disable />
          <Rheostat {...this.state.actual} className="rheostat-actual"
                    disable
                    style={{position: 'relative', left: 0, top: 0}} />
          <Rheostat {...this.state.budget} className="rheostat-budget"
                    onValuesUpdated={this.onChange}
                    onChange={this.onChange}
                    style={{position: 'relative', left: 0, top: 0}}
          />
          <Flex>
            <Box auto>{this.state.actual.min}</Box>
            <Box>{this.state.actual.max}</Box>
          </Flex>
        </div>
      </Box>
    );
  }
};

class BudgetScreen extends React.Component {
  render() {
    return (
      <Flex flex auto column align="center" justify="center">
        <BudgetBox title="Eating Out" />
        <BudgetBox title="Movies" />
        <BudgetBox title="Shopping" />
      </Flex>
    );
  }
}

export default withRouter(BudgetScreen);
