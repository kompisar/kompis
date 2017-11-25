/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Box } from 'reflexbox';
import { formatEUR } from '../utils';
import { spends } from '../config';
import { typeColors } from '../consts';


const SpendDetailCard = ({ spend }) => {
  const { value, image, name } = spend;
  const imageCtr = (
    image ? (
      <div className="image" style={{ backgroundImage: `url(${image})` }}>&nbsp;</div>
    ) : null
  );
  return (
    <div className="detail-card">
      {imageCtr}
      <div className="detail-card-main">
        <div className="title">{name}</div>
        <div className="amount">{formatEUR(value)}</div>
        {/*<div>Average bar here</div>*/}
      </div>
      <div className="detail-card-actions">
        <button>deez</button>
        <button>nutz</button>
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
        <SpendDetailCard spend={spendObj} />
      </Box>
    );
  }
}

export default withRouter(SpendDetailScreen);
