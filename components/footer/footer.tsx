import React, { KeyboardEvent } from 'react'

import { space, Responsive } from 'ui/theme'
import { KBD } from 'ui/kbd'

export type FooterProps = {
  onChangeWord: any
}

export const Footer = ({ onChangeWord }: FooterProps) => {
  return (
    <footer>
      <p className="tip">
        <svg
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
        Aperte <KBD>espaço</KBD> para ir para o próximo termo.
      </p>

      <div
        tabIndex={0}
        onClick={onChangeWord}
        role="button"
        onKeyPress={(event: KeyboardEvent<HTMLDivElement>) =>
          event.key === 'Enter' && onChangeWord(event)
        }
      >
        <p className="tap">Clique aqui para ir para o próximo termo.</p>
      </div>

      <style jsx>{`
        footer {
          margin-top: ${space.spacing(10)};
          margin-bottom: ${space.spacing(10)};
        }

        svg {
          margin-right: ${space.spacing(2)};
        }

        .tip {
          display: none;
        }

        .tap {
          display: block;
          padding-top: ${space.spacing(10)};
          padding-bottom: ${space.spacing(10)};
        }

        @media ${Responsive.Small} {
          .tip {
            display: block;
          }

          .tap {
            display: none;
          }
        }
      `}</style>
    </footer>
  )
}
