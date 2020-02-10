import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage, req }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();
    let isPdf = false;
    if (req) {
      isPdf = req.originalUrl.substr(0, 4) === "/pdf";
    }
    let agent = 1;
    if (req.originalUrl.indexOf("smith") !== -1) {
      agent = 1;
    } else {
      agent = 2;
    }
    // Step 4: Pass styleTags as a prop
    console.log("the fuck");
    console.log("the fuck");
    console.log("the fuck");
    console.log(this);
    return { ...page, styleTags, isPdf, agent };
  }
  render() {
    const { agent } = this.props;
    return (
      <html>
        <Head>
          <meta charset="utf-8" />
          <title>Jaresume</title>
          <meta
            name="description"
            content="The platform for professionals to network"
          />
          <meta name="image" content="https://jaresume.com/static/logo.png" />
          <meta name="theme-color" content="#F7D051" />
          <link rel="manifest" href="/static/manifest.json" />
          <meta itemprop="name" content="Jaresume" />
          <meta
            itemprop="description"
            content="The platform for professionals to network"
          />
          <meta
            itemprop="image"
            content="https://jaresume.com/static/logo.png"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Jaresume" />
          <meta
            name="twitter:description"
            content="The platform for professionals to network"
          />
          <meta name="og:title" content="Jaresume" />
          <meta
            name="og:description"
            content="The platform for professionals to network"
          />
          <meta
            name="og:image"
            content="https://jaresume.com/static/logo.png"
          />
          <meta name="og:url" content="https://jaresume.com" />
          <meta name="og:site_name" content="Jaresume" />
          <meta name="og:type" content="website" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}
          <link
            href="https://fonts.googleapis.com/css?family=EB+Garamond:400,400i,500,500i,600,600i,700,700i,800,800i|Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i"
            rel="stylesheet"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.agent = ${agent};
            `
            }}
          />
          <link rel="shortcut icon" href="/static/favicon.ico" />{" "}
          <link rel="icon" href="/static/favicon.ico" />
          <style
            dangerouslySetInnerHTML={{
              __html: `
                * {
                  box-sizing: border-box;
                }
            html {
              overflow-y: scroll;
              height: 100%;
            }
            body {
              margin: 0;
              font-family: Source Sans Pro, sans-serif;
              height: 100%;
            }
            body > div:first-child {
             height: 100%;
             margin: 0;
             }

             #__next > div:first-child  {
               height: 100%;
               margin: 0;
             }
             #__next {
               height: 100%;
               margin: 0;
             }
            h1,h2,h3,h4,h5 {
              font-family: EB Garamond, serif;
              text-transform: uppercase;

            }
          `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-127726094-1"
          />
          {process.env.NODE_ENV === "production" && (
            <script
              dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-127726094-1');
          `
              }}
            />
          )}
        </body>
      </html>
    );
  }
}
