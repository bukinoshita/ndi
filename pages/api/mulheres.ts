import { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  term: { title: string; description: string }
  replacements: string[]
}[]

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json([
    {
      term: {
        title: '',
        description: '',
      },
      replacements: [],
    },
  ])
}
