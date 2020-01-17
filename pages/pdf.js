import { Component } from "react";
import map from "lodash/map";
import find from "lodash/find";
import styled from "styled-components";
import dynamic from "next/dynamic";
import axios from "axios";

import config from "../config";
import { Link } from "../components/Link";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { Title, SubTitle, Body } from "../components/Text";
import Resume from "../components/Resume";
import Spinner from "../components/Spinner";
import ExampleResume from "../config/resume.json";
import Schema from "../config/schema.json";
import UISchema from "../config/uischema.json";

const ProfileContainer = styled.div`
  margin: auto;
  width: ${({ isTouch }) => (isTouch ? "100%" : "1150px")};
  position: relative;
  padding-top: ${({ isTouch, isOwner }) =>
    isTouch ? "0" : isOwner ? "40px" : "120px"};
`;
const MouseProfileContainer = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 1px 1px;
  grid-template-areas: "actions resume resume resume resume";
  background: #fff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`;
const BackgroundAddon = styled.div`
  position: absolute;
  width: 100%;
  height: 419px;
  left: 0px;
  top: -40px;
  background: #efefef;
`;
const OwnerContainer = styled.div`
  width: 1150px;
  margin: auto;
  position: relative;
  padding-top: 80px;
  ${({ dummyData, theme }) => {
    return dummyData
      ? `
      :after {
        position: absolute;
        background: ${theme.color.yellow.lighten(0.15).toString()};
        color: ${theme.color.black.toString()};
        right: 0;
        top: 120px;
        content: 'Your resume currently contains dummy data. Click edit and fill out some information. Or paste your resume.json over the top';
        width: 400px;
        padding: 20px;
      }
    `
      : ``;
  }};
`;
const ResumeButton = styled(Button)`
  height: 40px;
  line-height: 40px;
  padding: 0;
  text-transform: uppercase;
`;
const Actions2Container = styled.div`
  grid-area: actions;
`;

const ResumeContainer = styled.div`
  grid-area: resume;
  padding-right: 150px;
  margin-top: 50px;
`;

const ActionsContainer = styled.div`
  width: 200px;
  height: 40px;
`;
const ResumeEditor = styled.div`
  background: #fff;
`;
const ResumeEditorHelp = styled.div`
  padding: 30px;
`;
const DEFAULT_STATE = {
  resume: null,
  editMode: false,
  connectionRequests: [],
  connections: [],
  loadedConnectionFacts: false,
  requestPending: false,
  connected: false,
  requestReceived: false,
  requestSent: false,
  requestAccepted: false,
  useStateResume: false,
  gravatar: null
};
export default class Profile extends Component {
  state = DEFAULT_STATE;
  static async getInitialProps({ req, query }) {
    let username = "";
    if (query.params) {
      username = query.params.username;
    } else if (query.username) {
      username = query.username;
    }
    console.log("what is this", username);
    let resume = null;
    let gravatar = null;
    console.log(req, query);
    const response2 = await axios({
      url: config.api.host + "/resume/" + username,
      withCredentials: true
    });
    console.log(response2.data);
    resume = response2.data.resume ? response2.data.resume : response2.data;
    gravatar = response2.data.gravatar;
    console.log(resume, username);
    return { resume, username, gravatar: gravatar };
  }

  render() {
    const {
      editMode,
      connected,
      requestReceived,
      connectionRequests,
      requestSent,
      loadedConnectionFacts,
      requestPending,
      requestAccepted,
      useStateResume
    } = this.state;
    const { auth, user, username, isTouch, resume } = this.props;
    const isOwner = user.username === username;
    const { basics, references } = ExampleResume;

    const gravatar = !useStateResume
      ? this.props.gravatar
      : this.state.gravatar;

    const connectionRequest = find(connectionRequests, request => {
      return request.user && request.user.username === username;
    });

    return (
      <div style={{ position: "relative" }}>
        <BackgroundAddon />
        {isOwner && (
          <OwnerContainer dummyData={dummyData && isOwner}>
            <Title>
              Your<br />Profile
            </Title>
          </OwnerContainer>
        )}
        {resume &&
          !editMode && (
            <ProfileContainer isOwner={isOwner} isTouch={isTouch}>
              {isTouch && <Resume resume={resume} isTouch={isTouch} />}
              {auth &&
                !isTouch && (
                  <ActionsContainer>
                    {isOwner && (
                      <ResumeButton onClick={this.toggleEditMode}>
                        Edit
                      </ResumeButton>
                    )}
                    {!connected && (
                      <div>
                        {!isOwner &&
                          !connected &&
                          !requestSent &&
                          !requestPending &&
                          loadedConnectionFacts &&
                          !requestReceived && (
                            <ResumeButton onClick={this.connect}>
                              Connect
                            </ResumeButton>
                          )}

                        {!isOwner &&
                          !connected &&
                          (requestPending || requestSent) &&
                          loadedConnectionFacts &&
                          !connectionRequest && (
                            <ResumeButton disabled={true}>Pending</ResumeButton>
                          )}
                        {!isOwner &&
                          loadedConnectionFacts &&
                          !requestAccepted &&
                          !connected &&
                          requestReceived && (
                            <ResumeButton
                              onClick={() => {
                                this.accept(connectionRequest);
                              }}
                            >
                              Accept
                            </ResumeButton>
                          )}
                      </div>
                    )}
                    {(connected || requestAccepted) && (
                      <div>
                        <ResumeButton disabled={true}>Friends</ResumeButton>
                      </div>
                    )}
                  </ActionsContainer>
                )}
              {!isTouch && (
                <MouseProfileContainer>
                  <Actions2Container />

                  <ResumeContainer>
                    <Resume
                      resume={resume}
                      gravatar={gravatar}
                      isTouch={isTouch}
                    />
                  </ResumeContainer>
                </MouseProfileContainer>
              )}
            </ProfileContainer>
          )}
        {resume &&
          editMode && (
            <ProfileContainer isOwner={isOwner} isTouch={isTouch}>
              <ActionsContainer>
                <ResumeButton onClick={this.saveResume}>Save</ResumeButton>
              </ActionsContainer>
              <ResumeEditor>
                <ResumeEditorHelp>
                  <Body>
                    This is currently the only way to edit your profile. <br />
                    <br />
                    We will quickly release a UI builder and perhaps a connect
                    to Dropbox, Gdrive etc
                    <br /> <br />
                    You will need to follow the{" "}
                    <Link href="https://jsonresume.org/schema/">
                      JSONResume schema
                    </Link>
                  </Body>
                </ResumeEditorHelp>
                <div style={{ height: "600px" }} ref="hello" />
              </ResumeEditor>
            </ProfileContainer>
          )}
      </div>
    );
  }
}
