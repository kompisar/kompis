import React from 'react';
import {Menu} from 'semantic-ui-react';

export default class App extends React.Component {
  render() {
    const activeItem = 'home';
    return (
      <main>
        <Menu className="animated infinite bounce" color="blue" inverted widths={3}>
          <Menu.Item name="home" active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name="saving" active={activeItem === 'saving'} onClick={this.handleItemClick} />
          <Menu.Item name="friends" active={activeItem === 'friends'} onClick={this.handleItemClick} />
        </Menu>
      </main>
    );
  }
}
