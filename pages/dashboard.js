import { Component } from "react";
import axios from "axios";
import map from "lodash/map";
import filter from "lodash/filter";
import styled from "styled-components";
import Head from "next/head";
import { Link } from "../routes";

import Input from "../components/Input";
import Button from "../components/Button";
import Icon from "../components/Icon";
import config from "../config";
import Layout from "../components/Layout";
import { Title, SubTitle, Body } from "../components/Text";
import UserCard from "../components/UserCard";
import TouchDashboard from "../components/Dashboard";

const DashboardContainer = styled.div`
  padding-top: 80px;
  width: 1040px;
  margin: auto;
`;
const KycBoxContainer = styled.div`
  display: flex;
  width: 600px;
  margin-top: 40px;
  margin-bottom: 40px;
`;
const KycTip = styled(Body)`
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: opacity 0.1s linear;
`;
const KycBox = styled.div`
  width: 120px;
  height: 120px;
  margin-right: 40px;
  background: grey;
  border-radius: 6px;
  background: ${({ theme, disabled }) => {
    if (disabled) {
      return theme.color.red.toString();
    } else {
      return theme.color.red.toString();
    }
  }};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  &:hover {
    &:hover ${KycTip} {
      opacity: 0.7;
    }
  }
`;
const KycLabel = styled(Body)`
  /* position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
  left: 0; */
`;
const Table = styled.table``;
const Row = styled.tr``;
const Column = styled.td``;

export default class Dashboard extends Component {
  render() {
    const { auth, user, isTouch } = this.props;

    return (
      <Layout isTouch={isTouch} auth={auth} user={user}>
        {isTouch && <TouchDashboard auth={auth} user={user} />}
        {!isTouch && (
          <DashboardContainer>
            <Title>Identity Verification</Title>
            <Body>
              Before continuing on the platform we need to prove your identity
            </Body>
            <KycBoxContainer>
              <Link href="/sms" passHref>
                <KycBox>
                  {" "}
                  <Icon width="48px" icon="Phone" />
                  <KycLabel>Phone</KycLabel>
                  <KycTip>Start</KycTip>
                </KycBox>
              </Link>
              <KycBox>
                {" "}
                <Icon width="48px" icon="Home" />
                <KycLabel>Address</KycLabel>
                <KycTip>Start</KycTip>
              </KycBox>
              <KycBox>
                {" "}
                <Icon width="48px" icon="Person" />
                <KycLabel>Identity</KycLabel>
                <KycTip>Start</KycTip>
              </KycBox>
            </KycBoxContainer>
            {false && (
              <Table>
                <Row>
                  <Column>asdas</Column>
                  <Column>asdas</Column>
                  <Column>asdas</Column>
                  <Column>asdas</Column>
                  <Column>asdas</Column>
                </Row>
              </Table>
            )}
          </DashboardContainer>
        )}
      </Layout>
    );
  }
}
