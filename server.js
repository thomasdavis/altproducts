// It must be placed above all other 'require' statements
if (process.env.NODE_ENV === "production") {
  var atatus = require("atatus-node");
  atatus.start({ apiKey: "e6d7b5e79cff4e2e8510a91efe40168a" });
}
// server.js
const next = require("next");
const { join } = require("path");
const { parse } = require("url");
const routes = require("./routes");
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handler = routes.getRequestHandler(app);

// With express
const express = require("express");
app.prepare().then(() => {
  express()
    .use((req, res, next) => {
      const parsedUrl = parse(req.url, true);
      const { pathname } = parsedUrl;

      if (pathname === "/service-worker.js") {
        const filePath = join(__dirname, ".next", pathname);

        return app.serveStatic(req, res, filePath);
      } else {
        next();
      }
    })
    .use(handler)
    .listen(process.env.PORT || 3000);
});
