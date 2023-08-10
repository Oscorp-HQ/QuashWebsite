import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8"></meta>
        <title>Quash - Simplifying QA</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Mono&family=Roboto+Serif:ital,opsz,wght@0,8..144,400;0,8..144,500;1,8..144,400;1,8..144,500;1,8..144,600&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
