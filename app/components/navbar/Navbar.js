import React from 'react';
import { Route, Redirect } from 'react-router';
import { Link } from 'react-router';
import { Input, Menu } from 'semantic-ui-react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      view: "home"
    }
  }
  handleClick(e, data) {
    this.setState({
      view: data.name
    });
  }
  render() {
    const activeItem = this.state.view
    return (
      <Menu secondary>
        <Menu.Item as={Link} to='home' name='home' active={activeItem === 'home'} onClick={this.handleClick} />
        <Menu.Item as={Link} to='directory' name='directory'active={activeItem === 'directory'} onClick={this.handleClick} />
        <Menu.Item as={Link} to='howto' name='how-to'active={activeItem === 'how-to'} onClick={this.handleClick} />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Navbar;
