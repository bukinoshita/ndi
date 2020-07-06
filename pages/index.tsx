import React, { useState } from 'react'
import useSWR from 'swr'
import useKeypress from 'react-use-keypress'

import { Page } from 'layouts/page'

import { Word } from 'components/word'

import { fetch } from 'utils/fetch'
import { Header } from 'components/header'
import { Footer } from 'components/footer'

export async function getStaticProps() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API}/pretos`)
  return { props: { data } }
}

export const Home = (props: any) => {
  const KEY_SPACE = ' '
  const [index, setIndex] = useState<number>(0)
  const { data } = useSWR('/api/pretos', fetch, { initialData: props.data })
  const word = data && data[index]

  const onChangeWord = () => {
    const currIndex: number = index + 1
    currIndex >= data.length ? setIndex(0) : setIndex(currIndex)
  }

  useKeypress(KEY_SPACE, onChangeWord)

  return (
    <Page>
      <Header />
      <Word word={word} />
      <Footer onChangeWord={onChangeWord} />
    </Page>
  )
}

export default Home
