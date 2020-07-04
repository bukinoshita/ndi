import React from 'react'
import Router from 'next/router'

import { Button } from 'ui/button'
import { Colors, space, Weight } from 'ui/theme'
import Link from 'next/link'

export const Header = () => {
  return (
    <header>
      <Link href="/">
        <a href="/" className="logo">
          ndi_
        </a>
      </Link>

      <Button onClick={() => Router.push('/')}>Adicionar novo termo</Button>

      <style jsx>
        {`
          header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            height: 140px;
          }

          .logo {
            color: ${Colors.Black};
            font-size: 27px;
            font-weight: ${Weight.ExtraBold};
            text-decoration: none;
          }
        `}
      </style>
    </header>
  )
}
