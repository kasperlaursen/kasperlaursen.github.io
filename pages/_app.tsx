import React from "react";
import "../styles/globals.css";
import { AppProps } from "next/dist/next-server/lib/router/router";
import Header from "../components/Header";
import Nav from "../components/Nav";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="mx-auto w-7/12">
      <Header>Laursen.dev</Header>
      <Nav />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
