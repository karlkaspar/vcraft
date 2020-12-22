import * as React from "react";
import { render } from "react-dom";

import 'regenerator-runtime/runtime' // ALLOWS US TO USE ASYNC IN HTML

import { ApolloProvider } from "react-apollo";
import graphqlClient from "./api/graphql";

import { Routes } from "./Routes";

import Header from "./shared/header/header";
import Footer from "./shared/footer/footer";

// IMPORT BOOTSTRAP CSS, SO WE CAN USE ALL OF IT'S CSS
import 'bootstrap/dist/css/bootstrap.min.css';

render(
  <>
    <Header />
  </>,
  document.getElementById("header")
);

render(
  <ApolloProvider client={graphqlClient}>
    <Routes />
  </ApolloProvider>,  document.getElementById("app"));

render(
  <>
    <Footer />
  </>,
  document.getElementById("footer")
);
