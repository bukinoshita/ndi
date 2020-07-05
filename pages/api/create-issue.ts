import { NextApiRequest, NextApiResponse } from 'next'
import unfetch from 'isomorphic-unfetch'

const createIssue = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const data = await fetch(
    'https://api.github.com/repos/bukinoshita/naodigaisso/issues',
    {
      method: 'POST',
      headers: {
        authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
      body: request.body,
    }
  )

  const result = await data.json()

  response.json(result)
}

export default createIssue
