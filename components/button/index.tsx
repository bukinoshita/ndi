import React, { MouseEvent } from 'react'

type ButtonTypes = 'button' | 'reset' | 'submit'

export interface ButtonProps {
  children: string
  onClick?: (event?: MouseEvent<HTMLButtonElement>) => void
  type?: ButtonTypes
}

export const Button = ({ children, onClick, type = 'button' }: ButtonProps) => {
  return (
    <button
      className="inline-flex items-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}
