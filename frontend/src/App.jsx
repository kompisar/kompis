import React from 'react';
import { Helmet } from 'react-helmet';
import { Menu } from 'semantic-ui-react';

export default class App extends React.Component {
  render() {
    const activeItem = 'home';
    return (
      <main>
        <Helmet>
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
          />
        </Helmet>
        <Menu color="blue" inverted widths={3}>
          <Menu.Item name="home" active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name="saving" active={activeItem === 'saving'} onClick={this.handleItemClick} />
          <Menu.Item name="friends" active={activeItem === 'friends'} onClick={this.handleItemClick} />
        </Menu>
      </main>
    );
  }
}
