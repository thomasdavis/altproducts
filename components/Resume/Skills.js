import map from "lodash/map";
import styled from "styled-components";
import { Title, SubTitle, Body } from "../Text";
import { Section } from "../Section";

const Name = styled(SubTitle)`
  margin-bottom: 10px;
`;

const Reference = styled(Body)`
  margin-bottom: 10px;
`;

const SkillsContainer = styled.div``;
const SkillContainer = styled.div`
  float: left;
  width: 50%;
  margin-bottom: 50px;
`;
const BulletPoints = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: left;
  li {
    font-size: 16px;
    position: relative;
    width: 100%;
    :before {
      content: "";
      position: absolute;
      left: -16px;
      top: 7px;
      width: 8px;
      height: 8px;
      background: ${({ theme }) => theme.color.yellow.toString()};
      transition: all 0.5s;
    }
    :hover {
      :before {
        width: 12px;
        height: 12px;
        left: -18px;
        top: 5px;
        background: ${({ theme }) => theme.color.yellow.darken(0.2).toString()};
      }
    }
    margin-bottom: 10px;
  }
`;
const Point = styled.div``;
export default ({ skills }) => {
  if (!skills) {
    return null;
  }
  if (skills.length === 0) {
    return null;
  }
  return (
    <Section label="Skills">
      <SkillsContainer>
        {map(skills, skill => {
          const { name, level, keywords } = skill;
          return (
            <SkillContainer>
              <Name>{name}</Name>
              <Reference>{level}</Reference>
              <BulletPoints>
                {map(keywords, keyword => {
                  return <li>{keyword}</li>;
                })}
              </BulletPoints>
              <div style={{ clear: "both" }} />
            </SkillContainer>
          );
        })}
        <div style={{ clear: "both" }} />
      </SkillsContainer>
    </Section>
  );
};
