import React from 'react'

import { Page } from 'layouts/page'

import { Header } from 'components/header'

import { Data } from './api/asiaticos'

export type Props = {
  list: Data
}

const LGBTQ = ({ list }: Props) => {
  return (
    <Page>
      <Header title="LGBTQ+" />

      {list.map((item) => item?.term?.title)}
    </Page>
  )
}

export async function getStaticProps() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/lgbtq`)
  const list = await response.json()

  return { props: { list } }
}

export default LGBTQ
