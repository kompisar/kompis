import React from 'react';
import {Menu} from 'semantic-ui-react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      explode: false,
    };
  }

  render() {
    const activeItem = 'home';
    const purple = <Backploder explode={this.state.explode} />
    return (
      <main>
        <Menu className="animated infinite bounce" color="blue" inverted widths={3}>
          <Menu.Item name="home" active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name="saving" active={activeItem === 'saving'} onClick={this.handleItemClick} />
          <Menu.Item name="friends" active={activeItem === 'friends'} onClick={this.handleItemClick} />
        </Menu>
        <button onClick={() => this.setState({explode: true})}>Kikkeli</button>
        {purple}
      </main>
    );
  }
}
