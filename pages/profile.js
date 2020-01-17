import { Component } from "react";
import map from "lodash/map";
import find from "lodash/find";
import styled from "styled-components";
import dynamic from "next/dynamic";
import axios from "axios";
import Head from "next/head";

import config from "../config";
import { Link as AppLink } from "../routes";
import { Link } from "../components/Link";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Icon from "../components/Icon";
import { Title, SubTitle, Body } from "../components/Text";
import Resume from "../components/Resume";
import Spinner from "../components/Spinner";
import ExampleResume from "../config/resume.json";
import Schema from "../config/schema.json";
import UISchema from "../config/uischema.json";

import KeenTracking from "keen-tracking";

const client = new KeenTracking({
  projectId: "5bd9953dc9e77c000104c528",
  writeKey:
    "26CE6E6A12556390D47E08972BC59BF2797CF108D2F8F7466EC5212BEA2BA82328B9EF6FA236757AF24067DE4B12E05E7182B1BE52D6E3F8F506F63B7E3EDF3045200FDFA0BEAFB4026D5909640E9B44A6E06A8B12DF0038C822126C1311138B"
});

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
const ResumeIcon = styled.a`
  cursor: pointer;
  ${"" /* background: ${({ theme }) => theme.color.grey.darken(0.2).toString()}; */} margin-left: 2px;
  padding: 4px;
  flex: 0 0 auto;
  justify-content: center;
  display: flex;
  :hover {
    background: ${({ theme }) => theme.color.black.toString()};
  }
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
const AllActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ActionsContainer = styled.div`
  width: 200px;
  flex: 0 0 auto;
  height: 40px;
