import { Component } from "react";
import axios from "axios";
import map from "lodash/map";
import filter from "lodash/filter";
import styled from "styled-components";
import Head from "next/head";

import { Link } from "../components/Link";
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
const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`;
const Left = styled.div`
  flex: 0 0 auto;
  width: 500px;
  margin-right: 40px;
`;
const Right = styled.div`
  flex: 0 0 auto;
  width: 500px;
`;
const BulletPoints = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: left;
  padding-top: 20px;
  li {
    font-size: 18px;
    position: relative;
    :before {
      content: "";
      position: absolute;
      left: -16px;
      top: 9px;
      width: 8px;
      height: 8px;
      background: ${({ theme }) => theme.color.yellow.toString()};
    }
    margin-bottom: 10px;
  }
`;
const Point = styled.div``;
export default class Dashboard extends Component {
  render() {
    const { auth, user, isTouch } = this.props;

    return (
      <Layout isTouch={isTouch} auth={auth} user={user}>
        {isTouch && <TouchDashboard auth={auth} user={user} />}
        {!isTouch && (
          <DashboardContainer>
            asdasds
          </DashboardContainer>
        )}
      </Layout>
    );
  }
}
