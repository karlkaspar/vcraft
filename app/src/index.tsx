import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { render } from "react-dom";

import Header from "./components/header/header";
import Root from "./components/root/root";
import Footer from "./components/footer/footer";
this.context.test = '123';
render(
  <>
    <Header />
  </>,
  document.getElementById("header")
);

render(
  <>
    <Root />
  </>,
  document.getElementById("app")
);
render(
  <>
    <Footer />
  </>,
  document.getElementById("footer")
);
