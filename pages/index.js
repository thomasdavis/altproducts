import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Router from "next/router";
import Head from "next/head";

import Layout from "../components/Layout";
import Button from "../components/Button";
import { Title, SubTitle, Body } from "../components/Text";

const HomeContainer = styled.div`
  background: #fff;
  padding-top: 80px;
`;
const Hero = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ isTouch }) => (isTouch ? "column" : "row")};
  width: ${({ isTouch }) => (isTouch ? "100%" : "1000px")};
  padding: ${({ isTouch }) => (isTouch ? "20px" : "0")};
  margin: auto;
  margin-bottom: ${({ isTouch }) => (isTouch ? "20px" : "180px")};
`;
const HeroLeft = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  width: ${({ isTouch }) => (isTouch ? "100%" : "600px")};
  margin-right: ${({ isTouch }) => (isTouch ? "0" : "100px")};
  align-items: flex-start;
  justify-content: center;
`;
const HeroRight = styled.div`
  flex: 0 0 auto;
  width: ${({ isTouch }) => (isTouch ? "100%" : "400px")};
`;
const Dugong = styled.img`
  width: 250px;
  margin-bottom: 20px;
`;
const TagLine = styled.div`
  text-align: left;
  color: #252525;
  margin-bottom: 20px;
`;
const TagLineSpacer = styled.div`
  width: 280px;
  background: #ff5f5f;
  height: 3px;
  margin-top: 20px;
`;
const BulletPoints = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: left;
  padding: ${({ isTouch }) => (isTouch ? "20px" : "0")};
  width: ${({ isTouch }) => (isTouch ? "100%" : "100%")};
  margin-top: ${({ isTouch }) => (isTouch ? "0" : "100px")};

  li {
    font-size: 20px;
    position: relative;
    :before {
      content: "";
      position: absolute;
      left: -16px;
      top: 9px;
      width: 8px;
      height: 8px;
      background: ${({ theme }) => theme.color.yellow.toString()};
    }
    margin-bottom: 10px;
  }
`;
const Point = styled.div``;
const Buttons = styled.div`
  display: flex;
`;
const HomeButton = styled(Button)`
  margin-right: 20px;
`;
const Section = styled.div`
  margin: auto;
  width: 400px;
`;

const Answer = styled.div`
  margin-bottom: 50px;
`;
const BelowHero = styled.div`
  margin: auto;
  padding: ${({ isTouch }) => (isTouch ? "20px" : "0")};
  width: ${({ isTouch }) => (isTouch ? "100%" : "1000px")};
`;
export default props => {
  const { user, auth, isTouch } = props;
  return (
    <Layout user={user} auth={auth} isTouch={isTouch}>
      <Head>
        <title>Remittance - The platform for MONEY</title>
      </Head>
      <HomeContainer>
        <Hero isTouch={isTouch} style={{ paddingTop: isTouch ? "40px" : "0" }}>
          <HeroLeft isTouch={isTouch}>
            <TagLine>
              <Title>
                The platform for
                <br />MONEY{" "}
              </Title>
              <TagLineSpacer />
            </TagLine>
            <Buttons>
              <HomeButton
                onClick={() => {
                  Router.push("/signup");
                }}
              >
                SIGNUP
              </HomeButton>
              <HomeButton
                onClick={() => {
                  Router.push("/login");
                }}
              >
                LOGIN
              </HomeButton>
            </Buttons>
          </HeroLeft>
          {!isTouch && (
            <HeroRight isTouch={isTouch}>
              <img src="/static/hero.png" />
            </HeroRight>
          )}
        </Hero>

      </HomeContainer>
    </Layout>
  );
};
