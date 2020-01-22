import { Component } from "react";
import axios from "axios";
import map from "lodash/map";
import filter from "lodash/filter";
import styled from "styled-components";
import Head from "next/head";

import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "../components/Link";
import Icon from "../components/Icon";
import config from "../config";
import Layout from "../components/Layout";
import { Title, SubTitle, Body } from "../components/Text";
import UserCard from "../components/UserCard";
import TouchDashboard from "../components/Dashboard";

const DashboardContainer = styled.div`
  padding-top: 80px;
  width: 1040px;
  margin: auto;
`;
const KycBoxContainer = styled.div`
  display: flex;
  width: 600px;
  margin-top: 40px;
  margin-bottom: 40px;
`;
const FormContainer = styled.div`
  width: 500px;
`;
const KycTip = styled(Body)`
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: opacity 0.1s linear;
`;
const KycBox = styled.div`
  width: 120px;
  height: 120px;
  margin-right: 40px;
  background: grey;
  border-radius: 6px;
  background: ${({ theme, disabled }) => {
    if (disabled) {
      return theme.color.red.toString();
    } else {
      return theme.color.red.toString();
    }
  }};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  &:hover {
    &:hover ${KycTip} {
      opacity: 0.7;
    }
  }
`;
const KycLabel = styled(Body)`
  /* position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
  left: 0; */
`;
const Table = styled.table``;
const Row = styled.tr``;
const Column = styled.td``;

export default class Dashboard extends Component {
  state = {
    number: "+61439584078",
    sent: true,
    verified: false,
    code: "",
    codeFailed: false
  };
  // +61484018032
  onNumberChange = ev => {
    this.setState({ number: ev.target.value });
  };

  onCodeChange = ev => {
    this.setState({ code: ev.target.value });
  };

  sendCode = async ev => {
    // this.setState({ sent: true });
    const response2 = await axios({
      url: config.api.host + "/kyc/verify_sms",
      method: "POST",
      withCredentials: true,
      data: {
        smsCode: this.state.code
      }
    });
    if (response2.data.error) {
      this.setState({
        codeFailed: true
      });
    } else {
      this.setState({ verified: true });
    }
    console.log(response2);
  };
  sendSMS = async ev => {
    this.setState({ sent: true });
    const response2 = await axios({
      url: config.api.host + "/kyc/sms",
      method: "POST",
      withCredentials: true,
      data: {
        phone: this.state.number
      }
    });
  };
  render() {
    const { auth, user, isTouch } = this.props;
    const { number, sent, verified, code, codeFailed } = this.state;
    return (
      <Layout isTouch={isTouch} auth={auth} user={user}>
        {isTouch && <TouchDashboard auth={auth} user={user} />}
        {!isTouch && (
          <DashboardContainer>
            <Title>SMS Verification</Title>
            {!sent && (
              <div>
                <Body>Please enter your phone number</Body>
                <FormContainer>
                  <Input
                    type="text"
                    label="Phone Number"
                    subLabel={null}
                    onChange={this.onNumberChange}
                    value={number}
                  />
                  <Button disabled={false} onClick={this.sendSMS}>
                    Send SMS
                  </Button>
                </FormContainer>
              </div>
            )}
            {sent && !verified && (
              <div>
                <Body>Please enter your code</Body>
                <FormContainer>
                  <Input
                    type="text"
                    label="Code"
                    subLabel={codeFailed ? "Wrong Code" : null}
                    onChange={this.onCodeChange}
                    value={code}
                  />
                  <Button disabled={false} onClick={this.sendCode}>
                    Verify
                  </Button>
                </FormContainer>
              </div>
            )}
            {verified && (
              <div>
                <Body>You have been verified</Body>
              </div>
            )}
          </DashboardContainer>
        )}
      </Layout>
    );
  }
}
