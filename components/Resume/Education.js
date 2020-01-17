import map from "lodash/map";
import styled from "styled-components";
import { SubTitle, Title, Body } from "../Text";
import { Section } from "../Section";
export default ({ education }) => {
  if (!education) {
    return null;
  }
  if (education.length === 0) {
    return null;
  }
  return (
    <Section label="Education">
      {map(education, school => {
        const { endDate, startDate, area, studyType, institution } = school;
        return (
          <div>
            <SubTitle>{institution}</SubTitle>
            <Body style={{ marginBottom: "20px" }}>
              {area} - {studyType}
            </Body>
            <Body style={{ marginBottom: "30px" }}>
              {startDate} - {endDate}
            </Body>
          </div>
        );
      })}
    </Section>
  );
};
