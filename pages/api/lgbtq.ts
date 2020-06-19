import { NextApiRequest, NextApiResponse } from 'next'

type Data = Array<{
  term: { title: string; description: string }
  replacements: string[]
}>

const lgbtq = (request: NextApiRequest, response: NextApiResponse<Data>) => {
  response.status(200).json([
    {
      term: {
        title: '',
        description: ''
      },
      replacements: []
    }
  ])
}

export default lgbtq
