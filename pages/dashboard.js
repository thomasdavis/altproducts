import { Component } from "react";
import axios from "axios";
import map from "lodash/map";
import filter from "lodash/filter";
import styled from "styled-components";
import Head from "next/head";

import { Link } from "../components/Link";
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
const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`;
const Left = styled.div`
  flex: 0 0 auto;
  width: 500px;
  margin-right: 40px;
`;
const Right = styled.div`
  flex: 0 0 auto;
  width: 500px;
`;
const BulletPoints = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: left;
  padding-top: 20px;
  li {
    font-size: 18px;
    position: relative;
    :before {
      content: "";
      position: absolute;
      left: -16px;
      top: 9px;
      width: 8px;
      height: 8px;
      background: ${({ theme }) => theme.color.yellow.toString()};
    }
    margin-bottom: 10px;
  }
`;
const Point = styled.div``;
export default class Dashboard extends Component {
  state = { connectionRequests: [] };
  async componentDidMount() {
    const response = await axios({
      url: config.api.host + "/connection/request",
      withCredentials: true
    });
    this.setState({
      connectionRequests: response.data
    });
    this.renderGraph();
  }
  renderGraph = () => {
    const { user, isTouch } = this.props;
    if (isTouch) {
      return null;
    }
    var client = new Keen({
      projectId: "5bd9953dc9e77c000104c528",
      readKey:
        "79DCAC5FAE88F18439FCF67641E47C19DE27AA1608738D18780830E0A9462B1A3AB6BD4F2027B690A61FA0582F0C4E2F167DE3B7B5851DF497A7C242AAC11FB24C2162D1A1B741318E8A309A4D16A5F5A7267783641B1E2A84BD80612AC38D3D"
    });

    var chart = new Keen.Dataviz()
      .el("#profileviews")
      .height(240)
      .title("Weekly Profile Views")
      .type("areachart")
      .prepare();
    console.log("fetching for user", user);
    client
      .query("count", {
        event_collection: "profile_view",
        filters: [
          {
            operator: "eq",
            property_name: "user.username",
            property_value: user.username
          }
        ],
        interval: "daily",
        timeframe: "this_7_days",
        timezone: "UTC"
      })
      .then(function(res) {
        console.log("kiin", res);
        chart.data(res).render();
      })
      .catch(function(err) {
        console.log("keeen", err);
        chart.message(err.message);
      });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.user.username !== this.props.user.username) {
      this.renderGraph();
    }
  }
  render() {
    const { connectionRequests } = this.state;
    const { auth, user, isTouch } = this.props;

    const pendingConnectionRequests = filter(connectionRequests, request => {
      return request.state === "Pending";
    });

    return (
      <Layout isTouch={isTouch} auth={auth} user={user}>
        {isTouch && <TouchDashboard auth={auth} user={user} />}
        {!isTouch && (
          <DashboardContainer>
            <Head>
              <title>Dashboard - Jaresume</title>
            </Head>
            <HeroContainer>
              <Left>
                <Title>Hello!</Title>
                <br />
                <Body>
                  Welcome to the first prototype of Jaresume.
                  <br />
                  <br />
                  Initial versions will be for developers only, people who can
                  edit JSON by hand. We will roll out UI editors as quick as
                  possible.
                  <br />
                  <br />
                  To get started, head to your profile. Then click "Edit"
                  <br />
                  <br />
                  You will need to follow the{" "}
                  <Link href="https://jsonresume.org/schema/">
                    JSONResume schema
                  </Link>
                  <br />
                  <br />
                  All feedback should go to{" "}
                  <Link href="https://reddit.com/r/jaresume">Reddit</Link>
                </Body>
                <br />
                <br />
                <br />
                <SubTitle>Todo</SubTitle>
                <BulletPoints>
                  <li>Email backups and notifications</li>
                  <li>Settings (reset pw, delete account)</li>
                  <li>Minimal mobile app optimized for networking events</li>
                  <li>UI Resume builder</li>
                  <li>Make the most beautiful profile/resume ever</li>
                  <li>Messaging??</li>
                </BulletPoints>
              </Left>
              <Right>
                <SubTitle>Connection Requests</SubTitle>
                <br />
                <div style={{ width: "500px" }}>
                  {pendingConnectionRequests.length === 0 && (
                    <Body>Zero. Go make some friends!</Body>
                  )}
                  {map(pendingConnectionRequests, request => {
                    let resume;
                    console.log(request);
                    if (typeof request.user.resume === "string") {
                      try {
                        resume = JSON.parse(request.user.resume);
                      } catch (err) {}
                    } else {
                      resume = request.user.resume;
                    }
                    return <UserCard user={request.user} />;
                    return (
                      <li>
                        {" "}
                        <Link
                          route="profile"
                          params={{ username: request.username }}
                          passHref
                          key={request.username}
                        >
                          {resume.basics.name}
                        </Link>
                      </li>
                    );
                  })}
                </div>
              </Right>
            </HeroContainer>
            <SubTitle>Analytics</SubTitle>
            <div id="profileviews" />
          </DashboardContainer>
        )}
      </Layout>
    );
  }
}
