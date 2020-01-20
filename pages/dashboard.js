import { Component } from "react";
import axios from "axios";
import map from "lodash/map";
import filter from "lodash/filter";
import styled from "styled-components";
import Head from "next/head";

import { Link } from "../components/Link";
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
justify-content: space-evenly;
width: 600px;
`;
const KycBox = styled.div`
  width: 120px;
  height: 120px;
  background: grey;
  border-radius: 6px;

`;
export default class Dashboard extends Component {
  render() {
    const { auth, user, isTouch } = this.props;

    return (
      <Layout isTouch={isTouch} auth={auth} user={user}>
        {isTouch && <TouchDashboard auth={auth} user={user} />}
        {!isTouch && (
          <DashboardContainer>
          <KycBoxContainer>
          <KycBox>                      <Icon icon="Print" />
</KycBox>
          <KycBox>                      <Icon icon="Print" />
</KycBox>
          <KycBox>                      <Icon icon="Print" />
</KycBox>
          </KycBoxContainer>
            asdasds
          </DashboardContainer>
        )}
      </Layout>
    );
  }
}
