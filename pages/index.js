import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Router from "next/router";
import Head from "next/head";
import { Link as StyledLink } from "../components/Link";
import { Link } from "../routes";
import marked from "marked";
import products from "../products";
import Layout from "../components/Layout";
import map from "lodash/map";
import Button from "../components/Button";
import { Title, SubTitle, Body } from "../components/Text";
const capitalize = s => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

console.log(products);
const HomeContainer = styled.div`
  background: #fff;
  padding-top: 0px;
`;
const Hero = styled.div`
  text-align: center;

  padding: ${({ isTouch }) => (isTouch ? "20px" : "0")};
  margin: auto;
  margin-bottom: ${({ isTouch }) => (isTouch ? "20px" : "90px")};
  margin-top: 80px;
`;
const LessTitle = styled(Title)`
  font-size: 42px;
`;
const ProductContainer = styled.div`
  display: flex;
  justify-contents: start;
  flex-direction: row;
  width: 700px;
  margin-bottom: 140px;
`;
const ProductImage = styled.img`
  align-self: start;
  flex: 0 0 auto;
  width: 300px;

  border: 3px solid #ebebeb;
`;
const ProductSection = styled.div`
  flex: 1 1 auto;
  padding-left: 40px;
`;
const HeroLeft = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  width: ${({ isTouch }) => (isTouch ? "100%" : "700px")};
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
  // emf , deep sleep, mitochrondrial, red light, grounding
  // My friend and I are putting together list of unheard of health products. If you are interested in EMF, deep sleep, mitochrondria, red light and grounding etc, quickly check us out. We would love your feedback!
  return (
    <Layout user={user} auth={auth} isTouch={isTouch}>
      <Head>
        <title>
          Anthro Generator - A directory of unheard health problem solutions
        </title>
        <meta
          name="title"
          content="Anthro Generator - A directory of unheard health problem solutions"
        />
        <meta
          name="description"
          content="My friend and I are putting together list of unheard of health products. If you are interested in EMF, deep sleep, mitochrondria, red light and grounding etc, quickly check us out. We would love your feedback!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anthrogenerator.com/" />
        <meta property="og:title" content="Anthro Generator" />
        <meta
          property="og:description"
          content="My friend and I are putting together list of unheard of health products. If you are interested in EMF, deep sleep, mitochrondria, red light and grounding etc, quickly check us out. We would love your feedback!"
        />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://anthrogenerator.com/" />
        <meta property="twitter:title" content="Anthro Generator" />
        <meta
          property="twitter:description"
          content="My friend and I are putting together list of unheard of health products. If you are interested in EMF, deep sleep, mitochrondria, red light and grounding etc, quickly check us out. We would love your feedback!"
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
      </Head>
      <HomeContainer>
        <Hero isTouch={isTouch} style={{ paddingTop: isTouch ? "40px" : "0" }}>
          <HeroLeft isTouch={isTouch}>
            <TagLine>
              <Title>Anthro Generator</Title>
              <TagLineSpacer />
            </TagLine>
            <Body>
              We are just two average Australian guys who grew up rural but now
              living in the big city of Melbourne, Australia. Dissatisfied with
              our own health and everything that is promoted, we decided to
              research as many alternative health related products as possible.
              <br />
              <br />
              We personally try to own the products listed, but if we don't, we
              feel like we've made a fair judgement based off comparisons,
              legitimacy and scientific backing. Regardless, if the product is
              not the best, we hope at least to educate people about the many
              potential hazardous impacts of modern life and cool solutions
              people have manufactured.
              <br />
              <br />
              We aren't affiliated with any of the listed products but have
              included our own Amazon referral link.
            </Body>
            <br />
            {false && (
              <Buttons>
                <HomeButton
                  onClick={() => {
                    Router.push("/signup");
                  }}
                >
                  SUGGESTIONS
                </HomeButton>
              </Buttons>
            )}
          </HeroLeft>
          {!isTouch && <HeroRight isTouch={isTouch}></HeroRight>}
        </Hero>
        {true && (
          <TagLine>
            <LessTitle>Research</LessTitle>
            <TagLineSpacer />
          </TagLine>
        )}

        {map(products, p => {
          console.log(p.Images);
          const rege = RegExp("https://.*((.*))", "g");
          if (!p.Images) {
            return null;
          }
          console.log(p.Images);
          const imgMatch = rege.exec(p.Images);
          if (!imgMatch) {
            return null;
          }
          console.log(imgMatch);
          const imgUrl = imgMatch[0].substr(0, imgMatch[0].length - 1);
          if (p.Description === "" || !p.Description) {
            return null;
          }
          return (
            <ProductContainer>
              <ProductImage
                src={
                  "https://res.cloudinary.com/dx2clxwoo/image/fetch/w_400,c_fit,q_100,e_saturation:80/" +
                  p.Images
                }
              />
              <ProductSection>
                <SubTitle>{p.Name}</SubTitle>
                <br />
                <Body>
                  <strong>Price: </strong>~{p.Price}
                </Body>
                <br />
                <Body>
                  <strong>Category: </strong>
                  {capitalize(p.Category)}
                </Body>
                <br />
                <Body
                  dangerouslySetInnerHTML={{ __html: marked(p.Description) }}
                ></Body>
                <br />
                <StyledLink href={p.Link + "&tag=anthrogenerat-20"} passHref>
                  Amazon
                </StyledLink>
              </ProductSection>
            </ProductContainer>
          );
        })}
      </HomeContainer>
    </Layout>
  );
};
