import styled from "styled-components";
import map from "lodash/map";
import { Title, SubTitle, Body } from "../Text";
import { Section } from "../Section";
import { Link } from "../Link";

const Work = styled.div`
  position: relative;
`;
const Job = styled.div`
  margin-bottom: 50px;
`;
const JobSpacer = styled.div`
  width: 100px;
  height: 1px;
  background: #f1f1f1;
  margin: 30px auto;
`;
const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;
const JobCompany = styled(SubTitle)`
  ${"" /* font-family: ${({ theme }) => theme.fontFamily.body}; */} line-height: 26px;
`;
const JobPosition = styled(Body)`
  margin-bottom: 20px;
  ${"" /* font-weight: 600; */};
`;
const JobSummary = styled(Body)``;
const JobHighlights = styled.ul`
  list-style: square;
`;
const JobHighlight = styled.li``;
const JobDate = styled(Body)`
  color: ${({ theme }) => theme.color.black.lighten(1.1).toString()};
  font-weight: 600;
`;
const JobWebsite = styled.div`
  margin-bottom: 10px;
`;
export default ({ awards }) => {
  if (!awards) {
    return null;
  }

  if (awards.length === 0) {
    return null;
  }
  return (
    <Work>
      <Section label="Awards">
        {map(awards, award => {
          return (
            <Job>
              <JobHeader>
                <JobCompany>{award.title}</JobCompany>

                <JobDate>{award.date}</JobDate>
              </JobHeader>
              <JobPosition>{award.awarder}</JobPosition>
              <JobSummary>{award.summary}</JobSummary>
              <JobSpacer />
            </Job>
          );
        })}
      </Section>
    </Work>
  );
};

// company: "Mozilla Taiwan"
// endDate: "2017-10-31"
// highlights: (4) ["Fixed 36 issues and contributed 70 commits", "Browser download - show the download status of the file", "Use FileProvider to open file in the storage", "Use ContentProvider to control SQLite DB"]
// position: "Android developer(Contractor)"
// startDate: "2017-08-01"
// summary: "A Short-term contract. Make the project workable in the short term, and we deployed the app, FireFox Rocket, on November 8th. I contributed part in browser download, show the download file status, detect file in which storage, open file in corresponding APP and fix some issues"
// website: "https://github.com/mozilla-tw/Rocket"
// __proto__: Object
