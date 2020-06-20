import React from 'react'
import useSWR from 'swr'

import { Page } from 'layouts/page'

import { Header } from 'components/header'

import { fetch } from 'utils/fetch'

const Mulheres = () => {
  const { data } = useSWR<string[]>('/api/mulheres', fetch)

  return (
    <Page>
      <Header title="Mulheres" />

      {data && data.map((item: any) => item?.term?.title)}
    </Page>
  )
}

export default Mulheres
