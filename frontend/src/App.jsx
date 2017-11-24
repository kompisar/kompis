import React from 'react';
import {Helmet} from 'react-helmet';

export default class App extends React.Component {
  render() {
    return (
      <main>
        <Helmet>
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
          />
        </Helmet>
        <h1>Oispa kaljaa</h1>
      </main>
    );
  }
}
