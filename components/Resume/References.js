import map from "lodash/map";
import styled from "styled-components";
import { Title, SubTitle, Body } from "../Text";
import { Section } from "../Section";

const Name = styled(SubTitle)`
  margin-bottom: 10px;
`;

const Reference = styled(Body)`
  position: relative;
  margin-bottom: 50px;
  padding-left: 26px;
  margin-top: 20px;
  :before {
    content: "";
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    transition: all 0.5s;
    position: absolute;
    background-color: ${({ theme }) => theme.color.yellow.toString()};
  }
  :after {
    content: "";
    bottom: -20px;
    left: calc(50% - 50px);
    width: 100px;
    height: 2px;
    position: absolute;
    background-color: ${({ theme }) => theme.color.grey.toString()};
  }
  :hover {
    :before {
      background-color: ${({ theme }) => theme.color.yellow.toString()};
      height: 80%;
      width: 8px;
    }
  }
`;

export default ({ references }) => {
  if (!references) {
    return null;
  }
  if (references.length === 0) {
    return null;
  }
  return (
    <Section label="References">
      {map(references, ref => {
        const { reference, name } = ref;
        return (
          <div>
            <Name>{name}</Name>
            <Reference>{reference}</Reference>
          </div>
        );
      })}
    </Section>
  );
};
