import React from 'react'

import { Button } from 'ui/button'
import { Colors, space, Weight } from 'ui/theme'

export type HeaderProps = {
  title: string
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <header>
      <h1>{title}</h1>

      <Button>Adicionar novo termo</Button>

      <style jsx>
        {`
          header {
            padding-top: ${space.spacing(14)};
            padding-bottom: ${space.spacing(20)};
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          h1 {
            color: ${Colors.GrayDarker};
            font-size: 40px;
            font-weight: ${Weight.Bold};
          }
        `}
      </style>
    </header>
  )
}
