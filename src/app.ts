import http from "http";
import express, { Application } from "express";
import { createHttpTerminator } from "http-terminator";

import AppRoute from "@route/app.route";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

AppRoute(app);

export const server = http.createServer(app);
export const httpTerminator = createHttpTerminator({ server });

server.listen(5000, () => {
  console.log(`App listening on port 5000`);
});
