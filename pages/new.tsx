import React, { useState } from 'react'
import { fetch } from 'utils/fetch'
import { Page } from 'layouts/page'

const New = () => {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const createIssue = () => {
    fetch('/api/create-issue', {
      method: 'POST',
      body: JSON.stringify({ title, body: description }),
    })
  }

  return (
    <Page>
      <section>
        <form onSubmit={createIssue}>
          <input />
          <textarea></textarea>
          <button type="submit">AAA</button>
        </form>
      </section>
    </Page>
  )
}

export default New
