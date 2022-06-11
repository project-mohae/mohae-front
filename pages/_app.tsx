import "../styles/globals.css";
import type { AppProps } from "next/app";

import Head from "next/head";
import wrapper from "../store/configureStore";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Mohae</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
