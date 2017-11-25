import React from 'react';
import { Flex } from 'reflexbox';
import { userFirstName } from '../../config';
import { withRouter } from 'react-router-dom';
import CircularProgressbar from 'react-circular-progressbar';
import { sample, truncate } from 'lodash';
import payees from '../../data/payees';
import KompisBars from '../../components/KompisBars';


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

  componentWillUnmount() {
    clearInterval(this.tickTimer);
  }

  tick() {
    const progress = this.state.progress;
    if (progress < 100) {
      const newProgress = progress + (Math.random() * 2);
      this.setState({
        progress: newProgress,
        lastPayee: sample(payees),
      });
    }
  }

  render() {
    const { progress, lastPayee } = this.state;
    const { history } = this.props;
    let content = null;
    if (lastPayee && progress < 100) {
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
          style={{ fontSize: '24pt', margin: '1em' }}
          className="animated fadeIn"
          onClick={() => history.push('/result')}
        >
          <KompisBars style={{ width: '35vw', display: 'block', margin: 'auto' }} />
          Let's look at how you spend your hard-earned money
        </div>
      );
    }
    return (
      <Flex flex auto align="center" justify="center" column className="bg-white-logo-dark">
        <div style={{ textAlign: 'center' }}>
          {content}
        </div>
      </Flex>
    );
  }
}

export default withRouter(AnalyzingScreen);
