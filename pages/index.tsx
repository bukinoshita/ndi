import React from 'react'
import useSWR from 'swr'

import { Page } from 'layouts/page'

import { Header } from 'components/header'

import { fetch } from 'utils/fetch'

const Home = () => {
  const { data } = useSWR<string[]>('/api/pretos', fetch)

  return (
    <Page>
      <Header title="Pretos" />

      {data && data.map((item: any) => item?.term?.title)}
    </Page>
  )
}

export default Home
