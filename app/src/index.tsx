import * as React from "react";
import { render } from "react-dom";

import { ApolloProvider } from "react-apollo";
import graphqlClient from "./api/graphql";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import Home from "./modules/home/home";

// IMPORT BOOTSTRAP CSS, SO WE CAN USE ALL OF IT'S CSS
// I KNOW WE CAN ALSO IMPORT IT PARTIALLY
import 'bootstrap/dist/css/bootstrap.min.css';


render(
  <>
    <Header />
  </>,
  document.getElementById("header")
);

render(
  <ApolloProvider client={graphqlClient}>
    <Home />
  </ApolloProvider>,  document.getElementById("app"));

/*

render(
  <>
    <Footer />
  </>,
  document.getElementById("footer")
);
*/
