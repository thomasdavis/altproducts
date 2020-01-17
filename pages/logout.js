import { Component } from "react";
import axios from "axios";
import Router from "next/router";
import Layout from "../components/Layout";
import config from "../config";

export default class Signup extends Component {
  async componentDidMount() {
    const { checkAuth } = this.props;
    const response = await axios({
      url: config.api.host + "/auth",
      method: "DELETE",
      withCredentials: true
    });
    await checkAuth();
    Router.push("/login");
  }
  render() {
    const { auth, user, isTouch } = this.props;
    return (
      <Layout auth={auth} user={user} isTouch={isTouch}>
        one moment...
      </Layout>
    );
  }
}
