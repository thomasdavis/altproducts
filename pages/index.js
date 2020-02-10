import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Router from "next/router";
import Head from "next/head";
import { Link } from "../routes";

import Layout from "../components/Layout";
import Button from "../components/Button";
import { Title, SubTitle, Body } from "../components/Text";

const HomeContainer = styled.div`
  background: #fff;
  padding-top: 0px;
`;
const Hero = styled.div`
  text-align: center;
  display: flex;

  justify-content: space-around;
  flex-direction: ${({ isTouch }) => (isTouch ? "column" : "row")};
  width: ${({ isTouch }) => (isTouch ? "100%" : "1000px")};
  padding: ${({ isTouch }) => (isTouch ? "20px" : "0")};
  margin: auto;
  margin-bottom: ${({ isTouch }) => (isTouch ? "20px" : "40px")};
  margin-top: 80px;
`;
const ProductContainer = styled.div`
  display: flex;
`;
const ProductImage = styled.img``;
const ProductSection = styled.div`
  padding-left: 40px;
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
const HeroImage = styled.img`
  width: 200px;
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
              <Title>Pro Choice Products</Title>
              <TagLineSpacer />
            </TagLine>
            <Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum placerat ipsum nec sem congue, ut tempus elit volutpat.
              Nunc fringilla, elit nec rhoncus tempor, magna nunc mollis turpis,
              ullamcorper semper sapien tellus sed orci.
              <br />
              Donec sit amet scelerisque urna, vitae vulputate erat. Donec
              semper faucibus turpis, sit amet scelerisque magna eleifend eget.
              Praesent at gravida odio.
            </Body>
            <br />
            <Buttons>
              <HomeButton
                onClick={() => {
                  Router.push("/signup");
                }}
              >
                SUBSCRIBE
              </HomeButton>
            </Buttons>
          </HeroLeft>
          {!isTouch && (
            <HeroRight isTouch={isTouch}>
              <HeroImage src="/static/fabian.png" />
            </HeroRight>
          )}
        </Hero>
        <TagLine>
          <Title>Sleep</Title>
          <TagLineSpacer />
        </TagLine>
        <ProductContainer>
          <ProductImage
            src={`https://picsum.photos/id/237/300/200?a=${Math.random()}`}
          />

          <ProductSection>
            <SubTitle>EMF Dog Worms</SubTitle>
            <br />
            <Body>
              <strong>~$120</strong>
            </Body>
            <br />
            <Body>
              Nam bibendum malesuada diam vitae porta. Curabitur aliquam mi
              mattis, porta odio vel, auctor ligula. Vivamus quis ipsum ut est
              ultricies venenatis accumsan id ipsum. Curabitur eu posuere magna.
              Proin eu purus vitae nunc posuere aliquet. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos.
            </Body>
            <br />
            <Link href="/dashboard" passHref>
              Amazon
            </Link>
          </ProductSection>
        </ProductContainer>
      </HomeContainer>
    </Layout>
  );
};
