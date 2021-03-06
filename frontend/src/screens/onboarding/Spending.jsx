import React from 'react';
import { withRouter } from 'react-router-dom';
import { Box } from 'reflexbox';
import { typeColors, typeTitles } from '../../consts';
import { spends } from '../../config';
import { formatEUR } from '../../utils';
import sortBy from 'lodash/sortBy';
import reverse from 'lodash/reverse';
import ArrowCTA from '../../components/ArrowCTA';
import { navigateOnboarding } from '../../navigation';

const SpendBar = withRouter(({ spend, total, history }) => {
  const { id, name, value } = spend;
  return (
    <div className="spendbar" onClick={() => history.push(`/detail/${id}`)}>
      <progress value={value} max={total} />
      <div className="title">{name}</div>
      <div className="value">{formatEUR(value)}</div>
    </div>
  );
});

class Spending extends React.Component {
  render() {
    const type = this.props.match.params.id;
    const color = typeColors[type];
    const typeSpends = reverse(sortBy(spends.filter(s => s.type === type), 'value'));
    const total = typeSpends.reduce((acc, s) => acc + s.value, 0);
    const title = typeTitles[type];

    return (
      <Box auto className={`bg-${color}-logo-light`} flex column>
        <div className="spending-text">{title}</div>
        <div className="spendbar-ctr animated fadeIn" style={{ flex: 1 }}>
          {typeSpends.map(spend => <SpendBar spend={spend} total={total} key={spend.id} />)}
        </div>
        {type === 'nonessential' ?
          <ArrowCTA
            text="Let's start saving"
            classor="text-white"
            onClick={() => navigateOnboarding(this.props.history)} /> :
          null
        }
      </Box>
    );
  }
}

export default withRouter(Spending);
