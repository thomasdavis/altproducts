import styled from "styled-components";
import { Title, SubTitle } from "../Text";
const SectionContainer = styled.div`
  position: relative;
`;

const FloatingLabel = styled(SubTitle)`
  position: absolute;
  right: 829px;
  top: 91px;
  ${"" /* font-size: 40px; */}
  ${"" /* font-weight: 600; */}
  ${
    "" /* color: ${({ theme }) => theme.color.yellow.darken(0.7).toString()}; */
  };
`;
const LabelContainer = styled.div`
  position: relative;
  height: 90px;
  ${"" /* :after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    top: 32px;
    left: 0;
    background: ${({ theme }) => theme.color.yellow.lighten(0.4).toString()};
    z-index: 1;
  } */};
`;
const Label = styled(Title)`
  margin-bottom: 60px;
  position: absolute;
  top: 0;
  left: 0;
  padding-right: 20px;
  z-index: 2;
  display: inline-block;
  background: #fff;
  font-size: 40px;
`;
// position: relative;
// :before {
//   content: "";
//   position: absolute;
//   left: 0;
//   bottom: 0;
//   width: 100%;
//   border-bottom: 5px solid ${({ theme }) => theme.color.grey.toString()};
//   z-index: -1;
// }
const Content = styled.div``;

export const Section = props => {
  return (
    <SectionContainer>
      <LabelContainer>
        <FloatingLabel>{props.label}</FloatingLabel>
      </LabelContainer>
      <Content>{props.children}</Content>
    </SectionContainer>
  );
};
