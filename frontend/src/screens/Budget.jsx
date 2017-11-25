import React from 'react';
import {withRouter} from 'react-router-dom';
import {Flex, Box} from 'reflexbox';
import Rheostat from 'rheostat';

const BudgetBox = ({title}) => {
  return (
    <Box style={{width: '80%'}} className="habit-box">
      <div className="title">{title}</div>
      <div className="amount-ctr">
        <Rheostat min={1} max={100} values={[50]} />
      </div>
    </Box>
  );
};

class BudgetScreen extends React.Component {
  render() {
    return (
      <Flex flex auto column align="center" justify="center">
        {BudgetBox({title: 'Eating Out'})}
        {BudgetBox({title: 'Movies'})}
        {BudgetBox({title: 'Shopping'})}
      </Flex>
    );
  }
}

export default withRouter(BudgetScreen);
