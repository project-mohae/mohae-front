import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "../store";
import Head from "next/head";

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
