import React, { ReactNode } from 'react'

import { Colors } from 'ui/theme'
import { Row } from 'ui/row'

export type PageProps = {
  children: ReactNode
}

if ('document' in global) {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)

  window.addEventListener('resize', () => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  })
}

export const Page = ({ children }: PageProps) => {
  return (
    <Row>
      <main>{children}</main>

      <style jsx>{`
        main {
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
    </Row>
  )
}
