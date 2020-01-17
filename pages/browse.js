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
  static async getInitialProps({ req, query }) {
    let connections = [];

    if (req) {
      const response = await axios({
        url: config.api.host + "/user"
      });
      console.log(response);
      connections = response.data;
    }
    console.log(connections);
    return { connections };
  }
  render() {
    const { auth, user, isTouch, connections } = this.props;
    return (
      <Layout auth={auth} user={user} isTouch={isTouch}>
        <Head>
          <title>All - Jaresume</title>
        </Head>
        <ConnectionsContainer>
          <br />
          <br />
          <Title>Browse</Title>
          <br />
          <br />
          Under Construction
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
            console.log(connection);
            if (connection.basics.name === "Richard Hendriks") {
              return null;
            }
            return (
              <UserCard
                key={connection.username}
                user={{
                  resume: { basics: connection.basics },
                  username: connection.username
                }}
              />
            );
          })}
        </ConnectionsContainer>
      </Layout>
    );
  }
}
