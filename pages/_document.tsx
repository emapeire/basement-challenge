import { Head, Html, Main, NextScript } from "next/document";

import { getCssText } from "@/stitches.config";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* SEO tags */}
        <meta
          content={`The basement.studio frontend challenge which consists of building a web application following a Figma
					file that showcases the products of the basement.studio brand.`}
          name="description"
        />
        <meta content="#000000" name="theme-color" />
        <meta content="#000000" name="msapplication-TileColor" />
        <meta content="Basement Challenge" name="og:title" />
        <meta content={`/assets/og.png`} property="og:image" />
        <meta content="website" property="og:type" />
        {/* Preload fonts as soon as possible */}
        <link
          as="font"
          crossOrigin="anonymous"
          href="/fonts/basementgrotesque.woff2"
          rel="preload"
          type="font/woff2"
        />
        {/* Taken from leerob's website :) */}
        {/* Favicons generated for each device */}
        <link href="/favicons/favicon.ico" rel="shortcut icon" />
        <link
          href="/favicons/favicon.png"
          rel="icon"
          sizes="260x260"
          type="image/png"
        />
        <link
          href="/favicons/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/favicons/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/favicons/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link
          href="/favicons/android-chrome-192x192.png"
          rel="icon"
          sizes="192x192"
          type="image/png"
        />
        <link
          href="/favicons/android-chrome-512x512.png"
          rel="icon"
          sizes="512x512"
          type="image/png"
        />
        {/* Stitches SSR */}
        <style
          dangerouslySetInnerHTML={{ __html: getCssText() }}
          id="stitches"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
