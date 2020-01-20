import styled from "styled-components";
import Menu from "../../components/Menu";
import { Body } from "../../components/Text";
import { Link } from "../../routes";
import TouchLayout from "./TouchLayout";
const Header = styled.div`
  background: ${({ theme }) => theme.color.grey.toString()};
  display: flex;
  height: 50px;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
`;

const Logo = styled.a`
  background: ${({ theme }) => theme.color.black.toString()};
  flex: 0 0 auto;
  line-height: 50px;
  display: block;
  font-weight: bold;
  padding: 0 20px;
  text-decoration: none;
  border-right: 10px solid ${({ theme }) => theme.color.yellow.toString()};
  color: ${({ theme }) => theme.color.white.toString()};
  font-family: ${({ theme }) => theme.fontFamily.heading};
  letter-spacing: 1px;
  font-weight: 600;
  :visited {
    color: ${({ theme }) => theme.color.white.toString()};
  }
  :active {
    color: ${({ theme }) => theme.color.white.toString()};
  }
  :hover {
    color: ${({ theme }) => theme.color.yellow.toString()};
  }
`;
const Container = styled.div`
  display: flex;
  min-height: 100%;
`;
const ContentContainer = styled.div`
  min-height: 100%;
  background: ${p => p.background};
`;
const SideMenuContainer = styled.div`
  background: rgb(247,208,81);
  padding-top: 80px;
`;

const SideMenu = styled.div`
  width: 200px;
  padding: 20px;
`;
const SideMenuItem = styled.div`
background: black;
padding: 10px;
  color: white;
  text-align: center;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    color: rgb(247,208,81);
    background: #222;
  }
`
const Content = styled.div`
  height: 100%;
  background: ${p => p.background};
`;

const Footer = styled.div`
  flex-shrink: 0;
  background: ${({ theme }) => theme.color.grey.toString()};
  color: ${({ theme }) => theme.color.grey.darken(0.5).toString()};
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
`;

const FooterLinks = styled.div`
  display: flex;
`;

export default ({ children, auth, user, background, isTouch }) => {
  if (auth === null) {
  }
  console.log(isTouch);
  if (isTouch) {
    return (
      <TouchLayout
        children={children}
        auth={auth}
        user={user}
        background={background}
      />
    );
  }
  return (
    <div>
      <Header>
        <Link href="/" passHref>
          <Logo>REMITTANCE </Logo>
        </Link>

        <Menu auth={auth} user={user} />
      </Header>
      <Container>
      {auth && <SideMenuContainer>
        <SideMenu>
        <SideMenuItem>Dashboard</SideMenuItem>
        <SideMenuItem>Transfers</SideMenuItem>
        <SideMenuItem>Documents</SideMenuItem>
          <SideMenuItem>History</SideMenuItem>
        </SideMenu>
      </SideMenuContainer>}
      <ContentContainer background={background || "#fff"}>
        {children}
        {/* <Footer>
          <Body
            style={{ lineHeight: "30px", marginLeft: "20px", fontSize: "14px" }}
          >
            Copyright 2018 © All rights reserved - JARESUME - Designed by{" "}
            <Link to="https://perceptiondesign.com">Perception Design</Link>
          </Body>
          <FooterLinks> */}
        {/* <Body
              style={{
                lineHeight: "30px",
                marginRight: "20px",
                fontSize: "14px"
              }}
            >
              <Link
                style={{
                  marginRight: "20px"
                }}
                to="https://perceptiondesign.com"
              >
                Privacy
              </Link>
            </Body> */}
        {/* <Body
              style={{
                lineHeight: "30px",
                marginRight: "20px",
                fontSize: "14px"
              }}
            >
              <Link to="https://perceptiondesign.com">Terms</Link>
            </Body> */}
        {/* </FooterLinks>
        </Footer> */}
      </ContentContainer>
      </Container>

    </div>
  );
};
