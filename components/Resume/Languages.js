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

const Point = styled.div``;
export default ({ languages }) => {
  if (!languages) {
    return null;
  }
  if (languages.length === 0) {
    return null;
  }
  return (
    <Section label="Languages">
      <SkillsContainer>
        {map(languages, l => {
          const { language, fluency } = l;
          return (
            <SkillContainer>
              <Name>{language}</Name>
              <Reference>{fluency}</Reference>
              <div style={{ clear: "both" }} />
            </SkillContainer>
          );
        })}
        <div style={{ clear: "both" }} />
      </SkillsContainer>
    </Section>
  );
};
