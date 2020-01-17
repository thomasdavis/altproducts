import { Component } from "react";
import * as algoliasearch from "algoliasearch";
import map from "lodash/map";
import styled from "styled-components";
import gravatar from "gravatar";
import axios from "axios";
import Head from "next/head";

import config from "../config";
import { Link, Router } from "../routes";
import Layout from "../components/Layout";
import Input from "../components/Input";
import Button from "../components/Button";
import UserCard from "../components/UserCard";
import { Title } from "../components/Text";

var client = algoliasearch("F1TM0UX9BN", "1b52b2b7dc3915bfef09fc5c1baf9104");
var index = client.initIndex("users");

const ConnectionsContainer = styled.div`
  width: 500px;
  margin: auto;
  padding-top: 80px;
`;

export default class Connections extends Component {
  state = { connections: [] };
  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.user.username !== this.props.user.username) {
      this.fetchConnections();
    }
  }
  async componentDidMount() {
    this.fetchConnections();
  }
  fetchConnections = async () => {
    const { user } = this.props;
    if (user.username.length > 0) {
      const response = await axios({
        url: config.api.host + "/user/" + user.username + "/connection",
        withCredentials: true
      });
      if (!response.data.error) {
        this.setState({
          connections: response.data
        });
      }
    }
  };
  render() {
    const { auth, user, isTouch } = this.props;
    const { connections } = this.state;

    const cities = map(connections, c => {
      return (
        (c && c.basics && c.basics.location && c.basics.location.city) || null
      );
    });

    console.log(cities);

    return (
      <Layout auth={auth} user={user} isTouch={isTouch}>
        <ConnectionsContainer>
          <Head>
            <title>Connections - Jaresume</title>
          </Head>
          <br />
          <br />
          <Title>Connections</Title>
          <br />
          <br />
          {/* <Button
            onClick={() => {
              Router.pushRoute("new_contact");
            }}
          >
            New Contact
          </Button> */}
          <br />
          <br />
          {map(connections, connection => {
            const resume = {
              basics: connection.basics
            };
            resume.basics.email = connection.email;
            return (
              <UserCard
                key={connection.username}
                user={{
                  username: connection.username,
                  resume: { basics: connection.basics }
                }}
              />
            );
          })}
        </ConnectionsContainer>
      </Layout>
    );
  }
}
