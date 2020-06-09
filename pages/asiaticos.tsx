import React from 'react'

import { Page } from 'layouts/page'

import { Header } from 'components/header'

const Asiaticos = ({ list }: any) => {
  return (
    <Page>
      <Header title="Asiaticos" />
    </Page>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/asiaticos`)
  const list = await res.json()

  return { props: { list } }
}

export default Asiaticos
