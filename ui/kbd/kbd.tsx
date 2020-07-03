import React from 'react'
import { Colors, Radius, space } from 'ui/theme'

type KBDProps = {
  children: string
}

export const KBD = ({ children }: KBDProps) => {
  return (
    <kbd>
      {children}

      <style jsx>{`
        kbd {
          background-color: ${Colors.GrayLighter};
          color: ${Colors.Gray};
          font-size: 14px;
          line-height: 28px;
          text-align: center;
          border-radius: ${Radius.Default};
          padding-left: ${space.spacing(2)};
          padding-right: ${space.spacing(2)};
          display: inline-block;
          border: 1px solid ${Colors.Border};
        }
      `}</style>
    </kbd>
  )
}
