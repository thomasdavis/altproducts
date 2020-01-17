import styled from "styled-components";
import map from "lodash/map";
import { Title, SubTitle, Body } from "../Text";
import { Link } from "../Link";
import { Link as AppLink } from "../../routes";
import Icon from "../Icon";
import gravatar from "gravatar";
const Basics = styled.div`
  position: relative;
`;
const Name = styled.div`
  font-size: 30px;
  margin-bottom: 10px;
`;
const Label = styled(SubTitle)`
  font-size: 20px;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;
const Summary = styled.div`
  font-size: 18px;
`;
const Avatar = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 140px;
  position: absolute;
  left: -186px;
  top: -10px;
`;

const ContactContainer = styled.div`
  display: flex;
  margin-top: 40px;
`;

const SocialContainer = styled.div`
  flex: 1 1 auto;
`;

const EmailContainer = styled.div`
  flex: 1 1 auto;
  text-align: center;
`;
const PhoneContainer = styled.div`
  flex: 1 1 auto;
  text-align: right;
`;

const SocialIcon = styled(Icon)`
  color: ${({ theme }) => theme.color.yellow.toString()};
  cursor: pointer;
  :hover {
    filter: brightness(0.2) sepia(1) hue-rotate(180deg) saturate(5);
  }
  margin-right: 15px;
`;

export default ({ basics, gravatar, contact, isOwner }) => {
  const { name, label, summary, email, location, profiles } = basics;
  console.log("basics", profiles);
  console.log("basics", basics);
  return (
    <Basics>
      <Avatar src={gravatar} />
      <Name>
        <Title style={{ fontSize: "44px" }}>{name}</Title>
      </Name>
      <Label>{label}</Label>
      <Label>{location && location.city}</Label>
      <br />
      <Summary>
        <Body>{summary}</Body>
      </Summary>
      <ContactContainer>
        <SocialContainer>
          {" "}
          {map(profiles, profile => {
            if (profile.network === "twitter") {
              return (
                <AppLink href={profile.url}>
                  <a target="_blank">
                    <SocialIcon width="18px" icon="Twitter" />
                  </a>
                </AppLink>
              );
            }
            if (profile.network === "linkedin") {
              return (
                <AppLink href={profile.url} target="_blank">
                  <a target="_blank">
                    <SocialIcon width="18px" icon="Linkedin" />
                  </a>
                </AppLink>
              );
            }
            if (profile.network === "github") {
              return (
                <AppLink href={profile.url} target="_blank">
                  <a target="_blank">
                    <SocialIcon width="18px" icon="Github" />
                  </a>
                </AppLink>
              );
            }
            if (profile.network === "facebook") {
              return (
                <AppLink href={profile.url} target="_blank">
                  <a target="_blank">
                    <SocialIcon width="18px" icon="Facebook" />
                  </a>
                </AppLink>
              );
            }
            return null;
          })}
        </SocialContainer>
        <EmailContainer>
          {!isOwner &&
            contact &&
            contact.email && (
              <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
            )}
        </EmailContainer>
        <PhoneContainer>
          {" "}
          {!isOwner && contact && contact.phone && <span>{contact.phone}</span>}
        </PhoneContainer>
      </ContactContainer>
    </Basics>
  );
};
