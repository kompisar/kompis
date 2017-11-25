/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {withRouter} from 'react-router-dom';
import {Flex, Box} from 'reflexbox';
import {spends} from '../../config';
import {typeColors} from '../../consts';
import {navigateOnboarding} from '../../navigation';
import DetailCard, {DetailCardButton} from '../../components/DetailCard';
import Rheostat from 'rheostat';


const ComparisonSlider = ({spend, average}) => {
  const max = Math.max(spend, average);
  const averageLabel = (<Box auto className="average-label" style={{textAlign: 'right'}}>Average</Box>);
  const spendLabel = (<Box auto className="spend-label" style={{textAlign: 'right'}}>You</Box>);
  let label;
  if (average > spend) {
    label = <Flex auto>{spendLabel}{averageLabel}</Flex>;
  } else {
    label = <Flex auto>{averageLabel}{spendLabel}</Flex>;
  }
  return (
    <div style={{position: 'relative'}}>
      <Rheostat
        min={0}
        max={max}
        values={[average]}
        className="rheostat-average"
        disabled
      />
      <Rheostat
        min={0}
        max={max}
        values={[spend]}
        className="rheostat-spend"
        disabled
      />
      {label}
    </div>
  );
};


const SpendDetailCard = ({spend, onDecision}) => {
  const {
    value, image, name, type,
  } = spend;
  let body = null;
  const actions = [];
  if (type === 'nonessential') {
    body = (
      <div style={{marginTop: '20px'}}>
        <ComparisonSlider spend={value} average={150} />
      </div>);
    actions.push(<DetailCardButton icon="fa-close text-red" text="No" key="no" onClick={() => onDecision(spend, 'no')} />);
    actions.push(<DetailCardButton icon="fa-check text-green" text="Yes" key="yes" onClick={() => onDecision(spend, 'yes')} />);
  }
  return (
    <DetailCard
      image={image}
      value={value}
      title={name}
      body={body}
      actions={actions}
    />
  );
};


class SpendDetailScreen extends React.Component {
  render() {
    const {id} = this.props.match.params;
    const spendObj = spends.find(s => s.id === id);
    if (!spendObj) {
      return (<div>Oops, no spend with id {id}</div>);
    }
    const color = typeColors[spendObj.type];
    return (
      <Box auto className={`bg-${color}-logo-light`} style={{ paddingTop: '5em' }}>
        <div className="goal-overtext">
          Should we start saving from...
        </div>
        <SpendDetailCard spend={spendObj} onDecision={this.handleDecision} />
      </Box>
    );
  }

  handleDecision = (spend, decision) => {
    spend.decision = decision; // Yolo immutability
    navigateOnboarding(this.props.history);
  };
}

export default withRouter(SpendDetailScreen);
