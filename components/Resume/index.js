import styled from "styled-components";

import Basics from "./Basics";
import Work from "./Work";
import Education from "./Education";
import References from "./References";
import Skills from "./Skills";
import Interests from "./Interests";
import Languages from "./Languages";
import Awards from "./Awards";
import Volunteer from "./Volunteer";
import Publications from "./Publications";

const Resume = styled.div`
  width: ${({ isTouch }) => (isTouch ? "100%" : "100%")};
  margin: auto;
  padding: ${({ isTouch }) => (isTouch ? "20px" : "0 0 300px 0")};
  background: #fff;
  ${"" /* padding: 20px 20px 300px 20px; */} ${"" /* box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15); */};
`;

export default props => {
  const { resume, isTouch, gravatar, contact, isOwner } = props;
  console.log(resume);
  const {
    username,
    basics,
    work,
    education,
    references,
    skills,
    interests,
    languages,
    awards,
    volunteer,
    publications
  } = resume;
  console.log("resume", contact, isOwner);
  console.log("resume", contact, isOwner);
  console.log("resume", contact, isOwner);
  return (
    <Resume isTouch={isTouch}>
      {basics && (
        <Basics
          username={username}
          isOwner={isOwner}
          contact={contact}
          gravatar={gravatar}
          basics={basics}
        />
      )}
      {work && <Work work={work} />}
      {volunteer && <Volunteer volunteer={volunteer} />}
      {education && <Education education={education} />}
      {publications && <Publications publications={publications} />}
      {awards && <Awards awards={awards} />}
      {languages && <Languages languages={languages} />}
      {skills && <Skills skills={skills} />}
      {interests && <Interests interests={interests} />}
      <br />
      <br />
      {references && <References references={references} />}
    </Resume>
  );
};
