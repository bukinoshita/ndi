import React from 'react'

import { Page } from 'layouts/page'

import { Header } from 'components/header'

const Home = ({ list }: any) => {
  return (
    <Page>
      <Header title="Pretos" />
    </Page>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/pretos`)
  const list = await res.json()

  return { props: { list } }
}

export default Home
