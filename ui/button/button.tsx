import React, { ReactNode } from 'react'
import { Colors, space, Weight, Radius } from 'ui/theme'

export type ButtonProps = {
  children: ReactNode
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button>
      {children}

      <style jsx>{`
        button {
          border: 1px solid ${Colors.Border};
          padding: ${space.spacing(5)} ${space.spacing(6)};
          font-size: 16px;
          font-weight: ${Weight.Semibold};
          border-radius: ${Radius.Large};
          text-align: center;
          background-color: transparent;
          cursor: pointer;
        }
      `}</style>
    </button>
  )
}
