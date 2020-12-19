import React from 'react'
import classnames from 'classnames'

export interface KeyboardInputProps {
  children: string
  className?: string
}

export const KBD = ({ children, className }: KeyboardInputProps) => {
  const classNames = classnames(
    'bg-gray-50 border border-gray-300 rounded py-1 px-2 text-center inline text-gray-700 text-sm leading-5 font-mono dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700',
    className
  )

  return <div className={classNames}>{children}</div>
}
