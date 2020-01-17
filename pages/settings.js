import { Component } from "react";
import map from "lodash/map";
import styled from "styled-components";
import gravatar from "gravatar";
import axios from "axios";
import Head from "next/head";

import config from "../config";
import { Link } from "../routes";
import Layout from "../components/Layout";
import Input from "../components/Input";
import UserCard from "../components/UserCard";
import { Title, SubTitle } from "../components/Text";
import DeleteAccount from "../components/DeleteAccount";
import ChangePassword from "../components/ChangePassword";

const ConnectionsContainer = styled.div`
  width: 500px;
  margin: auto;
  padding-top: 80px;
  padding-bottom: 200px;
`;

export default class Connections extends Component {
  state = { connections: [] };
  async componentDidMount() {
    const response = await axios({
      url: config.api.host + "/connection",
      withCredentials: true
    });
    if (!response.data.error) {
      this.setState({
        connections: response.data
      });
    }
  }
  render() {
    const { auth, user, isTouch, checkAuth } = this.props;
    const { connections } = this.state;
    return (
      <Layout auth={auth} user={user} isTouch={isTouch}>
        <Head>
          <title>Settings - Jaresume</title>
        </Head>
        <ConnectionsContainer>
          <br />
          <br />
          <Title>Settings</Title>
          <br />
          <br />
          <SubTitle>Change Password</SubTitle>
          <ChangePassword checkAuth={checkAuth} user={user} />
          <br />
          <br />
          <br />
          <SubTitle>Delete Account</SubTitle>
          <DeleteAccount checkAuth={checkAuth} user={user} />
        </ConnectionsContainer>
      </Layout>
    );
  }
}
