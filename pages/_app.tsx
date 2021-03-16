import React from "react";
import "../styles/globals.css";
import { AppProps } from "next/dist/next-server/lib/router/router";
import Header from "../src/layout/Header";
import Nav from "../src/layout/Nav";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="mx-auto w-7/12">
      <Header />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
