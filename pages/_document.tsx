import { Html, Head, Main, NextScript } from "next/document"
export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Wowi Coffee - Cà phê nguyên bản vị cao nguyên Di Linh" />
        <link rel="shortcut icon" href="/images/logo_title.png" />
      </Head>
      <body className="font-sans" style={{ width: "100% !important" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
