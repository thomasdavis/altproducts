import { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import debounce from "lodash/debounce";
import Head from "next/head";

import config from "../config";
import { Router } from "../routes";
import { Link } from "../components/Link";
import Layout from "../components/Layout";
import Input from "../components/Input";
import Button from "../components/Button";
import { SubTitle, Title, Body } from "../components/Text";

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function isValidUsername(str) {
  let code = null;
  for (let i = 0, length = str.length; i < length; i++) {
    code = str.charCodeAt(i);
    if (
      !(code > 47 && code < 58) && // numeric 0-9
      !(code > 64 && code < 91) && // upper alpha A-Z
      !(code > 96 && code < 123) && // lower alpha a-z
      !(code === 95)
    ) {
      // underscore _
      return false;
    }
  }
  return true;
}

const SignupContainer = styled.div`
  margin: auto;
  width: ${({ isTouch }) => (isTouch ? "100%" : "500px")};
  padding: ${({ isTouch }) => (isTouch ? "20px 20px 80px 20px" : "80px 0")};
`;

export default class Signup extends Component {
  state = {
    email: "",
    password: "",
    passwordVerification: "",
    username: "",
    submitted: false,
    submitting: false,
    valid: false,
    tips: {}
  };
  componentDidMount() {
    this.validChecker = debounce(this.checkValidity, 1000);
  }
  signup = async () => {
    console.log("try submit");
    const { valid, email, password, username } = this.state;
    if (!valid) {
      return false;
    }
    this.setState({ submitting: true });
    const response = await axios({
      url: config.api.host + "/user",
      method: "POST",
      data: { email, password, username: username.toLowerCase() }
    });
    console.log(response.data);
    if (response.data.error) {
      if (response.data.error === "email_exists") {
        this.setState({
          submitting: false,
          valid: false,
          tips: { email: "This email is already taken =(" }
        });
      }
      if (response.data.error === "username_exists") {
        this.setState({
          submitting: false,
          valid: false,
          tips: { username: "This username is already taken =(" }
        });
      }
    } else {
      this.setState({ submitted: true });
    }
  };
  checkValidity = () => {
    const { email, username, password } = this.state;
    console.log(Math.random());
    console.log(validateEmail(email));
    const tips = {};
    if (email.length > 0 && !validateEmail(email)) {
      tips.email = "Not quite an email";
    }
    if (username.length > 0 && !isValidUsername(username)) {
      tips.username = "We only support letters, numbers and _";
    }
    if (password.length > 0 && password.length < 8) {
      tips.password = "Use 8 characters at least";
    }
    const valid =
      Object.keys(tips).length === 0 &&
      email.length > 0 &&
      password.length > 0 &&
      username.length > 0;
    console.log(tips, valid);
    this.setState({ tips, valid });
  };
  onChangeEmail = ev => {
    this.setState({ email: ev.target.value });
    this.validChecker();
  };
  onChangeUsername = ev => {
    this.setState({ username: ev.target.value });
    this.validChecker();
  };
  onChangePassword = ev => {
    this.setState({ password: ev.target.value });
    this.validChecker();
  };

  onKeyDown = event => {
    if (event && event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      this.checkValidity();
      setTimeout(this.signup, 100);
    }
  };

  render() {
    const { auth, user, isTouch } = this.props;
    const {
      email,
      username,
      password,
      submitted,
      tips,
      valid,
      submitting
    } = this.state;
    if (auth) {
      Router.pushRoute("dashboard");
    }
    return (
      <Layout auth={auth} user={user} isTouch={isTouch}>
        <Head>
          <title>Signup - Jaresume</title>
        </Head>
        <SignupContainer isTouch={isTouch} onKeyDown={this.onKeyDown}>
          {submitted && (
            <div>Great work! Check your inbox to confirm your account.</div>
          )}
          {!submitted && (
            <div>
              {" "}
              <br />
              <br />
              <Title>Signup</Title>
              <br />
              <br />
              <Input
                label="Email"
                subLabel={tips.email}
                type="text"
                onChange={this.onChangeEmail}
                value={email}
              />
              <Input
                label="Username"
                subLabel={tips.username}
                onChange={this.onChangeUsername}
                value={username}
              />
              <Input
                label="Password"
                type="password"
                subLabel={tips.password}
                onChange={this.onChangePassword}
                value={password}
              />
              <Button disabled={submitting} onClick={this.signup}>
                Signup
              </Button>
              <br />
              <Body>
                Already have an account? <Link href="/login">login</Link>
              </Body>
            </div>
          )}
        </SignupContainer>
      </Layout>
    );
  }
}
