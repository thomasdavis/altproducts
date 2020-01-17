import { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Router } from "../../routes";
import { Link } from "../Link";
import Layout from "../Layout";
import Input from "../Input";
import Button from "../Button";
import { Title, Body } from "../Text";
import config from "../../config";
import { TouchLogin } from "../Login";

const LoginContainer = styled.div`
  margin: auto;
`;
const DeleteButton = styled(Button)`
  background: ${({ theme, disabled }) =>
    disabled
      ? theme.color.red.grayscale.toString()
      : theme.color.red.toString()};
  cursor: ${({ theme, disabled }) => (disabled ? "default" : "pointer")};
  :hover {
    background: ${({ theme, disabled }) =>
      disabled
        ? theme.color.red.grayscale.toString()
        : theme.color.red.darken(0.1).toString()};
  }
`;
export default class Signup extends Component {
  state = {
    email: "",
    password: "",
    passwordVerification: "",
    submitting: false,
    tips: {},
    isValid: false
  };
  login = async () => {
    const { checkAuth, submitting } = this.props;
    const { email, password, isValid } = this.state;
    if (submitting || !isValid) {
      return false;
    }
    if (email.length === 0 && password.length === 0) {
      return false;
    }
    this.setState({ submitting: true });
    const tips = {};
    const response = await axios({
      url: config.api.host + "/user",
      method: "DELETE",
      withCredentials: true
    });
    // this.setState({ submitting: false });
    // if (!response.data.error) {
    await checkAuth();
    Router.pushRoute("login");
    // } else {
    //   if (response.data.error === "not_registered") {
    //     tips.email = "Seems like you have the wrong email?";
    //   }
    //   if (response.data.error === "incorrect_password") {
    //     tips.password = "You've got the password wrong";
    //   }
    //   if (response.data.error === "not_verified") {
    //     tips.email = "Looks like you haven't confirmed your email...";
    //   }
    // }
    this.setState({
      tips
    });
    console.log(response);
  };

  onChangeEmail = ev => {
    const { username } = this.props.user;
    this.setState({
      email: ev.target.value,
      isValid: ev.target.value === username
    });
  };
  onChangePassword = ev => {
    this.setState({ password: ev.target.value });
  };
  onKeyDown = event => {
    if (event && event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      this.login();
    }
  };
  render() {
    const { auth, user, isTouch } = this.props;

    if (auth) {
      Router.pushRoute("dashboard");
    }

    const { email, password, submitting, tips, isValid } = this.state;
    return (
      <div>
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
              <Body style={{ padding: "30px 0" }}>
                Please type your username in the box below to before deleting
                your account.
              </Body>
              <Input
                type="text"
                label="Username"
                subLabel={tips.email}
                onChange={this.onChangeEmail}
                value={email}
              />
              <DeleteButton
                disabled={!isValid || submitting}
                onClick={this.login}
              >
                Delete
              </DeleteButton>
            </form>
          </LoginContainer>
        )}
      </div>
    );
  }
}
