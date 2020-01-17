import { Component } from "react";
import styled from "styled-components";

import { Link } from "../../routes";
import Icon from "../../components/Icon";

const MenuContainer = styled.div`
  color: white;
  margin-right: 10px;
  position: relative;
`;

const Menu = styled.div`
  background: ${({ theme }) => theme.color.black.toString()};
  position: fixed;
  left: 0;
  top: 50px;
  width: 100vw;
  height: calc(100vh - 50px);
  z-index: 10000;
`;

const IconContainer = styled.div``;

const MenuItem = styled.div`
  background: ${({ theme }) => theme.color.black.toString()};
  padding: 20px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  :visited {
    color: #fff;
  }
`;

export default class TouchMenu extends Component {
  state = {
    open: false
  };
  toggleMenu = () => {
    this.setState({
      open: !this.state.open
    });
  };
  render() {
    const { open } = this.state;
    const { auth } = this.props;
    return (
      <MenuContainer>
        <IconContainer onClick={this.toggleMenu}>
          <Icon width="18px" icon="Hamburger" />
        </IconContainer>
        {open && (
          <Menu>
            {auth && (
              <Link to="logout" passHref>
                <MenuItem>Logout</MenuItem>
              </Link>
            )}
            {!auth && (
              <Link to="/" passHref>
                <MenuItem>Home</MenuItem>
              </Link>
            )}
            {!auth && (
              <Link to="login" passHref>
                <MenuItem>Login</MenuItem>
              </Link>
            )}
            {!auth && (
              <Link to="signup" passHref>
                <MenuItem>Signup</MenuItem>
              </Link>
            )}
          </Menu>
        )}
      </MenuContainer>
    );
  }
}
