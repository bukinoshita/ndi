import { NextApiRequest, NextApiResponse } from 'next'

export type Data = Array<{
  term: { title: string; description: string }
  replacements: string[]
}>

const asiaticos = (
  request: NextApiRequest,
  response: NextApiResponse<Data>
) => {
  response.status(200).json([
    {
      term: {
        title: '',
        description: '',
      },
      replacements: [],
    },
  ])
}

export default asiaticos
