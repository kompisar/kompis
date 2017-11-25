/* eslint-disable react/no-array-index-key */
import React from 'react';

function lerp(a, b, alpha) {
  return (b * alpha) + (a * (1 - alpha));
}

export default class KompisBars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bars: new Array(5).fill(0).map(() => ({ height: 0.2 + (Math.random() * 0.8) })),
      animationProgress: 0,
    };
  }

  componentDidMount() {
    this.tickTimer = setInterval(this.tick.bind(this), 1000 / 45);
  }

  componentWillUnmount() {
    clearInterval(this.tickTimer);
  }

  tick() {
    this.setState({
      animationProgress: this.state.animationProgress + 0.01,
    });
  }


  render() {
    const { bars, animationProgress } = this.state;
    const { style } = this.props;
    const alpha = Math.min(1, animationProgress);
    const time = (+new Date()) / 1000;
    return (
      <svg viewBox="-10 -10 120 70" className="kompis-bars" style={style}>
        {bars.map((bar, i) => {
          const x = (i / (bars.length - 1)) * 100;
          const waveHeight = 0.5 + (Math.sin((time * 5) + i) * 0.4);
          const actualHeight = bar.height;
          const lerpHeight = lerp(waveHeight, actualHeight, alpha * (2 - alpha));
          const y = 50 - (lerpHeight * 50);

          return (
            <line
              x1={x}
              x2={x}
              y1={50}
              y2={y}
              className="kompis-bar"
              key={i}
            />
          );
        })}
      </svg>
    );
  }
}
