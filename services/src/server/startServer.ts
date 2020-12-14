import { ApolloServer } from "apollo-server-express";
import * as cors from "cors";
import * as express from "express";

import resolvers from "../graphql/resolvers";
import typeDefs from "../graphql/typeDefs";
import accessEnv from "../helpers/accessEnv";
const PORT = accessEnv("PORT", 7000);

const appolloServer = new ApolloServer({ resolvers, typeDefs});
const app = express();

app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
    preflightContinue: true,
    exposedHeaders: [
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept",
      "X-Password-Expired"
    ],
    optionsSuccessStatus: 200
  }) as any
);

appolloServer.applyMiddleware({app, path: "/graphql"})

app.listen(PORT, "0.0.0.0", () => {
  console.info(`VCRAFT service running on: ${PORT}`);
});
