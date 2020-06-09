import React from 'react'

import { Page } from 'layouts/page'

import { Header } from 'components/header'

const LGBTQ = ({ list }: any) => {
  return (
    <Page>
      <Header title="LGBTQ+" />
    </Page>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/lgbtq`)
  const list = await res.json()

  return { props: { list } }
}

export default LGBTQ
