import { Link } from "../../routes";
import styled from "styled-components";

const Menu = styled.div`
  display: flex;
  line-height: 50px;
  width: 600px;
  align-content: flex-start;
  margin-right: 20px;
  justify-content: flex-end;
`;
const MenuItem = styled.a`
  color: blue;
  font-size: 18px;
  flex: 0 0 auto;
  text-decoration: none;
  justify-content: space-around;
  margin: 0 10px;
  color: ${({ theme }) => theme.color.black.toString()};
  :hover {
    color: ${({ theme }) => theme.color.black.toString()};
  }
`;
const Logo = styled.div``;
export default props => {
  const { auth, user } = props;
  if (auth) {
    return (
      <Menu>
        <Link prefetch route="dashboard" passHref>
          <MenuItem>Dashboard</MenuItem>
        </Link>

        <Link prefetch route="chat" passHref>
          <MenuItem>Chat</MenuItem>
        </Link>
        <Link prefetch route="browse" passHref>
          <MenuItem>Browse</MenuItem>
        </Link>
        <Link
          prefetch
          route="profile"
          params={{ username: user.username || "na" }}
          passHref
        >
          <MenuItem>Profile</MenuItem>
        </Link>
        <Link prefetch route="connections" passHref>
          <MenuItem>Connections</MenuItem>
        </Link>

        <Link prefetch route="settings" passHref>
          <MenuItem>Settings</MenuItem>
        </Link>
        <Link prefetch route="logout" passHref>
          <MenuItem>Logout</MenuItem>
        </Link>
      </Menu>
    );
  } else {
    return (
      <Menu>
        
        <Link prefetch route="login" passHref>
          <MenuItem>Login</MenuItem>
        </Link>
        <Link prefetch route="signup" passHref>
          <MenuItem>Signup</MenuItem>
        </Link>
      </Menu>
    );
  }
};
