import { Component } from "react";
import * as algoliasearch from "algoliasearch";
import map from "lodash/map";
import styled from "styled-components";
import gravatar from "gravatar";
import axios from "axios";
import Head from "next/head";

import config from "../config";
import { Link } from "../routes";
import Layout from "../components/Layout";
import Input from "../components/Input";
import Button from "../components/Button";
import UserCard from "../components/UserCard";
import { Title } from "../components/Text";

var client = algoliasearch("F1TM0UX9BN", "1b52b2b7dc3915bfef09fc5c1baf9104");
var index = client.initIndex("users");

const NewContactContainer = styled.div`
  width: 500px;
  margin: auto;
  padding-top: 80px;
`;

export default class NewContact extends Component {
  state = {
    email: "",
    name: "",
    tips: {}
  };
  createContact = async () => {
    const { email, name } = this.state;

    const tips = {};
    const response = await axios({
      url: config.api.host + "/connection/request/non_user",
      method: "POST",
      data: { email, name },
      withCredentials: true
    });
    console.log(response.data);
  };
  onChangeEmail = ev => {
    this.setState({ email: ev.target.value });
  };
  onChangeName = ev => {
    this.setState({ name: ev.target.value });
  };

  //   {
  //   path: '/connection/request/non_user',
  //   method: 'post',
  //   action: createConnectionRequestWithGhost
  // },
  render() {
    const { tips, name, email } = this.state;
    const { auth, user, isTouch } = this.props;
    return (
      <Layout auth={auth} user={user} isTouch={isTouch}>
        <Head>
          <title>New Contact - Jaresume</title>
        </Head>
        <NewContactContainer>
          <br />
          <br />
          <Title>New Contact</Title>
          <br />
          <br />
          <Input
            label="Email"
            subLabel={tips.email}
            type="email"
            onChange={this.onChangeEmail}
            value={email}
          />
          <Input
            label="Name"
            subLabel={tips.name}
            type="text"
            onChange={this.onChangeName}
            value={name}
          />
          <Button onClick={this.createContact}>New Contact</Button>
          <br />
          <br />
        </NewContactContainer>
      </Layout>
    );
  }
}
