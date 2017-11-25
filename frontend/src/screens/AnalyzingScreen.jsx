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
    this.tickTimer = setInterval(this.tick.bind(this), 45);
  }

  tick() {
    const newProgress = this.state.progress + Math.random() * 2;
    this.setState({
      progress: newProgress,
      lastPayee: sample(payees),
    });
  }

  render() {
    const { progress, lastPayee } = this.state;
    let content = 'wat';
    if (progress < 100) {
      content = (
        <div>
          <CircularProgressbar percentage={Math.ceil(progress)} />
          <div style={{ fontSize: '20pt', marginTop: '1em' }}>{truncate(lastPayee, 27)}</div>
        </div>
      );
    } else {
      content = (
        <div style={{ fontSize: '40pt', margin: '0.5em' }}>
          fucksake stop spending money {userFirstName}
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
