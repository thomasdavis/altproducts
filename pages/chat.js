import { Component } from "react";
import * as algoliasearch from "algoliasearch";
import map from "lodash/map";
import styled from "styled-components";
import gravatar from "gravatar";
import axios from "axios";
import moment from "moment";
var ColorHash = require("color-hash");
import config from "../config";
import { Link } from "../routes";
import Layout from "../components/Layout";
import Input from "../components/Input";
import UserCard from "../components/UserCard";
import { Title } from "../components/Text";
import Head from "next/head";

const colorHash = new ColorHash({
  lightness: [0.35, 0.5, 0.65],
  saturation: [0.35, 0.5, 0.65]
});
var client = algoliasearch("F1TM0UX9BN", "1b52b2b7dc3915bfef09fc5c1baf9104");
var index = client.initIndex("users");

const ChatContainer = styled.div`
  width: 1000px;
  margin: auto;
  padding-top: 80px;
`;

const Messages = styled.div`
  border: 1px solid ${({ theme }) => theme.color.black.toString()};
  padding: 20px;
  width: 100%;
  background: #fbfbfb;
  height: 400px;
  overflow-y: scroll;
`;
const Message = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const Username = styled.a`
  font-weight: bold;
  flex: 0 0 auto;
  width: 110px;
  text-decoration: none;
  :link {
    color: inherit;
  }
  :active {
    color: inherit;
  }
  :visited {
    color: inherit;
  }
  :hover {
    color: inherit;
  }
`;
const MessageContent = styled.div`
  flex: 0 0 auto;
  margin-left: 10px;
  word-wrap: break-word;
  width: 760px;
`;
const When = styled.div`
  color: black;
  display: inline-block;
  font-size: 13px;
`;
const MessageBox = styled.input`
  width: 100%;
  margin-top: 10px;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  border: 1px solid ${({ theme }) => theme.color.black.toString()};
  border-radius: 4px;
`;

export default class Connections extends Component {
  state = { connections: [], messages: [], messagea: "" };
  async componentDidMount() {
    this.getMessages();
    this.messageLoop = setInterval(this.getMessages, 10000);
  }
  componentWillUnmount() {
    clearInterval(this.messageLoop);
  }
  updateScroll = () => {
    var element = this.refs.messages;
    console.log(element.scrollHeight);
    setTimeout(() => {
      element.scrollTop = element.scrollHeight + 10;
    }, 100);
  };
  getMessages = async () => {
    const response = await axios({
      url: config.api.host + "/messages",
      withCredentials: true
    });
    if (!response.data.error) {
      this.setState({
        messages: response.data
      });
      this.updateScroll();
    }
  };
  postMessage = async event => {
    const { user } = this.props;
    if (event && event.key === "Enter") {
      console.log("submitted");
      const { messagea } = this.state;
      this.setState({
        messagea: "",
        messages: this.state.messages.concat([
          {
            username: user.username,
            content: messagea,
            createdAt: new Date()
          }
        ])
      });
      const response = await axios({
        url: config.api.host + "/messages",
        method: "POST",
        data: {
          content: this.state.messagea
        },
        withCredentials: true
      });
      this.updateScroll();
      this.getMessages();
    }
  };
  onChange = event => {
    this.setState({
      messagea: event.target.value
    });
  };
  render() {
    const { auth, user, isTouch } = this.props;
    const { connections, messagea, messages } = this.state;
    return (
      <Layout auth={auth} user={user} isTouch={isTouch}>
        <Head>
          <title>Chat - Jaresume</title>
        </Head>
        <ChatContainer>
          <br />
          <br />
          <Title>Chat</Title>
          <p>
            We built this basic chatroom for our early adopters to share their
            ideas and give feedback. (Not meant to be pretty)
          </p>
          <Messages ref="messages">
            {map(messages, message => {
              return (
                <Message>
                  <Link
                    to="profile"
                    params={{ username: message.username }}
                    passHref
                  >
                    <Username
                      style={{ color: colorHash.hex(message.username) }}
                    >
                      {message.username}:
                    </Username>
                  </Link>
                  <MessageContent>
                    {message.content} -{" "}
                    <When>{moment(message.createdAt).fromNow()}</When>
                  </MessageContent>
                </Message>
              );
            })}
          </Messages>
          <MessageBox
            value={messagea}
            onChange={this.onChange}
            disabled={!this.props.user.username}
            onKeyPress={this.postMessage}
          />
        </ChatContainer>
      </Layout>
    );
  }
}
