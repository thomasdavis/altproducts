import { Component } from "react";
import * as algoliasearch from "algoliasearch";
import map from "lodash/map";
import styled from "styled-components";
import gravatar from "gravatar";

import { Link } from "../../routes";

const UserCard = styled.a`
  background: #fff;
  border: 1px solid ${({ theme }) => theme.color.yellow.lighten(0.4).toString()};
  border-radius: 2px;
  margin-bottom: 20px;
  width: 100%;
  cursor: pointer;
  display: flex;
  color: #444;
  text-decoration: none;
  :hover {
    background: ${({ theme }) => theme.color.yellow.lighten(0.4).toString()};
  }
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
`;
const Info = styled.div`
  padding: 17px;
`;
const Name = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const Label = styled.div``;
export default class Browse extends Component {
  render() {
    const { user } = this.props;

    const username = user.username || user.objectID; // need to sync username to algolia
    let resume;
    if (typeof user.resume === "string") {
      try {
        resume = JSON.parse(user.resume);
      } catch (err) {}
    } else {
      resume = user.resume;
    }
    if (!resume.basics) {
      return null;
    }

    return (
      <Link
        prefetch
        route="profile"
        params={{ username }}
        passHref
        key={username}
      >
        <UserCard>
          <Avatar src={gravatar.url(resume.basics.email)} />
          <Info>
            <Name>{resume.basics.name}</Name>
            <Label>{resume.basics.label}</Label>
          </Info>
        </UserCard>
      </Link>
    );
  }
}
