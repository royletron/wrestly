import { CliUx } from "@oclif/core";

// server.js
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// next
const path = require("path");
const next = require("next");
const nextApp = next({ quiet: true, dir: path.join(__dirname, "..", "..") });
const handler = nextApp.getRequestHandler();

export default async function boot(port: number) {
  CliUx.ux.action.start("booting");
  // when using middleware `hostname` and `port` must be provided below
  return nextApp.prepare().then(() => {
    app.all("*", (req: any, res: any) => {
      return handler(req, res);
    });
    app.listen(port, (err?: any) => {
      if (err) throw err;
      CliUx.ux.action.stop(`Ready on http://localhost:${port}`);
      CliUx.ux.action.start("waiting for request");
    });
  });
}
