import { Component } from "react";
import styled from "styled-components";

import { Router, Link } from "../../routes";
import { Title, SubTitle, Body } from "../Text";
import Input from "../Input";
import Button from "../Button";

const SearchImage = styled.img``;
const LoginContainer = styled.div`
  padding-top: 0px;
  text-align: center;
  flex: 1 1 auto;
  text-align: left;
  width: 90%;
  margin: auto;
`;

const SearchInput = styled.input`
  width: 360px;
  height: 60px;
  border: none;
  border-radius: 4px;
  text-align: center;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
`;
const ButtonContainer = styled.div``;
const TipContainer = styled.div`
  font-family: Source Sans Pro;
  line-height: 21px;
  font-size: 13px;
  text-align: center;
  background: #252525;
  opacity: 0.2;
  border-radius: 30px;
`;
const InputContainer = styled.div``;
export class TouchLogin extends Component {
  render() {
    const {
      auth,
      email,
      password,
      submitting,
      tips,
      onChangeEmail,
      onChangePassword,
      login,
      onKeyDown
    } = this.props;
    return (
      <LoginContainer onKeyDown={onKeyDown}>
        <form>
          <br />
          <br />
          <Title>Login</Title>
          <br />
          <br />
          <InputContainer>
            <Input
              label="Email"
              subLabel={tips.email}
              type="email"
              onChange={onChangeEmail}
              value={email}
            />
          </InputContainer>
          <InputContainer>
            <Input
              type="password"
              label="Password"
              subLabel={tips.password}
              onChange={onChangePassword}
              value={password}
            />
          </InputContainer>
          <ButtonContainer>
            <Button disabled={submitting} onClick={login}>
              Login
            </Button>
          </ButtonContainer>
        </form>
      </LoginContainer>
    );
  }
}
