import type { AppProps } from "next/app";

import Layout from "../components/Layout/Layout";

import "../styles/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
