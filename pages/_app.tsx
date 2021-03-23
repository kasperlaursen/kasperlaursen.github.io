import React from "react";
import "../styles/globals.css";
import { AppProps } from "next/dist/next-server/lib/router/router";
import Header from "../components/layout/Header";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="mx-auto max-w-4xl px-8">
      <Header />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
