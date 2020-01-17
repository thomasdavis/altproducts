import React from "react";
import App, { Container } from "next/app";
import { ThemeProvider } from "styled-components";
import axios from "axios";
import merge from "lodash/merge";
import Color from "color";
import config from "../config";
import { platform } from "../libs/device";
import md5 from "md5";
const getTheme = ({ touch }) => {
  return {
    color: {
      yellow: Color("#F7D051"),
      black: Color("#252525"),
      grey: Color("#EFEFEF"),
      white: Color("#FFFFFF"),
      red: Color("#FF5F5F")
    },
    fontFamily: {
      heading: "EB Garamond, serif",
      body: "Source Sans Pro, sans-serif"
    },
    fontSize: {
      title: touch ? "34px" : "63px",
      subTitle: "24px",
      body: "18px"
    },
    lineHeight: {
      title: touch ? "34px" : "61px",
      subTitle: "24px",
      body: "26px"
    }
  };
};

export default class MyApp extends App {
  state = {
    auth: null,
    user: { username: "" },
    showTemper: false
  };
  checkAuth = async () => {
    const response = await axios({
      url: config.api.host + "/auth",
      withCredentials: true
    });
    setTimeout(() => {
      if (window.FS) {
        if (response.data.username) {
          window.FS.identify(response.data.username);
          FS.identify(md5(response.data.username), {
            displayName: response.data.username
          });
        }
      }
    }, 10000);

    this.setState({
      auth: response.data.auth,
      user: {
        username: response.data.username || null
      }
    });
  };
  setAuth = auth => {
    this.setState({ auth });
  };
  static async getInitialProps({ Component, router, ctx, query }) {
    let pMobile = typeof router.query.p_mobile !== "undefined";

    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // when developing mobile
    // add varnish and hit m.dev.jaresume.com etc
    // pageProps.pMobile = true;
    pageProps.pMobile = pMobile;

    return { pageProps };
  }
  componentDidMount() {
    this.checkAuth();
    setTimeout(function() {
      if (typeof window !== "undefined" && typeof $ !== "undefined") {
        let viewheight = $(window).height();
        let viewwidth = $(window).width();
        let viewport = document.querySelector("meta[name=viewport]");
        viewport.setAttribute(
          "content",
          "height=" +
            viewheight +
            "px, width=" +
            viewwidth +
            "px, initial-scale=1.0"
        );
      }
    }, 300);
    setTimeout(() => {
      this.setState({
        showTemper: true
      });
    }, 30000);
  }
  render() {
    const { Component, pageProps } = this.props;
    const { auth, user, showTemper } = this.state;

    // This ain't as easy as it sounds - TD
    const isReallyTouch = pageProps.pMobile ? true : platform.isTouch;

    const appProps = merge({}, pageProps, {
      auth,
      checkAuth: this.checkAuth,
      user,
      isTouch: isReallyTouch
    });

    return (
      <Container>
        <ThemeProvider theme={getTheme({ touch: isReallyTouch })}>
          <Component {...appProps} />
        </ThemeProvider>
        {showTemper && (
          <script
            data-id="doqfoueb"
            src="https://temper.io/d.js"
            class="temper"
            async
          />
        )}
      </Container>
    );
  }
}
