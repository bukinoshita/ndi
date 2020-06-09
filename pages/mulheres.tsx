import React from 'react'

import { Page } from 'layouts/page'

import { Header } from 'components/header'

const Mulheres = ({ list }: any) => {
  return (
    <Page>
      <Header title="Mulheres" />
    </Page>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/mulheres`)
  const list = await res.json()

  return { props: { list } }
}

export default Mulheres
