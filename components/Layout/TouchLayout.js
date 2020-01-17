import styled from "styled-components";
import { Body } from "../../components/Text";
import { Link } from "../../components/Link";
import TouchLayout from "../../components/Layout";
import TouchMenu from "../../components/Menu/TouchMenu";
const TouchContainer = styled.div`
  background: ${({ theme, auth }) =>
    !auth ? theme.color.white.toString() : theme.color.yellow.toString()};
  width: 100vw;
  height: 100vh;
  transition: background 1s;
`;
const Header = styled.div`
  height: 50px;
  font-size: 20px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  flex: 0 0 auto;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1000000;

  background: ${({ theme, auth }) => theme.color.yellow.toString()};
`;

const Logo = styled.div`
  color: white;
  background: ${({ theme }) => theme.color.black.toString()};
  padding-left: 10px;
  padding-right: 10px;
`;

const Content = styled.div`
  padding-top: 50px;
  height: 100%;
`;

export default ({ children, auth, user, background }) => {
  return (
    <TouchContainer auth={auth}>
      <Header auth={auth}>
        <Link to={auth ? "dashboard" : "/"}>
          <Logo>JARESUME</Logo>
        </Link>
        <TouchMenu auth={auth} />
      </Header>
      <Content>{children}</Content>
    </TouchContainer>
  );
};
