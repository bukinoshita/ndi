import React, { ReactNode, CSSProperties } from 'react'
import Head from 'next/head'

import pkg from '../../package.json'

import { Colors } from 'ui/theme'
import { Row } from 'ui/row'
import { Header } from 'components/header'
import { Footer } from 'components/footer/footer'

export type PageProps = {
  children: ReactNode
  onChangeWord?: () => void
  style?: CSSProperties
}

if ('document' in global) {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)

  window.addEventListener('resize', () => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  })
}

export const Page = ({ children, onChangeWord, style }: PageProps) => {
  return (
    <>
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

        <meta property="og:title" content="ndi — não diga isso" />
        <meta property="og:description" content={pkg.description} />

        <meta
          name="twitter:image"
          content="https://naodigaisso.com/static/cover.png"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:title" content="ndi — não diga isso" />
        <meta property="og:description" content={pkg.description} />
        <meta property="og:image" content="static/cover.png" />
        <meta property="og:url" content="https://naodigaisso.com" />
        <meta property="og:type" content="website" />
      </Head>

      <Row>
        <div className="page" style={style}>
          <Header />
          <main>{children}</main>
          {onChangeWord && <Footer onChangeWord={onChangeWord} />}
        </div>
      </Row>

      <style jsx>{`
        .page {
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          height: 100vh;
          height: calc(var(--vh, 1vh) * 100);
          min-height: -webkit-fill-available;
        }
      `}</style>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          -webkit-font-smoothing: antialiased;
        }

        html,
        body {
          height: 100%;
        }

        body {
          font-family: 'Inter';
          background-color: ${Colors.White};
          color: ${Colors.Black};
        }

        a {
          color: ${Colors.Black};
        }

        svg {
          vertical-align: middle;
        }

        img {
          max-width: 100%;
          width: 100%;
        }
      `}</style>
    </>
  )
}
