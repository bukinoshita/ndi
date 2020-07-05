import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

import pkg from '../package.json'

import { Colors } from 'ui/theme'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <title>ndi — não diga isso</title>
          <meta name="description" content={pkg.description} />

          <link rel="apple-touch-icon" href="static/icon.png" />
          <link rel="icon" href="static/icon.png" type="image/png" />
          <meta name="theme-color" content={Colors.White} />

          <meta name="viewport" content="width=device-width" />
          <link rel="manifest" href="/manifest.json" />

          <link
            href="https://fonts.googleapis.com/css?family=Inter:400,700&display=swap"
            rel="stylesheet"
          />

          <meta property="og:title" content={pkg.name} />
          <meta property="og:description" content={pkg.description} />

          <meta
            name="twitter:image"
            content="https://naodigaisso.com/static/cover.png"
          />
          <meta name="twitter:card" content="summary_large_image" />

          <meta property="og:title" content={pkg.name} />
          <meta property="og:description" content={pkg.description} />
          <meta
            property="og:image"
            content="https://naodigaisso.com/static/cover.png"
          />
          <meta property="og:url" content="https://naodigaisso.com" />
          <meta property="og:type" content="website" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
