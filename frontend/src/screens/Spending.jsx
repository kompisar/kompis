import React from 'react';
import { withRouter } from 'react-router-dom';
import { typeColors, typeTitles } from '../consts';

class Spending extends React.Component {
    render() {
        const type = this.props.match.params.id;
        console.log(type);
        const color = typeColors[type];
        const title = typeTitles[type];

        return (
            <div className={`spending-${color}`}>
                kikkeli
            </div>
        );
    }
}

export default withRouter(Spending);