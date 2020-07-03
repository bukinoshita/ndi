import React, { ReactNode } from 'react'

import { space } from 'ui/theme'

export type RowProps = {
  children: ReactNode
}

export const Row = ({ children }: RowProps) => {
  return (
    <div>
      {children}

      <style jsx>{`
        div {
          max-width: 1400px;
          margin-left: auto;
          margin-right: auto;
          padding-left: ${space.spacing(10)};
          padding-right: ${space.spacing(10)};
        }
      `}</style>
    </div>
  )
}
