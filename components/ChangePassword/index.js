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
    isValid: false,
    submitted: false
  };
  login = async () => {
    const { checkAuth, submitting } = this.props;
    const { email, password, isValid } = this.state;
    if (submitting) {
      return false;
    }
    if (email.length === 0 && password.length === 0) {
      return false;
    }
    this.setState({ submitting: true });
    const tips = {};
    const response = await axios({
      url: config.api.host + "/change_password",
      method: "PUT",
      data: { password: password, newPassword: email },
      withCredentials: true
    });
    // this.setState({ submitting: false });
    this.setState({ submitting: false });
    if (!response.data.error) {
      this.setState({ submitted: true });
    } else {
      if (response.data.error === "password_complexity") {
        tips.email = "Use 8 characters at least";
      }
      if (response.data.error === "incorrect_password") {
        tips.password = "You've got the password wrong";
      }
      if (response.data.error === "not_verified") {
        tips.email = "Looks like you haven't confirmed your email...";
      }
    }
    this.setState({
      tips
    });
    console.log(response.data);
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

    const {
      email,
      password,
      submitting,
      tips,
      isValid,
      submitted
    } = this.state;
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
              {submitted && (
                <p>
                  <Body>Your password has been changed successfully!</Body>
                </p>
              )}
              {!submitted && (
                <div>
                  <Body style={{ padding: "30px 0" }}>
                    Make sure you choose a secure password, we recommend using a
                    password manager.
                  </Body>

                  <Input
                    type="password"
                    label="Old Password"
                    subLabel={tips.password}
                    onChange={this.onChangePassword}
                    value={password}
                  />
                  <Input
                    type="password"
                    label="New Password"
                    subLabel={tips.email}
                    onChange={this.onChangeEmail}
                    value={email}
                  />
                  <Button disabled={submitting} onClick={this.login}>
                    Change
                  </Button>
                </div>
              )}
            </form>
          </LoginContainer>
        )}
      </div>
    );
  }
}
