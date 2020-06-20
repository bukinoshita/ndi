import React from 'react'
import useSWR from 'swr'

import { Page } from 'layouts/page'

import { Header } from 'components/header'

import { fetch } from 'utils/fetch'

const LGBTQ = () => {
  const { data } = useSWR<string[]>('/api/lgbtq', fetch)

  return (
    <Page>
      <Header title="LGBTQ+" />

      {data && data.map((item: any) => item?.term?.title)}
    </Page>
  )
}

export default LGBTQ
