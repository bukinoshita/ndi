import React from 'react'

import { Page } from 'layouts/page'

import { Header } from 'components/header'

import { Data } from './api/asiaticos'

export type Props = {
  list: Data
}

const Home = ({ list }: Props) => {
  return (
    <Page>
      <Header title="Pretos" />

      {list.map((item) => item?.term?.title)}
    </Page>
  )
}

export async function getStaticProps() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/pretos`)
  const list = await response.json()

  return { props: { list } }
}

export default Home
