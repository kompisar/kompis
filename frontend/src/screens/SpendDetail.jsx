/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Box } from 'reflexbox';
import { spends } from '../config';
import { typeColors } from '../consts';
import { navigateOnboarding } from '../navigation';
import DetailCard, { DetailCardButton } from '../components/DetailCard';


const SpendDetailCard = ({ spend, onDecision }) => {
  const {
    value, image, name, type,
  } = spend;
  let advice = null;
  const actions = [];
  if (type === 'nonessential') {
    advice = 'You spend a whole lot on this. Can we maybe cut back?'; // TODO: Fixme
    actions.push(<DetailCardButton icon="fa-close" text="No" key="no" onClick={() => onDecision(spend, 'no')} />);
    actions.push(<DetailCardButton icon="fa-check" text="Yes" key="yes" onClick={() => onDecision(spend, 'yes')} />);
  }
  return (
    <DetailCard
      image={image}
      value={value}
      title={name}
      body={<div className="advice">{advice}</div>}
      actions={actions}
    />
  );
};


class SpendDetailScreen extends React.Component {
  render() {
    const { id } = this.props.match.params;
    const spendObj = spends.find(s => s.id === id);
    if (!spendObj) {
      return (<div>Oops, no spend with id {id}</div>);
    }
    const color = typeColors[spendObj.type];
    return (
      <Box auto className={`bg-${color}`}>
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
