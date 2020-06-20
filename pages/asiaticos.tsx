import React from 'react'
import useSWR from 'swr'

import { Page } from 'layouts/page'

import { Header } from 'components/header'

import { fetch } from 'utils/fetch'

const Asiaticos = () => {
  const { data } = useSWR<string[]>('/api/asiaticos', fetch)

  return (
    <Page>
      <Header title="Asiaticos" />

      {data && data.map((item: any) => item?.term?.title)}
    </Page>
  )
}

export default Asiaticos
