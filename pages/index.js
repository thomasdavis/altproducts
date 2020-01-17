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
        <title>Jaresume - The platform for professionals to network</title>
      </Head>
      <HomeContainer>
        <Hero isTouch={isTouch} style={{ paddingTop: isTouch ? "40px" : "0" }}>
          <HeroLeft isTouch={isTouch}>
            <TagLine>
              <Title>
                The platform for
                <br />professionals to network{" "}
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
        <Hero isTouch={isTouch}>
          <HeroLeft isTouch={isTouch}>
            <TagLine>
              <Title>
                Our
                <br />Principles
              </Title>
              <TagLineSpacer />
            </TagLine>
            <Buttons>
              <HomeButton
                onClick={() => {
                  Router.push("/browse");
                }}
              >
                Browse the community
              </HomeButton>
            </Buttons>
          </HeroLeft>
          <HeroRight isTouch={isTouch}>
            <BulletPoints isTouch={isTouch}>
              <li>You own your data, import/export anytime</li>
              <li>No spam</li>
              <li>Networking should be enjoyable</li>
              <li>We will listen to our users</li>
              <li>Genuine two-way trust</li>
              <li>Privacy</li>
            </BulletPoints>
          </HeroRight>
        </Hero>
        <Hero isTouch={isTouch}>
          <HeroLeft isTouch={isTouch}>
            <TagLine>
              {" "}
              <Title>
                The
                <br />Features
              </Title>
              <TagLineSpacer />
            </TagLine>
            <Buttons>
              <SubTitle style={{ textAlign: "left", fontWeight: "400" }}>
                We will build this product maintaining a strict minimalism,
                focusing on what is important, and suggestions from our
                community.
              </SubTitle>
            </Buttons>
          </HeroLeft>
          <HeroRight isTouch={isTouch}>
            <BulletPoints isTouch={isTouch}>
              <li>Connect with people you know</li>
              <li>Public profile (configurable visibility)</li>
              <li>Your contact information is only available to connections</li>
              <li>A slick address book</li>
              <li>Periodic email backups of your data</li>
              <li>Fast and convenient apps for networking events</li>
            </BulletPoints>
          </HeroRight>
        </Hero>
        <Hero
          isTouch={isTouch}
          style={{ marginBottom: isTouch ? "0" : "40px" }}
        >
          <HeroLeft isTouch={isTouch}>
            <TagLine>
              <Title>
                Our
                <br />Vision
              </Title>
              <TagLineSpacer />
            </TagLine>
          </HeroLeft>
          {!isTouch && <HeroRight isTouch={isTouch}>&nbsp;</HeroRight>}
        </Hero>
        <BelowHero isTouch={isTouch}>
          <SubTitle>
            How do you currently maintain your professional network?
          </SubTitle>
          <br />
          <br />
          <Body>
            The most common answer will be LinkedIn, but who has many nice
            things to say about them? They value recruiters over candidates.
            Have you ever wanted to browse people you have connected with over
            the years and been frustrated by a clunky interface? Have you ever
            wanted to see what your connections are saying about the industry,
            but struggled to find their opinions in the sea of spam that is
            LinkedIn? We aren’t haters, but they have really dropped their game.
          </Body>
          <br />
          <br />
          <br />

          <SubTitle>How often have you lost your resume?</SubTitle>
          <br />
          <br />
          <Body>
            Our platform will email it to you periodically as a backup in an
            open standard called JSON Resume which you can take to any other
            service or maintain by yourself.
          </Body>
          <br />
          <br />
          <br />

          <SubTitle>
            How do you connect with a new professional acquaintance?
          </SubTitle>
          <br />
          <br />
          <Body>
            {" "}
            Facebook, Instagram, Twitter? LinkedIn was supposed to be the answer
            but who even uses their app? Why is it so hard to just get your
            phone out and quickly add someone to your professional network? User
            experience will be one of our main focuses.
          </Body>
          <br />
          <br />
          <br />
          <SubTitle>
            Tired of always filling out your professional history?
          </SubTitle>
          <br />
          <br />
          <Body>
            Jaresume relies on an open community based specification of which we
            will encourage development and invest our time into as we believe it
            to be a net positive for the world. If all services agree to use the
            format, you could just upload the file any time a service needs your
            data.
          </Body>
          <br />
          <br />
          <br />
          <SubTitle>How do we make money?</SubTitle>
          <br />
          <br />
          <Body>
            We have a few cool ideas up our sleeves which we will elaborate on
            at a future date, and we believe it is honest to state we will most
            likely explore traditional revenue models. That being said, we won’t
            stray from our principles. Please join our discussion board and
            suggest your ideas too.
          </Body>
          <br />
          <br />
          <br />
        </BelowHero>
      </HomeContainer>
    </Layout>
  );
};
