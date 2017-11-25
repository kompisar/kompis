import React from 'react';

export default class Backploder extends React.Component {
    render() {
        return <div className={this.props.explode ? 'ball ball-explode' : 'ball'} />
    }
};
