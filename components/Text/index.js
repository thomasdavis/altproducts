import styled from "styled-components";

const TitleText = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.heading};
  font-size: ${({ theme }) => theme.fontSize.title};
  line-height: ${({ theme }) => theme.lineHeight.title};
  letter-spacing: -0.01em;
`;
export const Title = props => {
  const { children } = props;
  return <TitleText {...props}>{children}</TitleText>;
};

const SubTitleText = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.heading};
  font-size: ${({ theme }) => theme.fontSize.subTitle};
  line-height: ${({ theme }) => theme.lineHeight.subTitle};
  font-weight: 600;
`;
export const SubTitle = props => {
  const { children } = props;
  return <SubTitleText {...props}>{children}</SubTitleText>;
};

const BodyText = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.body};
  line-height: ${({ theme }) => theme.lineHeight.body};
  letter-spacing: -0.009em;
  text-rendering: optimizeLegibility;
  text-align: left;
`;
export const Body = props => {
  const { children } = props;
  return <BodyText {...props}>{children}</BodyText>;
};
