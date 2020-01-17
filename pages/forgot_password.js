import { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import Head from "next/head";
import { Router } from "../routes";
import { Link } from "../components/Link";
import Layout from "../components/Layout";
import Input from "../components/Input";
import Button from "../components/Button";
import { Title, Body } from "../components/Text";
import config from "../config";
import { TouchLogin } from "../components/Login";

const LoginContainer = styled.div`
  margin: auto;
  width: 500px;
  padding-top: 80px;
`;

export default class Signup extends Component {
  state = {
    email: "",
    password: "",
    passwordVerification: "",
    submitting: false,
    tips: {},
    submitted: false
  };
  forgot = async () => {
    const { checkAuth, submitting } = this.props;
    const { email, password } = this.state;
    if (submitting) {
      return false;
    }
    if (email.length === 0 && password.length === 0) {
      return false;
    }
    this.setState({ submitting: true });
    const tips = {};
    const response = await axios({
      url: config.api.host + "/reset_password_request",
      method: "PUT",
      data: { email },
      withCredentials: true
    });
    this.setState({ submitted: true });
    this.setState({
      tips
    });
    console.log(response);
  };

  onChangeEmail = ev => {
    this.setState({ email: ev.target.value });
  };
  onChangePassword = ev => {
    this.setState({ password: ev.target.value });
  };
  onKeyDown = event => {
    if (event && event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      this.forgot();
    }
  };
  render() {
    const { auth, user, isTouch } = this.props;

    if (auth) {
      Router.pushRoute("dashboard");
    }

    const { email, password, submitting, tips, submitted } = this.state;
    return (
      <Layout auth={auth} user={user} isTouch={isTouch}>
        <Head>
          <title>Forgot Password - Jaresume</title>
        </Head>
        {isTouch && (
          <TouchLogin
            email={email}
            password={password}
            submitting={submitting}
            tips={tips}
            onChangeEmail={this.onChangeEmail}
            onChangePassword={this.onChangePassword}
            login={this.login}
            onKeyDown={this.onKeyDown}
          />
        )}
        {!isTouch && (
          <LoginContainer onKeyDown={this.onKeyDown}>
            <form>
              <br />
              <br />
              <Title>Forgot Password</Title>
              <br />
              <br />
              {submitted && (
                <Body>Please check your email for further instructions</Body>
              )}
              {!submitted && (
                <div>
                  <Input
                    label="Email"
                    subLabel={tips.email}
                    type="email"
                    onChange={this.onChangeEmail}
                    value={email}
                  />

                  <Button disabled={submitting} onClick={this.forgot}>
                    Login
                  </Button>
                  <br />
                  <p>
                    Don't have an account? <Link href="/signup">signup</Link>
                  </p>
                </div>
              )}
            </form>
          </LoginContainer>
        )}
      </Layout>
    );
  }
}
