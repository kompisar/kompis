import React from 'react';

export default class Imploder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { progress: 0 };
  }

  componentDidMount() {
    this.animationTimer = setInterval(this.tick, 16);
  }

  componentWillUnmount() {
    clearInterval(this.animationTimer);
  }

  tick = () => {
    if (this.state.progress >= 1) {
      clearInterval(this.animationTimer);
      return;
    }
    this.setState({ progress: this.state.progress + 0.025 });
  };

  render() {
    const alpha = Math.max(0, 1 - this.state.progress);
    const radius = alpha * alpha * 250;
    if (radius < 0) return null;
    return (
      <svg className="imploder" viewBox="-100 -100 200 200">
        <circle cx={0} cy={0} r={radius} className={`imploder-circle ${this.props.circleClassName || ''}`} />
      </svg>
    );
  }
}
