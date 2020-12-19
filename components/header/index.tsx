import React from 'react'

import { Button } from 'components/button'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="flex justify-between items-center w-full h-36">
      <Link href="/">
        <a
          href="/"
          className="text-black dark:text-white text-3xl font-bold underline-none"
        >
          ndi_
        </a>
      </Link>

      <Button
        onClick={() =>
          window.open(
            'https://github.com/bukinoshita/naodigaisso/issues/new?template=2.Feature_request.md'
          )
        }
      >
        Adicionar novo termo
      </Button>
    </header>
  )
}
