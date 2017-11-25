import React from 'react';
import { Flex } from 'reflexbox';
import { userFirstName } from '../config';
import { withRouter } from 'react-router-dom';
import CircularProgressbar from 'react-circular-progressbar';
import { sample, truncate } from 'lodash';
import payees from '../data/payees';


class AnalyzingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      lastPayee: null,
    };
  }

  componentDidMount() {
    this.tickTimer = setInterval(this.tick.bind(this), 56);
  }

  tick() {
    const newProgress = this.state.progress + (Math.random() * 2);
    this.setState({
      progress: newProgress,
      lastPayee: sample(payees),
    });
  }

  render() {
    const { progress, lastPayee } = this.state;
    const { history } = this.props;
    let content = null;
    if (progress < 100) {
      content = (
        <div style={{ fontSize: '20pt' }}>
          <div style={{ margin: '1em' }}>Just a moment, taking a look at your spending habits...</div>
          <CircularProgressbar percentage={Math.ceil(progress)} />
          <div style={{ marginTop: '1em' }}>{truncate(lastPayee, 27)}</div>
        </div>
      );
    } else {
      content = (
        <div
          style={{ fontSize: '28pt', margin: '1em' }}
          className="animated fadeIn"
          onClick={() => history.push('/result')}
        >
          <p>Okay, got it!</p>
          Let's take a look at how you spend your hard-earned cash!
        </div>
      );
    }
    return (
      <Flex flex auto align="center" justify="center" column className="bg-purple">
        <div style={{ textAlign: 'center' }}>
          {content}
        </div>
      </Flex>
    );
  }
}

export default withRouter(AnalyzingScreen);
