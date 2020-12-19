import React, { KeyboardEvent } from 'react'
import { KBD } from 'components/keyboard-input'

export type FooterProps = {
  onChangeWord: any
}

export const Footer = ({ onChangeWord }: FooterProps) => {
  return (
    <footer className="flex items-center h-24">
      <p className="flex items-center text-black dark:text-white">
        <svg
          className="mr-2"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        Aperte <KBD className="mx-2">espaço</KBD> para ir para o próximo termo.
      </p>
    </footer>
  )
}
