import { AppProps } from "next/app";
import Head from "next/head"; // Import the Head component
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SemWeebs</title>
        <meta name="description" content="Superior Instagram Tehe" />
        <link
          rel="icon"
          href="https://pbs.twimg.com/profile_images/1476020582898667522/1yrv4HrU_400x400.jpg"
          type="image/gif"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
