/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { random, uniqueId } from 'lodash';


export default class ParticleVerse extends React.Component {
  constructor(props) {
    super(props);
    const particles = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: random(-30, 30, true),
        y: random(-50, 50, true),
        z: random(0, 20, true),
        r: random(-50, 50, true),
        dr: random(-5, 5, true),
        opacity: 0,
        id: uniqueId(),
      });
    }

    this.state = {
      particles,
    };
    this.doTick = false;
  }

  componentDidMount() {
    this.doTick = true;
    this.lastFrameTime = null;
    requestAnimationFrame(this.tick);
  }

  componentWillUnmount() {
    this.doTick = false;
  }


  tick = (time = 0) => {
    if (!this.doTick) {
      return;
    }
    const delta = (this.lastFrameTime !== null ? time - this.lastFrameTime : 0) / 50;
    this.lastFrameTime = time;
    const particles = this.state.particles;
    particles.forEach((p) => {
      p.y += delta;
      p.r += p.dr * delta;
      p.opacity += delta * 0.1;
      if (p.y > 150) {
        p.y -= 200;
        p.opacity = 0;
      }
    });
    this.setState({ particles });
    if (this.doTick) {
      requestAnimationFrame(this.tick);
    }
  }

  render() {
    return (
      <div className="particleverse">
        {this.state.particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              transform: `translate3d(${p.x}vw, ${p.y}vw, ${p.z}vw) rotateZ(${p.r}deg)`,
              opacity: p.opacity,
            }}
          >
            {this.props.component(p)}
          </div>
        ))}
      </div>
    );
  }
}
