import React, { ReactNode } from 'react'

export type ButtonProps = {
  children: ReactNode
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button>
      {children}

      <style jsx>{`
        button {
        }
      `}</style>
    </button>
  )
}
