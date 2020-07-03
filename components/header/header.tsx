import React from 'react'
import Router from 'next/router'

import { Button } from 'ui/button'
import { Colors, space, Weight } from 'ui/theme'
import Link from 'next/link'

export const Header = () => {
  return (
    <header>
      <Link passHref href="/">
        <a className="logo">ndi_</a>
      </Link>

      <Button onClick={() => Router.push('/')}>Adicionar novo termo</Button>

      <style jsx>
        {`
          header {
            padding-top: ${space.spacing(10)};
            padding-bottom: ${space.spacing(10)};
            display: flex;
            align-items: center;
            justify-content: space-between;
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
