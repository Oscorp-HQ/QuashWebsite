import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <title>🐞 Quash - Streamlining QA Processes 🚀</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