`;
const SubActionsContainer = styled.div`
  flex: 0 0 auto;
  display: flex;
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
  gravatar: null,
  contact: {}
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
    const requestHeaders = {};
    if (req && req.headers && req.headers.cookie) {
      requestHeaders.Cookie = req.headers.cookie;
    }
    let resume = null;
    let gravatar = null;
    if (req) {
      const response2 = await axios({
        url: config.api.host + "/resume/" + username,
        headers: requestHeaders,
        withCredentials: true
      });
      resume = response2.data.resume ? response2.data.resume : response2.data;
      gravatar = response2.data.gravatar;
      console.log(resume, username);
    }
    return { resume, username, gravatar };
  }
  getResume = async () => {
    const { editMode, username } = this.props;
    console.log("mounted", this.props);
    const response = await axios({
      url: config.api.host + "/resume/" + username,
      withCredentials: true
    });

    this.setState({
      resume: response.data.resume ? response.data.resume : response.data,
      gravatar: response.data.gravatar,
      useStateResume: true
    });
    const response2 = await axios({
      url: config.api.host + "/request/" + username,
      withCredentials: true
    });
    const response3 = await axios({
      url: config.api.host + "/connection/request",
      withCredentials: true
    });
    this.setState({
      connectionRequests: response3.data,
      contact: {
        email: response2.data.email,
        phone: response2.data.phone
      },
      requestReceived: response2.data.requestReceived,
      requestSent: response2.data.requestSent,
      connected: response2.data.connected,
      loadedConnectionFacts: true //this sucks, will change it later
    });
  };
  async componentDidMount() {
    this.getResume();
  }
  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.username !== this.props.username) {
      this.setState(DEFAULT_STATE);
      this.getResume();
    }
    const { user, username } = this.props;
    const isOwner = user.username === username;
    if (!isOwner && user.username && user.username.length > 0) {
      client
        .recordEvent("profile_view", {
          user: {
            username
          }
        })
        .then(response => {
          console.log("keenio tracked");
        })
        .catch(error => {
          console.log("keenio failed");
        });
    }
    if (this.state.editMode !== prevState.editMode) {
      const { resume } = this.state;
      // Give the container sometime to render
      if (typeof window !== "undefined" && this.state.editMode) {
        var container = this.refs.hello;
        console.log(Schema);
        var options = {
          mode: "code",
          schema: Schema,
          schemaRefs: { reference_key: Schema }
        };

        var editor = new window.JSONEditor(container, options);

        this.editor = editor;
        const response = await axios({
          url: config.api.host + "/resume",
          withCredentials: true
        });
        console.log("editor", response.data);
        editor.set(response.data);

        // var json = editor.get();
      }
    }
  }
  saveResume = async () => {
    const resume = this.editor.get();
    this.setState({ resume, editMode: false });
    const response = await axios({
      url: config.api.host + "/resume",
      method: "PUT",
      data: { resume },
      withCredentials: true
    });
    console.log(response);
  };
  toggleEditMode = () => {
    const { editMode } = this.state;
    this.setState({ editMode: !editMode });
  };
  connect = async () => {
    this.setState({
      requestPending: true
    });
    const { username } = this.props;
    const response = await axios({
      url: config.api.host + "/connection/request",
      method: "POST",
      data: { username },
      withCredentials: true
    });
  };
  accept = async connectionRequest => {
    console.log(connectionRequest);
    this.setState({ requestAccepted: true });
    const response = await axios({
      url: config.api.host + "/connection/request/" + connectionRequest.user.id,
      method: "PUT",
      withCredentials: true
    });
  };
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
      resume: stateResume,
      useStateResume,
      contact
    } = this.state;
    const { auth, user, username, isTouch, resume: serverResume } = this.props;
    const isOwner = user.username === username;
    const { basics, references } = ExampleResume;

    const resume = !useStateResume ? serverResume : stateResume;
    let dummyData = false;
    if (resume && resume.basics && resume.basics.name === "Richard Hendriks") {
      dummyData = true;
    }
    const gravatar = !useStateResume
      ? this.props.gravatar
      : this.state.gravatar;

    const connectionRequest = find(connectionRequests, request => {
      return request.user && request.user.username === username;
    });

    return (
      <Layout
        auth={auth}
        user={user}
        isTouch={isTouch}
        background={!resume ? "#fff" : "#fff"}
      >
        <Head>
          <title>
            {editMode ? "Edit - " : ""}
            {(resume && resume.basics && resume.basics.name) || username} -
            Jaresume
          </title>
          {resume &&
            resume.basics &&
            resume.basics.summary && (
              <meta property="og:description" content={resume.basics.summary} />
            )}

          <meta property="og:image" content={gravatar} />
        </Head>
        <BackgroundAddon />
        {isOwner && (
          <OwnerContainer dummyData={dummyData && isOwner}>
            {/* <Title>
              Your<br />Profile
            </Title> */}
          </OwnerContainer>
        )}
        {resume &&
          !editMode && (
            <ProfileContainer isOwner={isOwner} isTouch={isTouch}>
              {isTouch && <Resume resume={resume} isTouch={isTouch} />}
              {!isTouch && (
                <AllActionsContainer>
                  <ActionsContainer>
                    {auth &&
                      isOwner && (
                        <ResumeButton onClick={this.toggleEditMode}>
                          Edit
                        </ResumeButton>
                      )}
                    {auth &&
                      !connected && (
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
                              <ResumeButton disabled={true}>
                                Pending
                              </ResumeButton>
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
                    {auth &&
                      (connected || requestAccepted) && (
                        <div>
                          <ResumeButton disabled={true}>Friends</ResumeButton>
                        </div>
                      )}
                  </ActionsContainer>
                  <SubActionsContainer>
                    {/* <ResumeIcon>
                      <Icon icon="Print" />
                    </ResumeIcon>
                    <ResumeIcon>
                      <Icon icon="Share" />
                    </ResumeIcon> */}
                    {!editMode && (
                      <AppLink
                        href={`https://api.jaresume.com/resume/${username}?format=pdf`}
                        passHref
                      >
                        <ResumeIcon target="_blank">
                          <Icon color="#f7f7f7" icon="Pdf" />
                        </ResumeIcon>
                      </AppLink>
                    )}
                  </SubActionsContainer>
                </AllActionsContainer>
              )}
              {!isTouch && (
                <MouseProfileContainer>
                  <Actions2Container />

                  <ResumeContainer>
                    <Resume
                      username={username}
                      contact={contact}
                      isOwner={isOwner}
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
      </Layout>
    );
  }
}
