/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Box } from 'reflexbox';
import { formatEUR } from '../utils';
import { spends } from '../config';
import { typeColors } from '../consts';
import { navigateOnboarding } from '../navigation';

const SpendDetailButton = ({ text, icon, onClick }) => (
  <button onClick={onClick}>
    {icon ? <i className={`fa ${icon}`} style={{ paddingRight: '0.25em' }} /> : null}
    {text}
  </button>
);


const SpendDetailCard = ({ spend, onDecision }) => {
  const {
    value, image, name, type,
  } = spend;
  const imageCtr = (
    image ? (
      <div className="image" style={{ backgroundImage: `url(${image})` }}>&nbsp;</div>
    ) : null
  );
  let advice = null;
  const actions = [];
  if (type === 'nonessential') {
    advice = 'You spend a whole lot on this. Can we maybe cut back?'; // TODO: Fixme
    actions.push(<SpendDetailButton icon="fa-close" text="No" key="no" onClick={() => onDecision(spend, 'no')} />);
    actions.push(<SpendDetailButton icon="fa-check" text="Yes" key="yes" onClick={() => onDecision(spend, 'yes')} />);
  }
  return (
    <div className="detail-card">
      {imageCtr}
      <div className="detail-card-main">
        <div className="title">{name}</div>
        <div className="amount">{formatEUR(value)}</div>
        <div className="advice">{advice}</div>
        {/* <div>Average bar here</div> */}
      </div>
      <div className="detail-card-actions">
        {actions}
      </div>
    </div>
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
